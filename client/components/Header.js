import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  width: '100%',
  height: '75px',
  backgroundColor: '#87C8FF',
  color: 'white'
}

const imgStyle = {
  height: '50px',
  width: '50px',
  position: 'absolute',
  left: '10px',
  top: '10px'
}

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles}>
      </div>
    );
  }
}

export default Header;
