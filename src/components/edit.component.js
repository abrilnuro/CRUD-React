import React, { Component } from 'react';
import axios from 'axios';

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
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.personName}
                      onChange={this.onChangePersonName}
                      />
                </div>

                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.businessName}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.businessGstNumber}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
export default Edit;