var mainroutes = require('../controllers/mainControl.js');
var path = require('path');


module.exports = function(app){
  /* GET ALL CHATS */
  app.get("/chat/:room", function (req, res) {
    mainroutes.getallchat(req, res);
  })
  
  /* GET SINGLE CHAT BY ID */
  app.get("/:id", function (req, res) {
    mainroutes.getonechat(req, res);
  })

  /* SAVE CHAT */
  app.post("/chat", function (req, res) {
    mainroutes.create_chat(req, res);
  })


}