var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];


var returnRouter = function (io) {


  router.post('/login', function (req, res) {
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    const email = req.body.email;
    const password = req.body.password;
    if (email == '' || password == '') {
      res.json({ success: false, msg: "All fields are required" });
    }
    else {
      sequelize.query("select * from tbl_logins where role_id=3 and  email= :email;", { replacements: { email: email } }).spread(
        function (res1, settingName2) {
          // console.log(res1);
          if (res1 == '') {
            res.json({ success: false, msg: "Incorrect Username or Password" });
          }
          else if (res1[0].password != password) {
            res.json({ success: false, msg: "Incorrect Username or Password" });
          }
          else if (res1[0].password == password) {
            res.json({ success: true, msg: "Success" });
          }
        });
    }
  });


  module.exports = router;
  return router;
}
module.exports = returnRouter;