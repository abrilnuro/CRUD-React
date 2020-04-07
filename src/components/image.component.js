import React from 'react';
import Axios from 'axios';

class Image extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
        file: '',
        image: ''
    }
  }

  componentDidMount(){
    const newSupplier = this.props.dataFromParent;

    if(!newSupplier){
      const idSupplier = "";
      Axios.get('http://localhost:8080/api/image/' + idSupplier)
        .then(response => {
          let base64String = 'data:image/png;base64,' + response.data.image.data;
          this.setState({image: base64String})
        }).catch(function (error) {
          console.log(error);
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      image: URL.createObjectURL(e.target.files[0])
    });

    var reader = new FileReader();
    reader.onload = () => {
      var base64 = reader.result.replace(/^data:.+;base64,/, '');
      this.setState({ file: base64 });
      console.log("File could be read: " + base64);
    };
    
    reader.onerror = function(event) {
      console.error("File could not be read: " + event.target.error.code);
    };
    
    reader.readAsDataURL(e.target.files[0]);
  }

  submitOnlyImage = (e) => {
    e.preventDefault();
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
            src={this.state.image}
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
      </React.Fragment>
    );
  }
}
export default Image;