import React from 'react';
import Axios from 'axios';
import ImageComponent from './image.component'
import { resolve } from 'q';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newSupplier: true,
            personName: '',
            businessName: '',
            businessGstNumber: '',
            formValid: false
        }

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.fileRef = React.createRef();
    }

    onChangePersonName(e) {
        this.setState({
            personName: e.target.value,
            formValid: this.validateForm()
        });
    }

    onChangeBusinessName(e) {
        this.setState({
            businessName: e.target.value,
            formValid: this.validateForm()
        });
    }

    onChangeGstNumber(e) {
        this.setState({
            businessGstNumber: e.target.value,
            formValid: this.validateForm()
        });
    }

    validateForm() {
        let personName = this.state.personName;
        let businessName = this.state.businessName;
        let businessGstNumber = this.state.businessGstNumber;
        if (personName !== "" && businessName !== "" && businessGstNumber !== "") {
            return true;
        }
        return false;
    }

    onSubmit(e) {
        e.preventDefault();

        const object = {
            name: this.state.personName,
            description: this.state.businessName,
            phoneNumber: this.state.businessGstNumber,
            image:{
                title: this.state.personName,
                image: this.fileRef.current.state.file
            }
        } 
        
        Axios.post('http://localhost:8080/api', object,{
                headers: {'Content-Type': 'application/json'}
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });

        this.setState({
            personName: '',
            businessName: '',
            businessGstNumber: ''
        });
    }

    render() {
        return(
            <React.Fragment>
                <div className="container mt-5 border border-dark p-4">
                    <h4 className="text-center text-light bg-dark p-2">Add a new Supplier</h4>

                    <div className="container row"> 

                        <form className="col-8 mt-3"> 
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Supplier Name"
                                value={this.state.personName}
                                onChange={this.onChangePersonName}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control"
                                placeholder="Business Name"
                                value={this.state.businessName}
                                onChange={this.onChangeBusinessName}/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control"
                                placeholder="Phone number"
                                value={this.state.businessGstNumber}
                                onChange={this.onChangeGstNumber}/>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Submit" 
                                className="btn btn-primary"
                                onClick={this.onSubmit}/>
                            </div>
                        </form>

                        <div className="col-3 offset-1">
                            <ImageComponent ref={this.fileRef}
                                dataFromParent={this.state.newSupplier}/>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Create;