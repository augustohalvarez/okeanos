const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./user/userController');
const cookieController = require('./util/cookieController');
const sessionController = require('./session/sessionController');

const app = express();

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI);

app.use(express.static(__dirname +'../dist/')); //serves the index.html

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/**
* --- Express Routes ---
* Express will attempt to match these routes in the order they are declared here.
* If a route handler / middleware handles a request and sends a response without
* calling `next()`, then none of the route handlers after that route will run!
* This can be very useful for adding authorization to certain routes...
*/

/**
* root
*/
// app.get('/', (req, res) => {
//
//   /**
//   * Since we set `ejs` to be the view engine above, `res.render` will parse the
//   * template page we pass it (in this case 'client/secret.ejs') as ejs and produce
//   * a string of proper HTML which will be sent to the client!
//   */
//   res.render('./../client/index');
//
// });


/**
* signup
*/
app.get('/signup', (req, res) => {
  res.send('./../client/signup', {error: null});
});

app.post('/signup', userController.createUser,
                    sessionController.startSession,
                    cookieController.setSSIDCookie,
                    (req, res) => {
                      return res.redirect('/secret');
                    });



/**
* login
*/
app.post('/login', userController.verifyUser,
                   sessionController.startSession,
                   cookieController.setSSIDCookie,
                   (req, res) => {
                     console.log('redirecting to /secret');
                     return res.redirect('/secret');
                   });


/**
* Authorized routes
*/
app.get('/secret', sessionController.isLoggedIn,
                   (req, res) => {
                     console.log('inside /secret get request');
                      userController.getAllUsers((err, users) => {
                        if (err) throw err;
                        console.log('about to render users');
                        res.send('./../client/secret', { users: users });
                      });
                    });

app.post('/secret',
        (req, res) => {
          res.send('./../client/createSession');
        });

app.post('/createSession', userController.storeSesh,
                          (req, res) => {
                             userController.getAllUsers((err, users) => {
                               if (err) throw err;
                               console.log('about to render users');
                               res.send('./../client/secret', { users: users });
                             });
                           });


app.listen(3000);

module.exports = app;
