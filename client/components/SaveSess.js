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
      <form method='POST' action='/api/saveSess' autoComplete='off'>

        <input type="date" name="date"  placeholder="date" className="date" />

        <input type="text" name="location"  placeholder="location" className="location" />

        <input type="number" min="1" max="10" name="rating" placeholder="rating" className="rating" />

        <input type="time" name="timeIn" placeholder="time in" className="timeIn" />

        <input type="time" name="timeOut" placeholder="time out" className="timeOut" />

        <button type="submit">Save Session</button>
      </form>
    );
  }
}

export default SaveSess;
