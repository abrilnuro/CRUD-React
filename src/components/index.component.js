import React from 'react';
import Axios from 'axios';
import TableRow from './tableRow.component'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {business: []};
    }

    componentDidMount(){
        Axios.get('http://localhost:8080/api/')
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
          <div className="container mt-5 border border-dark p-4">
            <h4 className="text-center text-light bg-dark p-2">Suppliers List</h4>

            <table className="table table-hover table-responsive-lg" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>Business name</th>
                  <th>Phone number</th>
                  <th colSpan="2"></th>
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