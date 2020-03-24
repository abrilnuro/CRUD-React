import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateComponent from './components/create.component.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to={"/"} className="navbar-brand text-light">CRUD</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light">Home</Link>
                </li>

                <li className="nav-item">
                  <Link to={'/create'} className="nav-link text-light">Create</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/create' component={CreateComponent}/>
          </Switch>

        </div>
      </Router>

    );
  }
}
export default App;