const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const usrController = require('./controllers/usrController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');
const sessController = require('./controllers/sessController');

const db = require('./database.js');
const app = express();

app.use(express.static(__dirname +'../dist/')); //serves the index.html
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.post('/api/login', (req, res) => {
  console.log('hi api/login backend');
  console.log('req.body ---> ', req.body);

});

app.post('api/register', usrController.createUsr, (req, res) => {
  console.log('called app.post api/register');
});

app.post('/api/saveSess', sessController.saveSess, (req, res) => {
  console.log('called app.post api/saveSess');
});

app.get('/api/saveSess', (req, res) => {
  console.log('called app.get api/saveSess');
});



// app.post('/signup', userController.createUser,
//                     sessionController.startSession,
//                     cookieController.setSSIDCookie,
//                     (req, res) => {
//                       return res.redirect('/secret');
//                     });



/**
* login
**/
// app.post('/login', userController.verifyUser,
//                    sessionController.startSession,
//                    cookieController.setSSIDCookie,
//                    (req, res) => {
//                      console.log('redirecting to /secret');
//                      return res.redirect('/secret');
//                    });


/**
* Authorized routes
**/
// app.get('/secret', sessionController.isLoggedIn,
//                    (req, res) => {
//                      console.log('inside /secret get request');
//                       userController.getAllUsers((err, users) => {
//                         if (err) throw err;
//                         console.log('about to render users');
//                         res.send('./../client/secret', { users: users });
//                       });
//                     });

// app.post('/secret',
//         (req, res) => {
//           res.send('./../client/createSession');
//         });

// app.post('/createSession', userController.storeSesh,
//                           (req, res) => {
//                              userController.getAllUsers((err, users) => {
//                                if (err) throw err;
//                                console.log('about to render users');
//                                res.send('./../client/secret', { users: users });
//                              });
//                            });


// app.listen(3000);

app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});

module.exports = app;
