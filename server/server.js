const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./user/userController');
const cookieController = require('./util/cookieController');
const sessionController = require('./session/sessionController');

const app = express();

// require('./_routes')(app);   // <-- or whatever you do to include your API endpoints and middleware
//

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/okeanos' : 'mongodb://localhost/okeanos';
mongoose.connect(mongoURI);

app.use(express.static(__dirname +'../dist/')); //serves the index.html

/**
* Automatically parse urlencoded body content from incoming requests and place it
* in req.body
**/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.post('/api/login', (req, res) => {
  console.log('hi api/login backend');
  console.log('req.body ---> ', req.body);

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


// app.listen(3000);

app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});

module.exports = app;
