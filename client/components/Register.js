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
      foo: 'bar'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/register', {
      method: 'POST',
      body: data,
    });
  }


  render() {
    return (
      <form action={this.state.handleSubmit}>

        <label for=""></label>
        <input type="text" name="" id="login-un-input" placeholder="email" className="username" />

        <label for=""></label>
        <input type="password" name="" id="login-pw-input" placeholder="password" className="pass" />

        <label for=""></label>
        <input type="password" name="" id="login-pw-input" placeholder="confirm password" className="pass" />

        <button type="submit">Login</button>

        <span id='notRegisteredSpan'>
          <h4>Have an account? </h4>
        </span>

        <span id='registerLinkSpan'>
          <Link to='/login'>Login</Link>
        </span>

      </form>
    );
  }
}

export default Register;
