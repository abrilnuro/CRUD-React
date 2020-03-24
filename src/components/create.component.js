import React from 'react';

class Create extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div style={{marginTop: 10}}>
                    <h3>Add a new Business</h3>

                    <form>
                        <div className="form-group">
                            <label>Add Person Name:</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="form-group">
                            <label>Add GST Number: </label>
                            <input type="text" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Register Business" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
export default Create;