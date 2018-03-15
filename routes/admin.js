var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var Models = require('./../models');
var Projects = Models.tbl_project;
var Users = Models.tbl_user_profile;
var Login = Models.tbl_login;
const Op = Sequelize.Op
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
// Function      : get_counts_for_dashboard
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 02-03-2018
// Last Modified : 02-03-2018, Jooshifa 
// Desc          : for getting count of companies,projects,users

router.post('/get_counts_for_dashboard', function(req, res) {
    var userCount;
    var cmpCount;
    var projectCount;
    sequelize.query("select count(*) from tbl_logins where block_status != :status and delete_status != :status",{replacements:{status: true}}).spread((myTableRows1) => {
      // res.json(myTableRows)
      userCount = myTableRows1[0].count;
      sequelize.query("select count(*) from tbl_companies").spread(myTableRows2 => {
        // res.json(myTableRows)
        cmpCount = myTableRows2[0].count;
        sequelize.query("select count(*) from tbl_projects").spread(myTableRows3 => {
          // res.json(myTableRows)
          projectCount = myTableRows3[0].count;
          res.json({
            users:userCount,
            companies:cmpCount,
            projects:projectCount
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

    /*___________________COUNT IN MODEL EXAMPLE______________________*/

    // student.save().then(function(newStudent){
    //   console.log(newStudent);
    // })
   
  });
//  ---------------------------------End-------------------------------------------




 //  ---------------------------------Start-------------------------------------------
  // Function      : super_admin_pie_graph
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 06-03-2018
  // Last Modified : 06-03-2018, 
  // Desc          : get piegraph data


  router.get('/super_admin_pie_graph', function(req, res) {
      console.log('y')
      count = [];
    Login.findAndCountAll({
        where: {
          is_verified: {
            [Op.ne]:false
          }
        }
      }).then(dbres => {
        count.push({"Not verified":dbres.count}) ;
        Login.findAndCountAll({
          where: {
            is_verified: {
              [Op.ne]:true
            },
            cmp_status:'Trial'
          }
        }).then(dbres2 => {
          count.push({"Trial":dbres2.count}) ;
          
          Login.findAndCountAll({
            where: {
              
              cmp_status:'Subscribed'
            }
          }).then(dbres3 => {
            count.push({"Subscribed":dbres3.count}) ;
            
            Login.findAndCountAll({
              where: {
                cmp_status:'Expired'
              }
            }).then(dbres4 => {
              count.push({"Expired":dbres4.count}) ;
              
            res.json(count);
              
            })
            
          })
          
        })
      
        
      })
  });
//  ---------------------------------End-------------------------------------------

  module.exports = router;
  return router;
  }
  module.exports = returnRouter;