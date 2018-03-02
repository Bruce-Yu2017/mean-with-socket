var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});
var Chat = mongoose.model("Chat", ChatSchema);
