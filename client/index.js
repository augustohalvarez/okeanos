// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'typeface-roboto';
//
// import App from './containers/App';
//
// ReactDOM.render(<App />, document.getElementById('app'))





// import React, {Component} from 'react';
// import {render} from 'react-dom';
// import App from './containers/App';
//
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
//
// render(<App />, document.getElementById('app'));




import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './containers/Navbar';

const App = () => (
  <MuiThemeProvider>
    <Navbar />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
