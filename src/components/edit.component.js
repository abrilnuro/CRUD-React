import React, { Component } from 'react';
import axios from 'axios';
import UploadImage from './uploadImage.component'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personName: '',
      businessName: '',
      businessGstNumber:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                personName: response.data.personName, 
                businessName: response.data.businessName,
                businessGstNumber: response.data.businessGstNumber });
          })
          .catch(function (error) {
              console.log(error);
          })
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
    const obj = {
      personName: this.state.personName,
      businessName: this.state.businessName,
      businessGstNumber: this.state.businessGstNumber
    };

    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
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
                        onChange={this.onChangeBusinessName}
                        />
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
                <UploadImage/>
              </div>
            </div>
        </div>
    )
  }
}
export default Edit;