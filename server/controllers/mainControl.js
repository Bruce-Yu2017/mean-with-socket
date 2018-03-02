var mongoose = require('mongoose');
var path = require("path");
var express = require('express');
var router = express.Router();
var Chat = mongoose.model("Chat");



module.exports = {
  getallchat: function(req, res) {
    console.log("get chat by room");
    Chat.find({room: req.params.room}, function(err, chats) {
      if(err) {
        console.log("err from find all chat: ", err);
      }
      else {
        res.json(chats);        
      }
    })
  },

  getonechat: function(req, res) {
    Chat.findById(req.params.id, function(err, post) {
      if(err) {
        console.log("err from find one chat: ", err);
      }
      else {
        res.json(post);        
      }
    })
  },

  create_chat: function(req, res) {
    Chat.create(req.body, function(err, post) {
      if (err) {
        console.log("err from find one chat: ", err);
      }
      else {
        res.json(post);
      }
    })
  }
}