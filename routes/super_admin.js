var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var login = require('../models/tbl_login');

// const student = models.student.build({
//   name: "Asif",
//   rollnumber: 123
// })

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var returnRouter = function (io) {
router.get('/create', function(req, res) {
  console.log('xyz');
    // sequelize.query("SELECT * FROM tbl_login ORDER BY id ASC").then(myTableRows => {
    //   console.log(myTableRows.Result)
    // })

    sequelize.query('SELECT * FROM tbl_login').spread(
          function (settingName1, settingName2) {
            console.log(settingName1)
            res.json(settingName1);
      }).error(err =>{
        res.send(err);
      });

    // student.save().then(function(newStudent){
    //   console.log(newStudent);
    // })
  });

  router.get('/:user_id/destroy', function(req, res) {
      console.log('y')
    models.Student.destroy({
      where: {
        id: req.params.user_id
      }
    }).then(function() {
      res.json({success: "success"});
    });
  });

  module.exports = router;
  return router;
  }
  module.exports = returnRouter;