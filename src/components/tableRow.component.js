import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  } 
  
  delete() {
    /*Axios.get('http://localhost:8080/' + this.props.obj.id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));*/
    
    Axios.delete('http://localhost:8080/api/' + this.props.obj.id)
      .then(function (response) {
          console.log(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
      
      window.location.reload(false);
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.phoneNumber}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}
export default TableRow;