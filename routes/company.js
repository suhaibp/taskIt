var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var Plans = models.tbl_plan;
var Company = models.tbl_company;
var Project = models.tbl_project;
var Users = models.tbl_user_profile;
var Category = models.tbl_project_category;
var Login = models.tbl_login

var returnRouter = function (io) {
  // ---------------------------------Start-------------------------------------------
  // Function      : get plan by id
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : getplan
  router.get('/planById/:id', function (req, res) {
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Plans.findById(req.params.id).then(plans => {
      res.json(plans);
    });
  });
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : upgrade
  // Params        : data from form
  // Returns       : message
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : upgrade
  router.post('/upgrade/:id', function (req, res) {
    cmp_id = 1;
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    if (req.body.addr == '' || req.body.cardnum == '' || req.body.cardname == '' || req.body.cvv == '' || req.body.fname == '' || req.body.lname == '' || req.body.no == '' || req.body.no_months == '') {
      res.json({ success: false, msg: "All fields are required" });
    }
    else if (validateNo(req.body.no) == false) {
      res.json({ success: false, msg: "Enter a valid phone number" });
    }
    else {
      Company.update({
        no_months: req.body.no_months,
        plan_id: req.params.id
      }, {
          where: {
            id: cmp_id
          }
        }).then(data => {
          if (data == 1) {
            res.json({ success: true, msg: "Success" });
          }
          else {
            res.json({ success: false, msg: "Failed" });
          }
        });
    }
  });

  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : validateNo
  // Params        : number
  // Returns       : boolean true or false
  // Author        : Rinsha
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, Rinsha
  // Desc          : for validate a number
  function validateNo(no) {
    var re = /^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/;
    return re.test(no);
  }

  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get all projects
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : getAllProjects 
  router.get('/getAllProject', function (req, res) {
    cmp_id = 1;
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Project.findAll({
      where: {
        cmp_id: cmp_id
      }
    }).then(project => {
      res.json(project);
    });
  });
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Get All pm in a company
  // Params        : 
  // Returns       : All pm in a company
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          :   
  router.get('/getAllPm', function (req, res) {
    cmp_id = 1;
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Users.findAll({
      // order: [['id', 'DESC']],
      include: [{
        model: Login,
        where: {role_id: 3,
              cmp_id: cmp_id,
              block_status : false,
              delete_status : false,}
       }]
    }).then(pm => {
      res.json(pm);
      });
  });
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : Get All project category in a company
  // Params        : 
  // Returns       : All project category in a company
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          :   
  router.get('/getAllProjectCategory', function (req, res) {
    cmp_id = 1;
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Category.findAll({
      where: {
        cmp_id: cmp_id,
        delete_status: false
      }
    }).then(category => {
      res.json(category);
    });
  });
  // -----------------------------------End------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : add project
  // Params        : data from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 08-03-2018
  // Last Modified : 08-03-2018, Rinsha
  // Desc          :   
  router.post('/addProject', function (req, res) {
    cmp_id = 1;
// ASSIGNEE ID = LOGIN-ID;
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    if (req.body.project_name == '' || req.body.category_id == '' || req.body.project_type == '' || req.body.priority == '' || req.body.description == '') {
      res.json({ success: false, msg: "All fields are required" });
    }
    else {
      if (req.body.pm_id == 0) {
        is_pm_viewed = true;
      }
      else {
        is_pm_viewed = false;
      }
      const project = Project.build({
        project_name: req.body.project_name,
        category_id: req.body.category_id,
        project_code : 123,
        status: 'Drafted',
        project_type: req.body.project_type,
        priority: req.body.priority,
        description: req.body.description,
        pm_id: req.body.pm_id,
        // assignee_id: assignee_id,
        cmp_id: cmp_id,
        is_pm_viewed: is_pm_viewed
      })
      project.save().then(function (newPlan) {
        // console.log(newPlan);
        if(req.body.pm_id != LOGIN_ID){
        io.sockets.emit("addProject", {
          pm_id: req.body.pm_id
      });
    }
        res.json({ success: true, msg: "Project Created Successfully, Your Project code is " + project.project_code });
      })
    }
  });
  // -----------------------------------End------------------------------------------
  module.exports = router;
  return router;
}
module.exports = returnRouter;