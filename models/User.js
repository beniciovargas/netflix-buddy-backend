const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  nextUp: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }],
  currentlyWatching: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }],
  faves: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;