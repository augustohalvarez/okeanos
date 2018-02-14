


/** sessionModel.js
* Check out the `createdAt` field below. This is set up to use Mongo's automatic document
* expiration service by giving the Mongoose schema the `expires` property.
* After 30 seconds, the session will automatically be removed from the collection!
* (actually, Mongo's cleanup service only runs once per minute so the session
* could last up to 90 seconds before it's deleted, but still pretty cool!)
*/
// const sessionSchema = new Schema({
//   cookieId: { type: String, required: true, unique: true },
//   createdAt: { type: Date, expires: 60000, default: Date.now } // expires in one minute
// });
//
// module.exports = mongoose.model('Session', sessionSchema);

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
