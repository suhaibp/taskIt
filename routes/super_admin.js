var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
// var login = require('../models/login');

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
router.post('/create', function(req, res) {
    var userCount;
    var cmpCount;
    var projectCount;
    sequelize.query("select count(*) from tbl_role").spread(myTableRows => {
      // res.json(myTableRows)
      userCount = myTableRows[0].count;
    })
    sequelize.query("select count(*) from tbl_team").spread(myTableRows => {
      // res.json(myTableRows)
      cmpCount = myTableRows[0].count;
    })
    sequelize.query("select count(*) from tbl_public_holiday").spread(myTableRows => {
      // res.json(myTableRows)
      projectCount = myTableRows[0].count;
    })
    // student.save().then(function(newStudent){
    //   console.log(newStudent);
    // })
    res.json({
      users:userCount,
      companies:cmpCount,
      projects:projectCount
    })
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