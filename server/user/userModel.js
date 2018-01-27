const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* Hint: Why is bcrypt required here?
*/
const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const seshSchema = new Schema({
  date: {type: String, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true},
  timeIn: {type: Date, required: true},
  timeOut: {type: Date, required: true},
  height: {type: Number, required: true},
  direction: {type: Number, required: true},
  windSpeed: {type: Number, required: true},
  windDirection: {type: Number, required: true}
});

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  seshes: Array
});

// hash the pw before saving to db
userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return console.log('comparePassword error: ', err);
        cb(isMatch);
    });
};

module.exports = {
  user: mongoose.model('User', userSchema),
  sesh: mongoose.model('Sesh', seshSchema)
};
