import React from 'react';
import Axios from 'axios';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      temporalFile: null
    }
  }

  componentDidMount(){
    const id = "5e890c19df0ebd51ae5595f5";
    Axios.get('http://localhost:8080/api/image/'+ id)
      .then(response => {
        let base64String = 'data:image/png;base64,' + response.data.image.data;
        this.setState({temporalFile: base64String})
      }).catch(function (error) {
        console.log(error);
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
      temporalFile: URL.createObjectURL(e.target.files[0]),
    });
  }

  submit = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);

    Axios.post('http://localhost:8080/api/upload-image', formData, {
      headers: {'Content-Type': 'multipart/form-data' }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

          <img style={{width: 200, height: 150}}
            className="border border-dark"
            src={this.state.temporalFile}
            alt="No available"/>
        
            <div className="row">
                <div className="col-12">
                  <div className="form-group files color">
                    <input type="file" className="form-control" 
                      name="file" onChange={this.handleChange}/>
                  </div>
                </div>
            </div>
        </div>

        <button onClick={this.submit}>submit</button>

      </React.Fragment>
    );
  }
}
export default Upload;