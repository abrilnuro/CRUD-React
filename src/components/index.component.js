import React from 'react';
import Axios from 'axios';
import TableRow from './tableRow.component'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        Axios.get('http://localhost:4000/business')
          .then(response => {
            this.setState({ business: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
    }


    tabRow() {
        return this.state.business.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
          <div>
            <h3 align="center">Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Business</th>
                  <th>GST Number</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
}

export default Index;