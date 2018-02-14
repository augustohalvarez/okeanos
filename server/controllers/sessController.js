/*** sessController.js ***/

/*** usrController.js ***/

const db = require('../database');

const sessController = {};

sessController.saveSess = (req, res, next) => {
  // Three Steps:
  // 1) Get form data from req object
  // 2) Get swell data from Magicseaweed API
  // 3) Save all data to database
  console.log('req.body ---> ', req.body);


  // const queryStr = 'INSERT INTO usr (email, email_conf, password, password_conf) values ($1, $2, $3, $4) RETURNING _id';
  // const { email, email_conf, password, password_conf } = req.body;
  // const valuesArr = [  email, email_conf, password, password_conf ];
  //
  // db.conn.query(queryStr, valuesArr, (err, data) => {
  //   if (err) {
  //     return res.status(404).end("An Error occured on DB Insert items_table");
  //   }
  //   if (data.length === 0) {
  //     console.log('Error creating new Entry..');
  //     return;
  //   }
  //   next();
  // });

  next();
};

module.exports = sessController;





// const modelImports = require('./userModel');
// let User = modelImports.user;
// let Sesh = modelImports.sesh;
// // console.log('User model: ', User);
// // console.log('Sesh model: ', Sesh);
//
// let request = require('request');
//
// const cookieController = require('./../util/cookieController');
// const sessionController = require('./../session/sessionController');
// const bcrypt = require('bcryptjs');
//
// const userController = {};
//
// let currentUserName;
//
// /**
// * getAllUsers
// *
// * @param next - Callback Function w signature (err, users)
// */
// userController.getAllUsers = (next) => {
//   console.log('inside getAllUsers');
//   console.log(currentUserName);
//   User.find({}, next);
// };
//
// /**
// * createUser - create a new User model and then save the user to the database.
// * @param req - http.IncomingRequest
// * @param res - http.ServerResponse
// */
// userController.createUser = (req, res, next) => {
//   currentUserName = req.body.username;
//   User.create(req.body, (err, result) => {
//     if (err) {
//       return res.render('./../client/signup', {error: err});
//     }
//     req.currentUserId = result._id;
//     req.currentUN = req.body.username;
//     next();
//   });
// };
//
// userController.storeSesh = (req, res, next) => {
//   // initialize new object to be stored in seshes document;
//   let newSeshDocument = {};
//
//   //make request to weather API
//   let reqDate = req.body.date;
//   console.log(reqDate);
//
//   request(`http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=dc34316e80ec441386e61325171110&format=json&date=${reqDate}&q=33.749,119.053`, function (error, response, body) {
//     setTimeout(function() {
//       if (error) {
//         console.log('api req error: ', error);
//       } else {
//         let hourlyData = JSON.parse(body).data.weather[0].hourly;
//         // hourlyData is now an array of objects(each containing data for a 3 hour block)
//         // from which element we grab from depends on timeIn and timeOut
//
//         // hourlyData[0] corresponds to 0
//         // hourlyData[1] corresponds to 300
//         // hourlyData[2] corresponds to 600
//         // hourlyData[3] corresponds to 900
//         // and so forth
//
//         // we need a function that rounds to the nearest hour in multiples of 3;
//         // let convertTime = (timeIn) => {
//         //   let numTimeIn = parseInt(timeIn);
//         //   // round down to nearest multiple of 3
//         // }
//
//         var timeToIndex = (timeStr) => {
//           var timeNum = parseInt(timeStr);
//           return (timeNum / 300);
//         }
//         console.log('updating newSeshDocument here!');
//         newSeshDocument.date = req.body.date;
//         newSeshDocument.location = req.body.location;
//         newSeshDocument.rating = req.body.rating;
//         newSeshDocument.height = hourlyData[timeToIndex(req.body.timeIn)].swellHeight_ft;
//         newSeshDocument.direction = hourlyData[timeToIndex(req.body.timeIn)].swellDir;
//         newSeshDocument.windSpeed = hourlyData[timeToIndex(req.body.timeIn)].windspeedMiles;
//         newSeshDocument.windDirection = hourlyData[timeToIndex(req.body.timeIn)].winddirDegree;
//       }
//
//       console.log('newSeshDocument: ', newSeshDocument)
//
//       User.findOne({username: currentUserName}, function(err, doc) {
//         console.log('doc: ', doc);
//         var subDoc = doc.seshes;
//         console.log('subDoc: ', subDoc);
//         subDoc.push(newSeshDocument);
//         console.log('subDoc AFTER PUSH: ', subDoc);
//
//         doc.save().then(function(savedDoc) {
//           console.log('Success! savedDoc: ', savedDoc);
//           next();
//         }).catch(function(err) {
//           res.status(500).send(err);
//         });
//       });
//
//     }, 2000);
//
//   });
//   console.log('newSeshDocument right after API request: ', newSeshDocument);
//   // create new object out of req.body and include swell database
//   // get current user
//
//   // push new document in current user's seshes prop.
//   // User.seshes.push(newSeshDocument);
//   // User.save(function (err, doc) {
//   //   if (err) {
//   //     console.log('save user db error: ', err)
//   //   } else {
//   //     console.log('save user db success: ', doc);
//   //   }
//   // });
//   // console.log('currentUserName for user.findoneandupdate: ', currentUserName);
//   // User.findOneAndUpdate({username: currentUserName}, {$set: {seshes: seshDoc}}, { new: true }, (err, doc) => {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(doc);
//   //   }
//   // });
//
//
// };
//
// /**
// * verifyUser - Obtain username and password from the request body, locate
// * the appropriate user in the database, and then authenticate the submitted password
// * against the password stored in the database.
// *
// * @param req - http.IncomingRequest
// * @param res - http.ServerResponse
// */
// userController.verifyUser = (req, res, next) => {
//   console.log('verify user ', req.body);
//   const verify = new Promise((resolve, reject) => {
//     User.findOne({username: req.body.username}, (err, doc) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(doc);
//       }
//     });
//   });
//
//   verify
//     .then((result) => {
//       if (result.length === 0) {
//         return res.redirect('/signup');
//       } else {
//         // STORE USER NAME FROM RESPONSE BODY IN GLOAL VARIABLE
//         // THIS VARIABLE WILL UPDATE EVERY TIME WE VERIFY A USER.
//         // VARIABLE WILL BE USED IN GETTING ALL SESHES
//         currentUserName = req.body.username;
//         result.comparePassword(req.body.password, (isMatch) => {
//           if (isMatch) {
//             req.currentUserId = result._id;
//             next();
//           } else {
//             res.redirect('/');
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       console.log('error: ', err);
//     });
// };
//






// const seshSchema = new Schema({
//   date: {
//     type: String, required: true
//   },
//   location: {
//     type: String, required: true
//   },
//   rating: {
//     type: Number, required: true
//   },
//   timeIn: {
//     type: Date, required: true
//   },
//   timeOut: {
//     type: Date, required: true
//   },
//   height: {
//     type: Number, required: true
//   },
//   direction: {
//     type: Number, required: true
//   },
//   windSpeed: {
//     type: Number, required: true
//   },
//   windDirection: {
//     type: Number, required: true
//   }
// });
