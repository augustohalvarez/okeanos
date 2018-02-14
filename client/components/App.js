// modules
import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/app.css';

// components
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import SaveSess from './SaveSess';

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
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/saveSess" component={SaveSess} />
        </Switch>
      </div>
    );
  }
}

export default App;
