import React from 'react';

class Create extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            personName: '',
            businessName: '',
            businessGstNumber: ''
        }

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangePersonName(e) {
        this.setState({personName: e.target.value});
    }

    onChangeBusinessName(e) {
        this.setState({businessName: e.target.value});
    }

    onChangeGstNumber(e) {
        this.setState({businessGstNumber: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        alert(this.state.businessGstNumber)
    }

    render() {
        return(
            <React.Fragment>
                <div style={{marginTop: 10}}>
                    <h3>Add a new Business</h3>

                    <form>
                        <div className="form-group">
                            <label>Add Person Name:</label>
                            <input type="text" className="form-control" 
                            value={this.state.personName}
                            onChange={this.onChangePersonName}/>
                        </div>
                        <div className="form-group">
                            <label>Business Name: </label>
                            <input type="text" className="form-control"
                            value={this.state.businessName}
                            onChange={this.onChangeBusinessName}/>
                        </div>

                        <div className="form-group">
                            <label>Add GST Number: </label>
                            <input type="text" className="form-control"
                            vaue={this.state.businessGstNumber}
                            onChange={this.onChangeGstNumber}/>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Register Business" 
                            className="btn btn-primary" onClick={this.onSubmit}/>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Create;