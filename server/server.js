const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./user/userController');
const cookieController = require('./util/cookieController');
const sessionController = require('./session/sessionController');

const app = express();

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/okeanos' : 'mongodb://localhost/okeanos';
mongoose.connect(mongoURI);

app.use(authChecker);
app.use(express.static(__dirname +'../dist/')); //serves the index.html

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
**/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', sessionController.isLoggedIn, (req, res) => {
  console.log('hi');
});

/**
* register
**/
app.get('/register', (req, res) => {
  res.send('./../client/register', {error: null});
});

app.post('/signup', userController.createUser,
                    sessionController.startSession,
                    cookieController.setSSIDCookie,
                    (req, res) => {
                      return res.redirect('/secret');
                    });



/**
* login
**/
app.post('/login', userController.verifyUser,
                   sessionController.startSession,
                   cookieController.setSSIDCookie,
                   (req, res) => {
                     console.log('redirecting to /secret');
                     return res.redirect('/secret');
                   });


/**
* Authorized routes
**/
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
