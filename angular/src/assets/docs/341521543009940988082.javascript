var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
const { Pool, Client } = require('pg')



var returnRouter = function (io) {
router.post('/create', function(req, res) {
    
    // models.student.findAll().then(function(student){
    //   res.json(student);
    // })
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    
  //   sequelize.query("select * from GetAllSt();").spread(
  //     function (actualres, settingName2) {
  //       console.log(settingName1);
  //       console.log(settingName2);
  //       console.log(settingName3);
  //       res.json(settingName1);
  // });

  /*___________________________SAVE DATA_________________________*/
  const student = models.student.build({
    name: "Asif",
    rollnumber: 123
  })
    student.save().then(function(newStudent){
      console.log(newStudent);
      res.json(newStudent);
    })
  /*___________________________SAVE DATA_________________________*/
    
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