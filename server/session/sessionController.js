const Session = require('./sessionModel');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*
*
*/
sessionController.isLoggedIn = (req, res, next) => {
  console.log('is logged in?')
  if (req.cookies) {
    console.log('req. cookie exists ', req.cookies);
    if ('ssid' in req.cookies) {
      console.log('ssid exists inside req.cookie ');
      let userSessionId = req.cookies.ssid;
      console.log('userSessionId From cookie(ssid): ',  userSessionId);


      Session.findOne({cookieId: userSessionId}, (err, doc) => {

        if (err) {
          console.log('db error: ', err);
        } else {
          console.log('doc: ', doc);
          if (doc) {
            next();
          } else {
            console.log('redirecting to login...');
            res.redirect('/signup');
          }
        }
      })
    }
  }
};

/**
* startSession - create a new Session model and then save the new session to the
* database.
*
*
*/
sessionController.startSession = (req, res, next) => {
  console.log('start session');
  Session.create({cookieId: req.currentUserId}, (err, result) => {
    if (err) {
      res.redirect('/');
      return console.log('error creating session: ', err);
    } else {
      console.log('successfully created session in db');
      next();
    }
  });
};

module.exports = sessionController;
