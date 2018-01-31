import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/app.css';
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
      <div className="container">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
