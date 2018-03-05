var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var login = require('../models/login');

const student = models.student.build({
  name: "Asif",
  rollnumber: 123
})


var returnRouter = function (io) {
router.post('/create', function(req, res) {
    sequelize.query("CALL getallstudent();").then(myTableRows => {
      console.log(myTableRows.Result)
    })

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