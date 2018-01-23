/*** server.js ***/

// NPM Requirements
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Controller Requirements
// const userController = require('./controllers/userController');
// const cookieController = require('./util/cookieController');
// const sessionController = require('./controllers/sessionController');

const app = express();

// This tells Node/Express that the /client folder should act as the web root
app.use(express.static('client'));

// Automatically parse urlencoded body content from incoming requests and place it
app.use(bodyParser.urlencoded({ extended: true }));

// Automatically parse cookies and puts info in req object
app.use(cookieParser());



// Root
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../www/index.html'));
});

app.set('port', 3000);
app.listen(app.get('port'), function () {
  console.log('Node server listening on port 3000');
});

module.exports = app;


//
//
// /**
// * signup
// */
// app.get('/signup', (req, res) => {
//   res.render('./../client/signup', {error: null});
// });
//
// app.post('/signup', userController.createUser,
//                     sessionController.startSession,
//                     cookieController.setSSIDCookie,
//                     (req, res) => {
//                       return res.redirect('/secret');
//                     });
//
//
//
// /**
// * login
// */
// app.post('/login', userController.verifyUser,
//                    sessionController.startSession,
//                    cookieController.setSSIDCookie,
//                    (req, res) => {
//                      console.log('redirecting to /secret');
//                      return res.redirect('/secret');
//                    });
//
//
// /**
// * Authorized routes
// */
// app.get('/secret', sessionController.isLoggedIn,
//                    (req, res) => {
//                      console.log('inside /secret get request');
//                       userController.getAllUsers((err, users) => {
//                         if (err) throw err;
//                         console.log('about to render users');
//                         res.render('./../client/secret', { users: users });
//                       });
//                     });
//
// app.post('/secret',
//         (req, res) => {
//           res.render('./../client/createSession');
//         });
//
// app.post('/createSession', userController.storeSesh,
//                           (req, res) => {
//                              userController.getAllUsers((err, users) => {
//                                if (err) throw err;
//                                console.log('about to render users');
//                                res.render('./../client/secret', { users: users });
//                              });
//                            });
