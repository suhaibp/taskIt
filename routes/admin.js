var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var Plans = models.tbl_plan;

var returnRouter = function (io) {

  // ---------------------------------Start-------------------------------------------
  // Function      : Admin Login
  // Params        : admin, contains username and password
  // Returns       : Token, admin id and role
  // Author        : Rinsha
  // Date            : 01-03-2018
  // Last Modified   : 01-03-2018, Rinsha
  // Desc          : Admin login
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
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get all plans 
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 05-03-2018
  // Last Modified : 05-03-2018, Rinsha
  // Desc          : getAllplans 
  router.get('/allplans', function (req, res) {
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    // sequelize.query("select * from tbl_plans").spread(
    //   function (result, settingName2) {
    //     // console.log(result);
    //     res.json(result);
    //   });
    Plans.findAll({ order: [['id', 'DESC']] }).then(plans => {
      // console.log(plans);
      res.json(plans);
    });
  });
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get all plans without default
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : getAllplans without default
  router.get('/allPlansWithoutDefault', function (req, res) {
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Plans.findAll({
      where: {
        is_defualt: {
          [Op.ne]: true
        }
      }
    }).then(plans => {
      res.json(plans);

    });
  });
  // -----------------------------------End-----------------------------------------------


  module.exports = router;
  return router;
}
module.exports = returnRouter;