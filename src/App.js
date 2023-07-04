import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
