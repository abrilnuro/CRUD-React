import React from 'react';
import Input from '@material-ui/core/Input';
import '../styles/styles.css';
import '../styles/styles.js';

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
      <div className="border border-dark">
        <img style={{width: 200, height: 200}}
            src={this.state.file}/>

        <input type="file" onChange={this.handleChange}
            className="" />
        
      </div>
    );
  }
}
export default Upload;