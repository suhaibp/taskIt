
var express = require('express');
var router = express.Router();
async = require("async");
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
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
const Op = Sequelize.Op;
const bcrypt = require("bcryptjs");

var Role = models.tbl_role;
var User_profile = models.tbl_user_profile;

var Login_attempt = models.tbl_login_attempt;


//--------Yasir Poongadan ------

var Projects = models.tbl_project;
var Projects_member_assoc = models.tbl_project_member_assoc;

//------------------------------

var ip = require("ip");
'use strict';

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
    // ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Company verification
    // Params        : verification id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 


    router.get('/companyVerification/:id', function (req, res) {
        Company.findOne({
            where: {
                verification_code: req.params.id
            }
        }).then(Company => {

            Login.findOne({
                where: {
                    id: Company.login_id,
                }
            }).then(login2 => {
                Login.update({
                    is_verified: true,
                    cmp_status: "Trail"

                }, {
                        where: {
                            id: Company.login_id,
                            cmp_status: "Not Verified"
                        }
                    }).then(data1 => {

                        Login.findOne({
                            where: {
                                id: Company.login_id,
                            }
                        }).then(login1 => {
                            // console.log(login2.is_verified);
                            if (login2.is_verified == true) {
                                return res.json({ success: false, msg: 'Already verified' });
                            }
                            else {
                                const token = jwt.sign(login1.toJSON(), Config.secret, {
                                    expiresIn: 60400 // sec 1 week
                                });

                                return res.json({
                                    success: true,
                                    msg: "Successfully verified",
                                    token: 'JWT ' + token,
                                    login: {
                                        id: login1.id,
                                        role: login1.role_id,
                                    }

                                });
                            }


                        });

                    });
            });
        });
    });

    // ----------------------------------End-------------------------------------------




    // ---------------------------------Start-------------------------------------------
    // Function      : Get All Projects
    // Params        : 
    // Returns       : All Projects
    // Author        : Yasir Poongadan          
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Yasir Poongadan
    // Desc          : 
    router.get('/getAllProjects', function (req, res) {
        Projects.findAll({
            where: {
                status: {
                    [Op.ne]: 'Cancelled'
                }
            },
            raw:true
        }).then(data => {
           console.log(data);
            return res.json(data);
        });
    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : get All Users by project id
    // Params        : project id , '' for all users
    // Returns       : All Users
    // Author        : Yasir Poongadan  
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Yasir Poongadan
    // Desc          : 
    router.get('/getUsersByProject/:id', function (req, res) {
        User_profile.findAll({
            // where: {
            //     status: {
            //         [Op.ne]: 'false'
            //     }
            // },
            include: [
                 {model: Projects_member_assoc, required: true},
                 {model: Login,  where: {[Op.and]:[{block_status: false,delete_status: false}]}, required: true}
                
            ],
            raw:true
        }).then(data => {
            console.log(data);
            return res.json(data);
        });
    });

    // ----------------------------------End-------------------------------------------

    

//  ---------------------------------Start-------------------------------------------
  // Function      : getTeams
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 13-03-2018
  // Last Modified : 13-03-2018, 
  // Desc          : get list of teams and stregth


router.get('/getTeams', function(req, res) {
  // if (req.headers && req.headers.authorization) {
  //   var authorization = req.headers.authorization.substring(4), decoded;
  //   //     try {
  //   decoded = jwt.verify(authorization, config.secret);
  //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var teamName;
    var team=[];
    Teams.findAll().then(teams => {
      // console.log(projects);
      teamName = teams.team_name;
      // teams.forEach(element => {
        async.eachOfSeries(teams, function (element, key, callback) {
          TeamAssoc.findAndCountAll({
            where:{team_id:element.id}
          }).then(resTeam=>{
          team.push({team_name:element.team_name, count:resTeam.count, team_id: element.id})
            callback();
          })
        }, ()=>{
          res.json(team);

        })
       
    // });
    });
    
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


  router.get('/getMembers/:id', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // res.json(req.body);
      var teamName;
      var members=[];
      Users.findAll({
        where:{
           cmp_id:cmp_id,
           role_id:4          
          },  
          raw: true,      
      }).then(users => {
        //  console.log(users);
         //res.json(users);
        // teamName = teams.team_name;
        // users.forEach(element => {
          var tmp = {};
          var tmp3 = [];
          var tmp5 = [];
          async.eachOfSeries(users, function (element, key, callback) {
            users[key].onTeam = false ;
            // console.log(element)
            TeamAssoc.findAll({
              raw: true,      
              where:{user_profile_id:element.id,cmp_id:cmp_id,team_id:req.params.id}
            }).then(resUser=>{
        // res.json(resUser);
            // console.log(resUser)
        
          if(resUser.length>0){
                users[key].onTeam = true ;
                tmp3.push(element.id);
                tmp5.push(element);
          }
            // console.log(element.id)
            tmp[element.id] =users[key];
              // members.push({f_name:resUser.f_name, l_name:resUser.l_name, id:resUser.id})
              callback();
            })
          }, ()=>{
            TeamAssoc.find({
              raw: true,      
              where:{cmp_id:cmp_id,team_id:req.params.id, is_head:true}
            }).then(resHead =>{
            // res.json(resHead);
            tmp4 =resHead
            tmp2=[];
            tmp2.push(users);
            tmp2.push(tmp);
            tmp2.push(tmp3);
            tmp2.push(tmp4);
            tmp2.push(tmp5);
            res.json(tmp2);
            })
            //
  
          })
         
      // });
      });
      
    // }
  })
  //  ---------------------------------End-------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : assignMemeber5
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : assign team members and head to a team


router.post('/assignMemebers', function(req, res) {
  // if (req.headers && req.headers.authorization) {
  //   var authorization = req.headers.authorization.substring(4), decoded;
  //   //     try {
  //   decoded = jwt.verify(authorization, config.secret);
  //   var cmp_id = decoded._id;
    var cmp_id = 1;
    // res.json(req.body);
    var teamName;
    var team=[];
    // console.log(req.body)
    TeamAssoc.destroy({
      where:{
        user_profile_id:{[Op.in]:req.body[0]},
        team_id:req.body[2],
        cmp_id:cmp_id
      }
    }).then(()=>{
      members = req.body[0];
      var teamassoc;
      members.forEach(element => {
        if(element == req.body[1]){
          teamassoc = TeamAssoc.build({
            is_head : true,
            cmp_id : cmp_id,
            user_profile_id : element,
            team_id : req.body[2]
          })
        }else{
          teamassoc = TeamAssoc.build({
            is_head : false,
            cmp_id : cmp_id,
            user_profile_id : element,
            team_id : req.body[2]
          })
        }
        teamassoc.save().then((resTeamAssoc) =>{
          console.log(resTeamAssoc);
          res.json({
            status:1,
            Message: "Successfully assigned!"
          })
        }).catch( error =>{
          res.json({
            status:0,
            Message: "Some error occured!"
          })
        })
        
      });
    }).catch(err => {
      res.json({
        status:0,
        Message: "Some error occured!"
      })
    })
})
//  ---------------------------------End-------------------------------------------
  

//  ---------------------------------Start-------------------------------------------
  // Function      : getUserGroups
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : get user groups  from db


  router.get('/getUserGroups', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      Role.findAll({
        where:{
          is_visible:true
        }
      }).then(Roles => {
        // console.log(projects);
      res.json(Roles);
     
         
      // });
      });
      
    // }
  })
  //  ---------------------------------End-------------------------------------------

  
//  ---------------------------------Start-------------------------------------------
  // Function      : getAccessRights
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : get Access Rights  from db


  router.get('/getAccessRights/:id', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      var roleId = req.params.id;
      
      console.log(roleId);
      AccessRightsMain.findAll(
        {include: [{
          model: AccessRights,
        //   include: [{
        //     model: AccessRightsAssoc
        //  }]
       }],
       //plain: true,
       //   raw:true
      }).then(mainAccessRights => {

        //var nodedata = node.values;

        // nodedata.sensors = sensors.map(function(sensor){ return sensor.values });
        // or
        mainAccessRights = parseJSON(mainAccessRights);

        console.log(mainAccessRights);
      //  var temp = [];
      //  temp = mainAccessRights;
          // mainAccessRights.forEach((element,indx) => {

          async.eachOfSeries(mainAccessRights, (ele, key, callback)=>{
            console.log(ele);
          //   AccessRightsAssoc.find({
          //     where:{
          //       role_id : roleId,
          //       access_rights_id : ele.id
          //     }
          //   }).then(resRightsAssoc =>{
          //  tmpData.push(mainAccessRights[indx]);
          //  tmpData.push({sdasd:'asdsad'});
          //     if(resRightsAssoc != null){
          //       mainAccessRights[indx].tbl_access_rights[key].manu = true
          //     }else{
          //  console.log(mainAccessRights[indx]);
          // console.log(mainAccessRights);
          //     }
          //     console.log(indx);
          //     console.log(element);
          //     element.tbl_access_rights.access_right = 'xyz';
          //     callback();
          //   })
          mainAccessRights[key].manu = 'true';
          }, ()=>{
            //  res.json( mainAccessRights);
          })



          //var yourval = jQuery.parseJSON(JSON.stringify(data));
         //   console.log(element);
         //   console.log(indx);
        //   async.eachOfSeries(element.tbl_access_rights, (ele, key, callback)=>{
        //     AccessRightsAssoc.find({
        //       where:{
        //         role_id : roleId,
        //         access_rights_id : ele.id
        //       }
        //     }).then(resRightsAssoc =>{
        //    tmpData.push(mainAccessRights[indx]);
        //    tmpData.push({sdasd:'asdsad'});
        //       if(resRightsAssoc != null){
        //         mainAccessRights[indx].tbl_access_rights[key].manu = true
        //       }else{
          //  console.log(mainAccessRights[indx]);
          //console.log(mainAccessRights);
        //       }
            //   console.log(indx);
              // console.log(element);
           //    element.tbl_access_rights.access_right = 'xyz';
        //       callback();
        //     })
        //   }, ()=>{
        //     //  res.json( mainAccessRights);
        //   })
       // temp.push(element);
          // });
        res.json(mainAccessRights);
        
        
      })
     
      
    // }
  })
  //  ---------------------------------End-------------------------------------------


  
  //  ---------------------------------Start-------------------------------------------
  // Function      : assignMemeber5
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : assign team members and head to a team


router.post('/assignRights/:id', function(req, res) {
  // if (req.headers && req.headers.authorization) {
  //   var authorization = req.headers.authorization.substring(4), decoded;
  //   //     try {
  //   decoded = jwt.verify(authorization, config.secret);
  //   var cmp_id = decoded._id;
    var cmp_id = 1;
    role_id = req.params.id;
    req.body.forEach(element => {
      async.eachOfSeries(element.tbl_rights, (ele, key, callback)=>{
        if(ele.checked == true){

        }
      },
      ()=>{
  
      })
    });
    
// }

})
//  ---------------------------------End-------------------------------------------
  
  module.exports = router;
  return router;
  }
  module.exports = returnRouter;
