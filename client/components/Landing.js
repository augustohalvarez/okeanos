import React, { Component } from 'react';
import Header from './Header';
import Sess from './Sess';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }


  render() {
    return (
      <div className="home">
        <h3>Welcome ("user"... todo)</h3>
        <h1> Your Sessions... </h1>

        <div className="sessContainer">
          <Sess />
        </div>

        <Link to='/saveSess'>Save a session</Link>
      </div>
    );
  }
}

export default Landing;
