// modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import update from 'react-addons-update';
// import axios from 'axios';

// styles
// import '../styles/App.css';

// components
// import Header from './Header';
// import SearchBar from './SearchBar';
// import ProductList from './ProductList';
// import Cart from './Cart';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '/'
    }
  }


  render() {
    const products = this.state.products;
    return (
      <div className="App">
        <h1>This is Okeanos bitch</h1>
      </div>
    );
  }
}

export default App;
