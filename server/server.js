/*** server.js ***/

// Controller Requirements
// const userController = require('./controllers/userController');
// const cookieController = require('./util/cookieController');
// const sessionController = require('./controllers/sessionController');

// const app = express();

// This tells Node/Express that the /client folder should act as the web root
// app.use(express.static('client'));

// Automatically parse urlencoded body content from incoming requests and place it
// app.use(bodyParser.urlencoded({ extended: true }));

// Automatically parse cookies and puts info in req object
// app.use(cookieParser());



// Root
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../www/index.html'));
// });
//
// app.set('port', 3000);
// app.listen(app.get('port'), function () {
//   console.log('Node server listening on port 3000');
// });
//
// module.exports = app;




"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./make-webpack-config')('dev');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// --------your proxy----------------------
var app = express();
// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


// -----your-webpack-dev-server------------------
var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});

// run the two servers
server.listen(8081, "localhost", function() {});
app.listen(8080);

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
