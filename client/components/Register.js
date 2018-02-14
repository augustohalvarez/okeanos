import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <form method='POST' action='/api/register' autoComplete='off'>

        <input type="email" name="email"  placeholder="email" className="email" />

        <input type="emailConf" name="emailConf"  placeholder="confirm email" className="email" />

        <input type="password" name="password" placeholder="password" className="pass" />

        <input type="password" name="passwordConf" placeholder="confirm password" className="pass" />

        <button type="submit">Register</button>

        <span id='notRegisteredSpan'>
          <h4> Have an account? </h4>
        </span>

        <span id='registerLinkSpan'>
          <Link to='/login'>Login</Link>
        </span>

      </form>
    );
  }
}

export default Register;
