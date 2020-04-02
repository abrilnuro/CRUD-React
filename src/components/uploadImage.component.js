import React from 'react';
import Axios from 'axios';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      temporalFile: null,
      photo: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    const id = "5e865948f1e7d063000cf9cc";
    Axios.get('http://localhost:8080/api/photos'+ id)
      .then(response => {
        this.setState({ 
          temporalFile: URL.createObjectURL(response.data) 
        });
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

    Axios.post('http://localhost:8080/api/upload', formData, {
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
            src={this.state.temporalFile}/>

          <img src={"data:image/png;base64," + this.state.photo} />

        
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