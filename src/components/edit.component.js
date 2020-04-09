import React, { Component } from 'react';
import Axios from 'axios';
import Image from './image.component'

class Edit extends Component {
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.fileRef = React.createRef();

    this.state = {
      id: '',
      personName: '',
      businessName: '',
      businessGstNumber:'',
      image: ''
    }
  }

  componentDidMount(){
    Axios.get('http://localhost:8080/api/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          id: response.data.id,
          personName: response.data.name, 
          businessName: response.data.description,
          businessGstNumber: response.data.phoneNumber,
          image: {
            id: response.data.image.id
          }
        });
        this.fileRef.current.setFile('data:image/png;base64,' + response.data.image.image);
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
  }

  onChangePersonName(e) {
    this.setState({personName: e.target.value});
  }
  onChangeBusinessName(e) {
    this.setState({businessName: e.target.value})  
  }
  onChangeGstNumber(e) {
    this.setState({businessGstNumber: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    const object = {
      id: this.state.id,
      name: this.state.personName,
      description: this.state.businessName,
      phoneNumber: this.state.businessGstNumber,
      image: {
        id: this.state.image.id,
        idSupplier: this.state.id,
        title: this.state.personName,
        image: this.fileRef.current.state.file.replace(/^data:.+;base64,/, '')
      }
    };

    Axios.patch('http://localhost:8080/api/', object)
        .then(function (response) {
          console.log(response.data);
        }).catch(function (error) {
          console.log(error);
        });
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div className="container border border-dark mt-5 p-4">
            <h4 className="text-center text-light bg-dark p-2">Update Supplier</h4>

            <div className="container row">

              <form className="col-8 mt-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label className="font-weight-bold">Supplier Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.personName}
                        onChange={this.onChangePersonName}
                        />
                  </div>

                  <div className="form-group">
                      <label className="font-weight-bold">Business Name</label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.businessName}
                        onChange={this.onChangeBusinessName}/>
                  </div>
                  <div className="form-group">
                      <label className="font-weight-bold">Phone Number</label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.businessGstNumber}
                        onChange={this.onChangeGstNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" 
                        value="Update" 
                        className="btn btn-primary"/>
                  </div>
              </form>

              <div className="col-3 offset-1 mt-3">
                <Image ref={this.fileRef}/>
              </div>
            </div>
        </div>
    )
  }
}
export default Edit;