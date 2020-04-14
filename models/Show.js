const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
  vtype: String,
  img: String,
  title: String,
  synopsis: String,
});

const Show = mongoose.model('Show', ShowSchema);

module.exports = Show;