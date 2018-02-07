import React, { Component } from 'react';
import Header from './Header';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }


  render() {
    return (
      <div className="App">
        <h3>Landing page</h3>
        <h3>Info about site</h3>
      </div>
    );
  }
}

export default Landing;
