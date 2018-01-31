// modules
import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import axios from 'axios';

// styles
import styles from './../styles/app.css';

// components
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '../images/okeanosBackground.jpg'
    }
  }

  render() {
    return (
      <div className={styles.app} >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Link to="/">Home</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default App;
