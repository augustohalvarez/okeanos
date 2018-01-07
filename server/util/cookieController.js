
const sessionController = require('./../session/sessionController');

const cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

/**
* setCookie - set a cookie with a random number
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setCookie(req, res, next) {
  res.cookie('codesmith', 'hi');
  res.cookie('secret', (Math.floor(Math.random() * (99))).toString());
  next();
}

/**
* setSSIDCookie - store the supplied id in a cookie
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setSSIDCookie(req, res, next) {
  console.log('set ssid cookie');
  res.cookie('ssid', req.currentUserId, {httpOnly: true, maxAge: 6000000000});
  console.log('cookie sent', req.currentUserId);
  next();
}

module.exports = cookieController;
