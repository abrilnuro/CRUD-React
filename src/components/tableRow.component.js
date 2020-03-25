import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  } 
  
  delete() {
    Axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
      
      window.location.reload(false);
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.personName}
          </td>
          <td>
            {this.props.obj.businessName}
          </td>
          <td>
            {this.props.obj.businessGstNumber}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}
export default TableRow;