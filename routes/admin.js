var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
const Config = require('../config/database');
const jwt = require("jsonwebtoken");
var Plans = models.tbl_plan;
var Company = models.tbl_company;
var Login = models.tbl_login;

var returnRouter = function (io) {

  //  ---------------------------------Start-------------------------------------------
  // Function      : get_counts_for_dashboard
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 02-03-2018
  // Last Modified : 02-03-2018, Jooshifa 
  // Desc          : for getting count of companies,projects,users

  router.post('/get_counts_for_dashboard', function (req, res) {
    var userCount;
    var cmpCount;
    var projectCount;
    sequelize.query("select count(*) from tbl_logins where block_status != :status and delete_status != :status", { replacements: { status: true } }).spread((myTableRows1) => {
      // res.json(myTableRows)
      userCount = myTableRows1[0].count;
      sequelize.query("select count(*) from tbl_companies").spread(myTableRows2 => {
        // res.json(myTableRows)
        cmpCount = myTableRows2[0].count;
        sequelize.query("select count(*) from tbl_projects").spread(myTableRows3 => {
          // res.json(myTableRows)
          projectCount = myTableRows3[0].count;
          res.json({
            users: userCount,
            companies: cmpCount,
            projects: projectCount
          })
        })
      })
    })
    /*___________________COUNT IN MODEL EXAMPLE______________________*/
    // Login.findAndCountAll({
    //   where: {
    //     block_status: {
    //       [Op.ne]:true
    //     }
    //   }
    // }).then(projects => {
    //   res.json(projects);
    // })
  });
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
      // sequelize.query("select * from tbl_logins where role_id=2 and  email= :email;", { replacements: { email: email } }).spread(
      //   function (res1, settingName2) {
      //     // console.log(res1);
      //     if (res1 == '') {
      //       res.json({ success: false, msg: "Incorrect Username or Password" });
      //     }
      //     else if (res1[0].password != password) {
      //       res.json({ success: false, msg: "Incorrect Username or Password" });
      //     }
      //     else if (res1[0].password == password) {
      //       res.json({
      //         success: true,
      //         msg: 'login succesfully',
      //       });
      //     }
      //   });
      Login.findOne({
        where: {
          email: req.body.email,
          role_id: 2,
          password: req.body.password
        }
      }).then(login => {
        if (login === null) {
          res.json({ success: false, msg: "Incorrect Username or Password" });
        }
        else {
          const token = jwt.sign(login.toJSON(), Config.secret, {
            expiresIn: 60400 // sec 1 week
          });
          res.json({
            success: true,
            msg: 'login succesfully',
            token: 'JWT ' + token,
            admin: {
              role_id: login.role_id
            }
          });
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

  // ---------------------------------Start-------------------------------------------
  // Function      : add plan
  // Params        : data from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : add plan 
  router.post('/addPlan', function (req, res) {
    // console.log(req.body);
    planName = myTrim(req.body.plan_name);
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Plans.findAll().then(plans => {
      if (plans.length >= 4) {
        res.json({ success: false, msg: "Cant Add, Maximum number of plan reached" });
      }
      else {
        Plans.findAll({
          where: {
            plan_name: req.body.plan_name
          }
        }).then(plans => {
          if (plans.length != 0) {
            res.json({ success: false, msg: "Plan Name Already Exists" });
          }
          else if (req.body.plan_name == '' || req.body.plan_price == '' || req.body.plan_price == null || req.body.no_projects == '' || req.body.no_members == '' || req.body.no_modules == '' || req.body.no_tasks == '') {
            res.json({ success: false, msg: "All fields are required" });
          }
          else if (planName.length > 10 || planName.length < 3) {
            res.json({ success: false, msg: "Plan Name between 3-10 characters" });
          }
          else {
            if (req.body.no_projects == 'Unlimited') {
              no_projects = req.body.no_projects;
            } else {
              no_projects = req.body.value1;
            }
            if (req.body.no_members == 'Unlimited') {
              no_members = req.body.no_members;
            } else {
              no_members = req.body.value2;
            }
            if (req.body.no_modules == 'Unlimited') {
              no_modules = req.body.no_modules;
            } else {
              no_modules = req.body.value3;
            }
            if (req.body.no_tasks == 'Unlimited') {
              no_tasks = req.body.no_tasks;
            } else {
              no_tasks = req.body.value4;
            }
            const plan = Plans.build({
              plan_name: req.body.plan_name,
              plan_price: req.body.plan_price,
              no_projects: no_projects,
              no_members: no_members,
              no_modules: no_modules,
              no_tasks: no_tasks
            })
            plan.save().then(function (newPlan) {
              // console.log(newPlan);
              io.sockets.emit("addPlan", {
              });
              res.json({ success: true, msg: "Plan Created Successfully" });
            })
          }
        });
      }
    });
  });
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : myTrim
  // Params        : string
  // Returns       : string
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : For removing unwanted space from left and right

  function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
  }

  // ----------------------------------End-------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : best plan
  // Params        : id and value
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : to change a plan to best
  router.post('/bestPlan/:id', function (req, res) {
    // console.log(req.params.id + ":id," + req.body.status +":status")
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Plans.update({
      is_best_value: false
    }, {
        where: {
          id: {
            [Op.ne]: req.params.id
          }
        }
      }).then(data => {
        Plans.update({
          is_best_value: req.body.status
        }, {
            where: {
              id: req.params.id
            }
          }).then(data1 => {
            if (data1 == 1) {
              io.sockets.emit("bestPlan", {
              });
              res.json({ success: true, msg: "Success" });
            }
            else {
              res.json({ success: false, msg: "Failed" });
            }
          });
      });
  });
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : delete plan
  // Params        : id 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : to delete a plan which is'nt used by any company
  router.get('/deletePlan/:id', function (req, res) {
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    Company.findAll({
      where: {
        plan_id: req.params.id
      }
    }).then(company => {
      if (company.length != 0) {
        res.json({ success: false, msg: "Cant delete plan" });
      }
      else {
        Plans.findById(req.params.id).then(plans => {
          if (plans.is_defualt == true) {
            res.json({ success: false, msg: "Default plan can't delete" });
          }
          else {
            Plans.destroy({
              where: {
                id: req.params.id
              }
            }).then(plan => {
              io.sockets.emit("deletePlan", {
              });
              res.json({ success: true, msg: "Success" });
            });
          }
        });
      }
    });
  });
  // -----------------------------------End-----------------------------------------------

  // ---------------------------------Start-------------------------------------------
  // Function      : get plan by id
  // Params        : 
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
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
  // Function      : update plan
  // Params        : value from form
  // Returns       : 
  // Author        : Rinsha
  // Date          : 07-03-2018
  // Last Modified : 07-03-2018, Rinsha
  // Desc          : update a plan
  router.post('/updatePlan', function (req, res) {
    // console.log(req.body);
    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable]);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
    planName = myTrim(req.body.plan_name);
    Plans.findAll({
      where: {
        plan_name: req.body.plan_name,
        id: {
          [Op.ne]: req.body.id
        }
      }
    }).then(plans => {
      if (plans.length != 0) {
        res.json({ success: false, msg: "Plan Name Already Exists" });
      }
      else if (req.body.plan_name == '') {
        res.json({ success: false, msg: "All fields are required" });
      }
      else if (req.body.is_defualt == true) {
        if (req.body.plan_price == '' || req.body.plan_price == null) {
          res.json({ success: false, msg: "All fields are required" });
        }
      }
      else if (planName.length > 10 || planName.length < 3) {
        res.json({ success: false, msg: "Plan Name between 3-10 characters" });
      }
      else {
        if (req.body.noprojects == 'Unlimited') {
          no_projects = req.body.noprojects;
        } else {
          no_projects = req.body.no_projects;
        }
        if (req.body.nomembers == 'Unlimited') {
          no_members = req.body.nomembers;
        } else {
          no_members = req.body.no_members;
        }
        if (req.body.notasks == 'Unlimited') {
          no_tasks = req.body.notasks;
        } else {
          no_tasks = req.body.no_tasks;
        }
        if (req.body.nomodules == 'Unlimited') {
          no_modules = req.body.nomodules;
        } else {
          no_modules = req.body.no_modules;
        }
        Plans.update({
          plan_name: req.body.plan_name,
          plan_price: req.body.plan_price,
          no_projects: no_projects,
          no_members: no_members,
          no_tasks: req.no_tasks,
          no_modules: no_modules,
        }, {
            where: {
              id: req.body.id
            }
          }).then(data1 => {
            if (data1 == 1) {
              io.sockets.emit("updatePlan", {
              });
              res.json({ success: true, msg: "Success" });
            }
            else {
              res.json({ success: false, msg: "Failed" });
            }
          });
      }
    });
  });
  // -----------------------------------End------------------------------------------

  module.exports = router;
  return router;
}
module.exports = returnRouter;
