import React from 'react';
import Axios from 'axios';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            personName: '',
            businessName: '',
            businessGstNumber: '',
            formValid: false
        }

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            personName: this.state.personName,
            businessName: this.state.businessName,
            businessGstNumber: this.state.businessGstNumber
        }

        Axios.post('http://localhost:4000/business/add', object)
            .then(res => console.log(res.data));

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

                    <form className="col-6"> 
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
                            disabled={!this.state.formValid}
                            onClick={this.onSubmit}/>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Create;