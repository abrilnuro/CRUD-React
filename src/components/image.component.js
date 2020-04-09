import React from 'react';

class Image extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
        file: ''
    }
  }

  handleChange = (e) => {
    var reader = new FileReader();
    reader.onload = () => {
      this.setState({ file: reader.result });
      console.log("File could be read: " + reader.result);
    };
    
    reader.onerror = function(event) {
      console.error("File could not be read: " + event.target.error.code);
    };
    
    reader.readAsDataURL(e.target.files[0]);
  }

  setFile = (e) => {
    this.setState({file: e});
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">

          <img style={{width: 200, height: 150}}
            className="border border-dark"
            src={this.state.file}
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