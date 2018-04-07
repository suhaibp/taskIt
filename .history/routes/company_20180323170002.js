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
var WorkingTime = models.tbl_cmp_work_time;
var WorkingTimeAssoc = models.tbl_cmp_work_time_assoc;
var Break = models.tbl_cmp_break;
var BreakAssoc = models.tbl_cmp_break_assoc;
var Holiday = models.tbl_public_holiday;
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


  // router.get('/getAccessRights/:id', function(req, res) {

  //     var cmp_id = 1;
  //     var roleId = req.params.id;
  //     tmp=[];
  //     var rights;
  //     AccessRightsMain.findAll({}).then(mainAccessRights => {
  //         rights = mainAccessRights
  //         async.eachOfSeries(rights, (element,key,callback)=>{
  //             id = element.id;
  //             name = element.name;
  //             console.log(name);

  //             AccessRights.findAndCountAll({
  //               where:{
  //                 main_access_right_id: element.id
  //               },
  //               include: [{
  //                 model: AccessRightsAssoc,
  //                 required:false,
  //                 where:{
  //                   cmp_id:cmp_id,
  //                   role_id: req.params.id,
  //                 }
  //               }],
  //               raw:true
  //             }).then(resx =>{
  //               console.log(element);
  //               element.jijo = resx;
  //               rights[key] =element;
  //               callback();
                
  //             })
          
  //         },()=>{
  //              res.json(rights);       
  //         })

    
  //     })
  // })
  //  ---------------------------------End-------------------------------------------

  router.get('/getAccessRights/:id', function(req, res) {

      var cmp_id = 1;
      var roleId = req.params.id;
      tmp=[];
      var rights;
      AccessRightsMain.findAll({raw:true}).then(mainAccessRights => {
          tmp = mainAccessRights;
          async.eachOfSeries(mainAccessRights, (element,key,callback)=>{
              trueCount = 0;
              AccessRights.findAndCountAll({
                  where:{
                    main_access_right_id: element.id
                  },
                  raw:true
              }).then((resx) =>{

                tmp[key].sub = resx.rows;

                async.eachOfSeries(resx.rows, (element1,key1,callback1)=>{

                    AccessRightsAssoc.findAndCountAll({
                      where:{
                        cmp_id:cmp_id,
                        role_id: roleId,
                        access_rights_id:element1.id
                      },
                      raw:true
                    }).then((resAssoc) =>{
                          if(resAssoc.count >0){
                            trueCount++;
                            tmp[key].sub[key1].checked = true;
                          }else{
                            tmp[key].sub[key1].checked = false;
                          }
                          callback1();
                    });
    
                },()=>{
                  if((tmp[key].sub.length != 0) && (tmp[key].sub.length == trueCount)){
                    tmp[key].checked = true;
                  }else{
                    tmp[key].checked = false;
                  }
                  callback();
                })
                  
                //callback();
              });

          },()=>{
              res.json(tmp);  
          })
      })
  });
  
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
  // console.log(req.body[1])
    var cmp_id = 1;
    role_id = parseInt(req.params.id) ;
  console.log(role_id);    
    req.body.forEach(element => {
      async.eachOfSeries(element.sub, (ele, key, callback)=>{
        if(ele.checked == true){
          AccessRightsAssoc.findAndCountAll({
            where:{
              cmp_id:cmp_id,
              access_rights_id:ele.id,
              role_id: role_id
            }
          }).then(resAssoc => {
            console.log(resAssoc)
            if(resAssoc.count == 0){
              let assoc = AccessRightsAssoc.build({
                cmp_id:cmp_id,
                access_rights_id:ele.id,
                role_id: role_id
              })
              assoc.save().then( res=>{
                
              })
              console.log(resAssoc.count)
            }
            
          });
        } callback();
      },
      ()=>{
        
      })
    });
    res.json({
      status:1,
      message: "Successfully assigned!"
    })
// }

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


  router.get('/getWorkingTimes', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      WorkingTime.find({
        where:{
          is_default:true,
          cmp_id: cmp_id
        }
      }).then(wrktime => {
        // console.log(projects);
        // if(wrktime){
        //   res.json({status:0,message:"no default time set!"})
        // }else{
        //   res.json(wrktime);
        // }
        WorkingTimeAssoc.findAll({
          include:[{
            model:WorkingTime
          }]
        }).then(resTime =>{

          Break.findAll({
            where:{
              cmp_id:cmp_id
            }
          }).then(resbreak =>{


            timingArray ={};
            timingArray.break = resbreak;
            timingArray.default=wrktime;
            timingArray.others = resTime;
            res.json(timingArray);
          })
          

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


router.post('/saveWorkingTimes', function(req, res) {
  // if (req.headers && req.headers.authorization) {
  //   var authorization = req.headers.authorization.substring(4), decoded;
  //   //     try {
  //   decoded = jwt.verify(authorization, config.secret);
  console.log(req.body)
  //   var cmp_id = decoded._id;
    var cmp_id = 1;
    if(req.body.start.hour == ''||!(/^\d+$/.test(req.body.start.hour)) || req.body.start.minute =='' || !(/^\d+$/.test(req.body.start.minute)) || req.body.end.hour =='' || !(/^\d+$/.test(req.body.end.hour)) || req.body.end.minute == '' || !(/^\d+$/.test(req.body.end.minute))){
      res.json({
        status:0,
        message: "Error time format!"
      })
    }
    else{
      WorkingTime.update(
        {
          title: req.body.start.hour+ ":" + req.body.start.minute + "-" + req.body.end.hour+ ":" +req.body.end.minute,
          start_time: req.body.start.hour+ ":" + req.body.start.minute,
          end_time: req.body.end.hour+ ":" + req.body.end.minute
        },
        {where : {
          id:req.body.id
        }}
    ).then(resWtime =>{
      res.json({
        status: 1,
        message: "Successfully saved!"
      })
    }).catch(err =>{
      res.json({
        status:0,
        message: "Error in updating! Try again!"
      })
    })
    }
   
 
// }

})
//  ---------------------------------End-------------------------------------------


  //  ---------------------------------Start-------------------------------------------
  // Function      : deleteBreak
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : delete break


  router.post('/deleteBreak', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      Break.destroy({
        where:{
          id: req.body.id
        }
      }).then(resBreak=>{
        BreakAssoc.findAll({
          raw:true,
          where: {
            break_id : req.body.id
          }
        }).then(resBreakAssoc =>{
          if(resBreakAssoc.length >0){
            BreakAssoc.destroy({
              where: {
            break_id : req.body.id
                
              }
            }).then( resDel => {
              res.json({
                status:1,
                message: "Delete Successfull!"
              })
            }).catch(err => {
              res.json({
                status:0,
                message: "Error occured!Try again!"
              })
            })
          }
          else{
            res.json({
              status:1,
              message: "Deleted Successfully!"
            })
          }
        }).catch(e =>{
          res.json({
            status:0,
            message: "Error occured!Try again!"
          })
        })
      })
      
  // }
  
  })
  //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
  // Function      : deleteBreak
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : delete break


  router.post('/saveBreak', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      // console.log(req.body)
      if(req.body.title == ''){
        res.json({
          status:0,
          message: "Title empty!"
        })
      }
      else{
        if(req.body.day == null && req.body.week == null){
          Break.build({
            title: req.body.title,
            cmp_id: cmp_id,
            start_time: req.body.start_time.hour+ ":" + req.body.start_time.minute,
            end_time: req.body.end_time.hour+ ":" + req.body.end_time.minute,
            is_default: true
          }).save().then(resSave => {
            res.json({status:1,
              message: "Successfully saved!"
            })
          }).catch(err => {
            res.json({
              status:0,
              message: "An error occured! Try again!"
            })
          })
        }
      }
    
      
  // }
  
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


  router.get('/getWeekHours', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      WorkingTimeAssoc.findAll({
        order:[
          ['day_no', 'ASC']
        ],
          
        include:[
          {
            model:WorkingTime, require:true, where:{
              cmp_id:cmp_id
            }
          }],
          
         
      }).then(wrktime => {
       let tmp ={};
        tmp2={};
        wrktime.forEach((element) => {
          dayno = 0;
          // element.tbl_cmp_work_time.forEach((ele) => {
            if(dayno != element.day_no){
              dayno = element.day_no;
              tmp ={};
            }
          //   if(typeof tmp[ele.day_no] === 'undefined') {
          //     tmp[ele.day_no]= new Array();
          //     if(typeof tmp[ele.day_no][ele.week_no] === 'undefined') {
          //     }
          //     // tmp[ele.day_no][ele.week_no] = new Array();
          // }
          
          tmp[element.week_no] = {id:element.tbl_cmp_work_time.id,title:element.tbl_cmp_work_time.title,start:element.tbl_cmp_work_time.start_time, end:element.tbl_cmp_work_time.end_time};  
          tmp2[element.day_no] = tmp;
        //  });
        });
        console.log(tmp2);
        res.json(tmp2)
     
      });
      
    // }
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


  router.get('/getYears', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
    let data =[];
      var cmp_id = 1;
      d = (new Date()).getFullYear();
        y1 = d-1;
        y2 = d;
        y3 = d+1
        data.push(y1)
        data.push(y2)
        data.push(y3)
        res.json(data)
    // }
  })
  //  ---------------------------------End-------------------------------------------

     //  ---------------------------------Start-------------------------------------------
  // Function      : deleteBreak
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : delete break


  router.post('/getHoliday', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      console.log(req.body)
      if(req.body.year == null){
        res.json({
          status:0,
          message: "Error occured!"
        })
      }
      else{
        d = req.body.year;
        let startDate = '';
        let endDate = '';
          startDate = d+"-01-01";
          endDate = d+"-12-31";
       
        console.log(d);
        Holiday.findAll({
          where: {
            date: {[Op.between]:[startDate,endDate]},
            cmp_id: cmp_id
          }
       }).then(resHolidays => {
        //  years=[y1,y2,y3]
         data = {};
        //  data['year'] = years
         data['resp'] = resHolidays
         res.json(data);
       })
      }
    
      
  // }
  
  })
  //  ---------------------------------End-------------------------------------------



  
     //  ---------------------------------Start-------------------------------------------
  // Function      : updateHoliday
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : update holiday


  router.post('/updateHoliday', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      console.log(req.body.date)
      if(req.body.date == '' || req.body.date == null){
        res.json({
          status:0,
          message: "Date Empty!"
        })
      }
      else if(req.body.title == '' || req.body.title == null){
        res.json({
          status:0,
          message: "Title Empty!"
        })
      }
      else{
        Holiday.findAndCountAll({
          where:{
            title: req.body.title,
            date : req.body.date,
            cmp_id: cmp_id
          }
        }).then(resHoliday => {
          if(resHoliday.count > 1 ){
            res.json({
              status:0,
              message: "Already Exist!"
            })
          }else{
            Holiday.update({
              title: req.body.title,
              date : req.body.date
            },
          {
            where: {
              id: req.body.id
            }
          }).then( resUpdation => {
            if(resUpdation == 1){
              res.json({
                status:1,
                message: "Successfully Updated!"
              })
            }
            else{
              res.json({
                status:1,
                message: "Failed! Try again!"
              })
            }
          })
          }
        })
      }
    
      
  // }
  
  })
  //  ---------------------------------End-------------------------------------------



  //  ---------------------------------Start-------------------------------------------
  // Function      : updateHoliday
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 15-03-2018
  // Last Modified : 15-03-2018, 
  // Desc          : update holiday


  router.post('/deleteHoliday', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      console.log(req.body.id)
      if(req.body.id == '' || req.body.id == null){
        res.json({
          status:0,
          message: "Error occured!"
        })
      }
      else{
        Holiday.destroy({
          where:{
            id: req.body.id
          }
        }).then(resHoliday => {
          res.json({
            status:1,
            message: "Successfully deleted!"
          })
        }).catch(err =>{
          res.json({
            status:0,
            message: "Error occured! Try again!"
          })
        })
      }
    
      
  // }
  
  })
  //  ---------------------------------End-------------------------------------------




    //  ---------------------------------Start-------------------------------------------
  // Function      : saveHoliday
  // Params        : 
  // Returns       : 
  // Author        : Manu Prasad
  // Date          : 23-03-2018
  // Last Modified : 23-03-2018, 
  // Desc          : save Holiday


  router.post('/saveHoliday', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      // role_id = req.params.id;
      console.log(req.body.date+5.5);
      
      console.log(new Date().getTimezoneOffset());
      if(req.body.title == '' || req.body.title == null){
        res.json({
          status:0,
          message: "Title is empty!"
        })
      }
      else if(req.body.date == '' || req.body.date == null){
        res.json({
          status:0,
          message: "Date is empty!"
        })
      }
      else{
        Holiday.findAndCountAll({
          where:{
            title: req.body.title,
            date : req.body.date,
            cmp_id: cmp_id
          }
        }).then(resExist => {
          if(resExist.count > 0){
            res.json({
              status:0,
              message: "Holiday with same date and name exist!"
            })
          }else{
            Holiday.build({
              title: req.body.title,
              cmp_id: cmp_id,
              date : req.body.date
            }).save().then(resSave => {
              // console.log(resSave)
              res.json({status:1,
                message: "Successfully saved!"
              })
            }).catch(err => {
              res.json({
                status:0,
                message: "An error occured! Try again!"
              })
            })
          }
        }).catch(error => {
          res.json({
            status:0,
            message: "An error occured! Try again!"
          })
        })
          
        
      }
    
      
  // }
  
  })
  //  ---------------------------------End-------------------------------------------
  module.exports = router;
  return router;
  }
  module.exports = returnRouter;

