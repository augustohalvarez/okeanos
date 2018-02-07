import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   let data = {
  //     username: document.getElementById('login-un-input').value,
  //     password: document.getElementById('login-pw-input').value
  //   };
  //
  //   console.log('data ->', data);
  //
  //   fetch('/api/login', {
  //     method: 'POST',
  //     body: data
  //   });
  // }

  render() {
    return (
      <form method='POST' action='/api/login' autoComplete='off'>
        <input type="text" name="username" id="login-un-input" placeholder="username" className="username" />
        <input type="password" name="password" id="login-pw-input" placeholder="password" className="pass" />

        <button type="submit">Login</button>

        <span id='notRegisteredSpan'>
          <h4>Don't have an account? </h4>
        </span>

        <span id='registerLinkSpan'>
          <Link to='/register'>Register</Link>
        </span>

      </form>
    );
  }
}

export default Login;
