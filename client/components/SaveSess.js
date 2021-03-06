import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';

class SaveSess extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div className="formContainer">
        <h3>Input your session details</h3>
        <form method='POST' action='/api/saveSess' autoComplete='off'>

          <input type="date" name="date"  placeholder="date" className="date" required/>

          <input type="text" name="location"  placeholder="location" className="location" required/>

          <input type="number" min="1" max="10" name="rating" placeholder="rating" className="rating" required/>

          <input type="number" min="1" max="10" name="shape" placeholder="shape(1: closed out, 10: A frames)" className="rating" required/>

          <input type="time" name="timeIn" placeholder="time in" className="timeIn" required/>

          <input type="time" name="timeOut" placeholder="time out" className="timeOut" required/>

          <button type="submit">Save Session</button>
        </form>
      </div>

    );
  }
}

export default SaveSess;
