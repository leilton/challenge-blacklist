module.exports = app => {
  const clients = require("../controllers/client.controller.js");
  
  var router = require("express").Router();

  router.get("/blacklist", clients.blacklist);

  app.use('/api/clients', router);
};