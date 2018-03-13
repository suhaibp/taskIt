
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var Models = require('./../models');
var Projects = Models.tbl_project;
var Users = Models.tbl_user_profile;
var Login = Models.tbl_login;
var Company = Models.tbl_company;
var Industries = Models.tbl_industry;
var CompanySize = Models.tbl_company_size;
var Plan = Models.tbl_plan;
const Op = Sequelize.Op
const bcrypt = require("bcryptjs");
const emailTemplate = require('../template/verification_email');

Projects.belongsTo(Company, {foreignKey: 'cmp_id'}); // Adds fk_company to User
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
  // Function      : get_industries
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, 
  // Desc          : get industry list


  router.get('/get_industries', function(req, res) {
 
  
    Industries.findAll().then(industries => {
      //console.log(projects);
      res.json(industries);
    });
      
  });
  //  ---------------------------------End-------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : get_industries
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, 
  // Desc          : get industry list


  router.get('/get_cmp_size', function(req, res) {
 
  
    CompanySize.findAll().then(companieSize => {
      //console.log(projects);
      res.json(companieSize);
    });
      
  });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

  
//  ---------------------------------Start-------------------------------------------
  // Function      : register_company
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 09-03-2018
  // Last Modified : 09-03-2018, 
  // Desc          : company registration


  router.post('/register_company', function(req, res) {
    try{
     
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      req.body.forEach(element => {
        if(element.ans == ''){
          res.json({status:0,message:"Please try again!"});
          res.end();
        }
      });
      // console.log(validateEmail(req.body[0].ans));
      if (!reg.test(req.body[0].ans.toLowerCase()) || !(/^\d+$/.test(req.body[4].ans))) 
        {
          res.send({status: 0, message:"Check email and phone number!"});
          res.end();
          
        }
      else{
        if(typeof req.body.id == 'undefined'){
          Login.findAll(
            {where: {email: req.body[0].ans}}
                
              ).then(login => {
                //console.log(projects);
                if(login.length == 0){
                  var newPassword;
                  
                  
  
                  bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body[7].ans, salt, (err, hash) => {
                      // console.log(hash);
                        if (err) throw err;
                        newPassword = hash;
                        let newLogin = Login.build({
                          email:req.body[0].ans,
                          fb_id:null,
                          fb_token:null,
                          is_verified: false,
                          block_status: false,
                          delete_status: false,
                          profile_image: null,
                          cmp_status: 'Not Verified',
                          role_id:1,
                          is_profile_completed: false,
                          cmp_id: null,
                          google_id:null,
                          google_token:null,
                          password:hash
                        })
                        console.log(newLogin);
                        newLogin.save().then(resLogin =>{
                          // res.json(resLogin.length)                          
                          
                          // if(resLogin.length>0){
                            // res.json(resLogin)                          
                            console.log("hh")
                            Plan.find({
                              where: {is_defualt: true}
                            }).then(resPlan =>{
                              // res.json(req.body);
                              let newCompany = Company.build({
                                cmp_name:req.body[1].ans,
                                cmp_code:req.body[2].ans,
                                contact_no:req.body[4].ans,
                                why_choosen: req.body[7].ans,
                                login_id: resLogin.id,
                                cmp_size_id: req.body[5].ans,
                                industry_id: req.body[3].ans,
                                plan_id: resPlan.id,
                                no_months:1,
                                is_admin_viewed: false,
                                verification_code: req.body[9].ans
                              })
                              
                              console.log(newCompany);
                              newCompany.save().then(() => {
                                emailTemplate.sendVerificationMail(req.body[0].ans, req.body[1].ans,  req.body[9].ans);
  
                                res.json({status:1,message:"Registered! Check your Email!"})
                              })
                            }).catch(errorx =>{
                              // res.json({status: 0, message:"Failed!"});
                                res.json(errorx);
                              
                              
                            })
                           
                            
                          // }
                        }).catch(error => {
                          // Ooops, do some error-handling
                          res.json({status:0, message:"Some error occured!"})
                        })
                    })
                  })
                  
                }else{
                  //email exist
                  res.json({status: 0, message:"Already Registered!"});
                }
                
              });
        }else{
          //update for jooshifa
          let newCompany = Company.build({
            cmp_name:req.body[1].ans,
            cmp_code:req.body[2].ans,
            contact_no:req.body[4].ans,
            why_choosen: req.body[7].ans,
            login_id: resLogin.id,
            cmp_size_id: req.body[5].ans,
            industry_id: req.body[3].ans,
            plan_id: resPlan.id,
            no_months:1,
            is_admin_viewed: false,
            verification_code: req.body[9].ans
          })

          Company.update({
            cmp_name: req.body[1].ans,
            cmp_code:req.body[2].ans,
            contact_no:req.body[4].ans,
            why_choosen: req.body[7].ans,
            login_id: resLogin.id,
            cmp_size_id: req.body[5].ans,
            industry_id: req.body[3].ans,
            plan_id: resPlan.id,
            no_months:1,
            is_admin_viewed: false
          }, {
              where: {
                id: req.body[10].ans
              }
            }).then(data1 => {
            })  
          
        }
        
      }
      
      
    }catch (err){
      res.json({status: 0, message:"Already Registered!"});      
    }
  

    //   if (config.use_env_variable) {
    //     var sequelize = new Sequelize(process.env[config.use_env_variable]);
    //   } else {
    //     var sequelize = new Sequelize(config.database, config.username, config.password, config);
    //   }
      
    //   sequelize.query("select * from GetAllSt();").spread(
    //     function (actualres, settingName2) {
    //       console.log(actualres);
    //       console.log(settingName2);
    //       res.json(actualres);
    // });
    
});
//  ---------------------------------End-------------------------------------------


router.post('/register_company2', function(req, res) {
 
    // res.json(req.body);
    let newCompany = Company.build({
      cmp_name:"req.body[1].ans",
      cmp_code:"req.body[2].ans",
      contact_no:"req.body[4].ans",
      why_choosen: "req.body[7].ans"
    })
    
    // res.json(newCompany);
    newCompany.save().then(() => {
      res.json({stat:1})
    }).catch(err =>{
      res.json({stat:2})
    })
  
    // const plan = Plans.build({
    //   plan_name: req.body.plan_name,
    //   plan_price: req.body.plan_price,
    //   no_projects: no_projects,
    //   no_members: no_members,
    //   no_modules: no_modules,
    //   no_tasks: no_tasks
    // })
    // plan.save().then(function (newPlan) {
    //   // console.log(newPlan);
    //   res.json({ success: true, msg: "Plan Created Successfully" });
    // })
})

  module.exports = router;
  return router;
  }
  module.exports = returnRouter;