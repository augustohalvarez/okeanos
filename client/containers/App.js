







//
// import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
// import {deepOrange500} from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
// const styles = {
//   container: {
//     textAlign: 'center',
//     paddingTop: 200,
//   },
// };
//
// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: deepOrange500,
//   },
// });
//
// class Main extends Component {
//   constructor(props, context) {
//     super(props, context);
//
//     this.state = {
//       open: false,
//     };
//   }
//
//   handleRequestClose = () => {
//     this.setState({
//       open: false,
//     });
//   }
//
//   handleTouchTap = () => {
//     this.setState({
//       open: true,
//     });
//   }
//
//   render() {
//     const standardActions = (
//       <FlatButton
//         label="Ok"
//         primary={true}
//         onTouchTap={this.handleRequestClose}
//       />
//     );
//
//     return (
//       <MuiThemeProvider muiTheme={muiTheme}>
//         <div style={styles.container}>
//           <Dialog
//             open={this.state.open}
//             title="Super Secret Password"
//             actions={standardActions}
//             onRequestClose={this.handleRequestClose}
//           >
//             1-2-3-4-5
//           </Dialog>
//           <h1>Material-UI</h1>
//           <h2>example project</h2>
//           <RaisedButton
//             label="Super Secret Password"
//             secondary={true}
//             onTouchTap={this.handleTouchTap}
//           />
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
//
// export default Main;


















// import React, {Component} from 'react';
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import injectTapEventPlugin from 'react-tap-event-plugin';
//
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
//
// class Login extends Component {
//   static muiName = 'FlatButton';
//
//   render() {
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }
//
// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );
//
// Logged.muiName = 'IconMenu';
//
// /**
//  * This example is taking advantage of the composability of the `AppBar`
//  * to render different components depending on the application state.
//  */
// class AppBarExampleComposition extends Component {
//   state = {
//     logged: true,
//   };
//
//   handleChange = (event, logged) => {
//     this.setState({logged: logged});
//   };
//
//   render() {
//     return (
//       <div>
//         <Toggle
//           label="Logged"
//           defaultToggled={true}
//           onToggle={this.handleChange}
//           labelPosition="right"
//           style={{margin: 20}}
//         />
//         <AppBar
//           title="Title"
//           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//           iconElementRight={this.state.logged ? <Logged /> : <Login />}
//         />
//       </div>
//     );
//   }
// }
//
// export default AppBarExampleComposition;
