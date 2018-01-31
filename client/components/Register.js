import React, { Component } from 'react';


// styles
import styles from './../styles/app.css';

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
      <div className="container">
        <div className="form">
          <form className="register-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
            <p className="message">Already registered? <a href="#">Sign In</a></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
