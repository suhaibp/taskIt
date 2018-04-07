var express = require('express');
var router = express.Router();
async = require("async");
const Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var models = require('./../models');
var Projects = models.tbl_project;
var Users = models.tbl_user_profile;
var Login = models.tbl_login;
var Company = models.tbl_company;
var Industries = models.tbl_industry;
var CompanySize = models.tbl_company_size;
var Teams = models.tbl_team;
var TeamAssoc = models.tbl_team_assoc;
var Plan = models.tbl_plan;
var Role = models.tbl_role;
var AccessRights = models.tbl_access_rights;
var AccessRightsAssoc = models.tbl_access_rights_assoc;
var AccessRightsMain = models.tbl_main_access_right;
var WorkingTime = models.tbl_cmp_work_time;
var WorkingTimeAssoc = models.tbl_cmp_work_time_assoc;
var Break = models.tbl_cmp_break;
var BreakAssoc = models.tbl_cmp_break_assoc;
var Holiday = models.tbl_public_holiday;
var TimeExtentionNotification = models.tbl_time_extension_req_notification;
var NewTaskNotification = models.tbl_new_task_req_notification;
var NewTaskreq = models.tbl_new_task_request;
var TimeExtentionReq = models.tbl_time_extension_request;
var ProjectMemeberAssoc = models.tbl_project_member_assoc;
var Modules = models.tbl_project_modules;
var Tasks = models.tbl_project_tasks;
var ProjectTeam = models.tbl_project_team;
var ProjectTeamAssoc = models.tbl_team_assoc;
var ProjectMemberAssoc = models.tbl_project_member_assoc;

const Op = Sequelize.Op;
const bcrypt = require("bcryptjs");

var Role = models.tbl_role;
var User_profile = models.tbl_user_profile;

var Login_attempt = models.tbl_login_attempt;

//--------Yasir Poongadan ------
var Projects = models.tbl_project;
var Emp_leave = models.tbl_emp_leave;
var Public_holiday = models.tbl_public_holiday;
var cmp_work_time_assocs = models.tbl_cmp_work_time_assoc;
var cmp_work_times = models.tbl_cmp_work_time;
var cmp_off_day_assoc = models.tbl_cmp_off_day_assoc;
var cmp_break = models.tbl_cmp_break;
var cmp_break_assoc = models.tbl_cmp_break_assoc;
//--------Yasir Poongadan ------
var Projects_member_assoc = models.tbl_project_member_assoc;

//------------------------------
var ip = require("ip");
'use strict';

const emailTemplate = require('../template/verification_email');

    

    // ---------------------------------Start-------------------------------------------
    // Function      : Company verification
    // Params        : verification id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 

Projects.belongsTo(Company, { foreignKey: 'cmp_id' }); // Adds fk_company to User
// Company.belongsTo(Login, {foreignKey: 'login_id'}); // Adds fk_company to User
// Company.belongsTo(Plan, {foreignKey: 'plan_id'}); // Adds fk_company to User
// Company.belongsTo(CompanySize, {foreignKey: 'cmp_size_id'}); // Adds fk_company to User
// Company.belongsTo(Industries, {foreignKey: 'industry_id'}); // Adds fk_company to User

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




    //  ---------------------------------Start-------------------------------------------
  // Function      : getMembers
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth

  router.get('/getUserProjects', function (req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var user_id = 74;
    Users.findAll({
      include:[{
        model:ProjectMemeberAssoc,
        where:{
          user_profile_id : user_id
        },
        include: [{
          model:Projects,
          where : {
            cmp_id: cmp_id
          }
        }]
      }],
     
    }).then( resProjects => {
      res.json(resProjects);
    }).catch(err =>{
      res.json({
        status: 0,
        message: "Error occured! Try again!"
      })
    })
    // }
  })
  //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
  // Function      : getMembers
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth

  router.get('/getUserProjectsDetails/:id', function (req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var user_id = 74;
    Projects.findAll({
      where:{
        id : req.params.id,
        cmp_id : cmp_id
      },
   
      include:[{
        model: ProjectMemeberAssoc,
        include: [{
          model: Users
        },{
          model: ProjectTeam
        }]
      },{
        model: Modules,
        
        include: [{
          model:Tasks,
          
        }]
      }],
     
    }).then( resProjects => {
      if(resProjects.length<=0){
        res.json({
          status: 0,
          message: "Project not found!"
        })
      }else{
        res.json(resProjects);
      }
    }).catch(err =>{
      res.json({
        status: 0,
        message: "Error occured! Try again!"
      })
    })
    // }
  })
  //  ---------------------------------End-------------------------------------------

   // ---------------------------------Start-------------------------------------------
    // Function      : Get company details by id
    // Params        : id
    // Returns       : company details
    // Author        : Jooshifa
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Jooshifa
    // Desc          : 

    router.get('/getCompanyDetails/:id', function (req, res) {
      Login.findOne({
          include: [{
              model: Company, where: { id: req.params.id }
          }]
      }).then(data => {
          console.log(data.is_profile_completed);
          res.json(data);
      });
  });

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
    // Function      : Get logged user details
    // Params        : 
    // Returns       : get details of logged in entity
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 

    router.get('/getLoggedinCompany', (req, res, next) => {
      if (req.headers && req.headers.authorization) {
          var authorization = req.headers.authorization.substring(4),
              decoded;

          decoded = jwt.verify(authorization, Config.secret);
          res.json(decoded);
      } else {
          res.json('');
      }
  });

  // ----------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
  // Function      : getMembers
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth

  router.post('/getUserProjectsOnStatus', function (req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var user_id = 74;
    var status = req.body.status
    Users.findAll({
      include:[{
        model:ProjectMemeberAssoc,
        where:{
          user_profile_id : user_id
        },
        include: [{
          model:Projects,
          where : {
            cmp_id: cmp_id,
            status: status
          }
        }]
      }],
     
    }).then( resProjects => {
      if(resProjects.length<=0){
        res.json({
          status: 0,
          message: "Project not found!"
        })
      }else{
        res.json(resProjects);
      }
    }).catch(err =>{
      res.json({
        status: 0,
        message: "Error occured! Try again!"
      })
    })
    // }
  })
  //  ---------------------------------End-------------------------------------------
  

    //  ---------------------------------Start-------------------------------------------
  // Function      : getMembers
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth

  router.post('/getSelectedProjects', function (req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var user_id = 74;
    var proId = req.body.id
    Users.findAll({
      include:[{
        model:ProjectMemeberAssoc,
        where:{
          user_profile_id : user_id
        },
        include: [{
          model:Projects,
          where : {
            cmp_id: cmp_id,
            id : proId
          }
        }]
      }],
     
    }).then( resProjects => {
      if(resProjects.length<=0){
        res.json({
          status: 0,
          message: "Project not found!"
        })
      }else{
        res.json(resProjects);
      }
    }).catch(err =>{
      res.json({
        status: 0,
        message: "Error occured! Try again!"
      })
    })
    // }
  })
  //  ---------------------------------End-------------------------------------------
  
      //  ---------------------------------Start-------------------------------------------
  // Function      : getMembers
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth

  router.post('/getNotifications', function (req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var user_id = 74;
    var role = req.body.id
    Users.findAll({
      include:[{
        model:ProjectMemeberAssoc,
        where:{
          user_profile_id : user_id
        },
        include: [{
          model:Projects,
          where : {
            cmp_id: cmp_id,
            id : proId
          }
        }]
      }],
     
    }).then( resProjects => {
      if(resProjects.length<=0){
        res.json({
          status: 0,
          message: "Project not found!"
        })
      }else{
        res.json(resProjects);
      }
    }).catch(err =>{
      res.json({
        status: 0,
        message: "Error occured! Try again!"
      })
    })
    // }
  })
  //  ---------------------------------End-------------------------------------------
  
  module.exports = router;
  return router;
}
module.exports = returnRouter;

