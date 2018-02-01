import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';
console.log(styles);

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/login', {
      method: 'POST',
      body: data,
    });
  }


  render() {
    return (
      <form action={this.state.handleSubmit}>

        <label for=""></label>
        <input type="text" name="" id="login-un-input" placeholder="username" className="username" />

        <label for=""></label>
        <input type="password" name="" id="login-pw-input" placeholder="password" className="pass" />

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
