import React from 'react';
import { Link } from 'react-router-dom';

class TableRow extends React.Component {
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
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;