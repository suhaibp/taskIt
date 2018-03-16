
var express = require('express');
var router = express.Router();
async = require("async");
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
var Teams = Models.tbl_team;
var TeamAssoc = Models.tbl_team_assoc;
var Plan = Models.tbl_plan;
var Role = Models.tbl_role;
var AccessRights = Models.tbl_access_rights;
var AccessRightsAssoc = Models.tbl_access_rights_assoc;
var AccessRightsMain = Models.tbl_main_access_right;
const Op = Sequelize.Op;
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


  router.get('/getAccessRights', function(req, res) {
    // if (req.headers && req.headers.authorization) {
    //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //     try {
    //   decoded = jwt.verify(authorization, config.secret);
    //   var cmp_id = decoded._id;
      var cmp_id = 1;
      AccessRightsMain.findAll({ include: [{
        model: AccessRights
        // where: {id: Sequelize.col('login.role_id')}
      
       }],
       raw:true
      }).then(mainAccessRights => {
        console.log(mainAccessRights)
        //     var tmp={};
        //     var array = [];
        //     tmp = mainAccessRights;        
        //     tmp.rights = {};
        //         var tmp2={}
        //         res.json()
        //         // array.push(mainAccessRights)
                
        //     // res.json(mainAccessRights);
        //     async.eachOfSeries(array, (element, key, callback)=>{
        //       AccessRights.findAll({
        //         raw:true,
        //         where: {main_access_right_id : element.id}
        //       }).then(accessRights => {
        //         tmp.rights = accessRights
        //         // res.json(accessRights)
        //         element.push({rights:accessRights})
              
        //       });
        //       callback();
              
        //     }, ()=>{
        //       // res.json(array);

        //     })
        // mainAccessRights.forEach((element,index) => {
          
        // });
        
      })
     
      
    // }
  })
  //  ---------------------------------End-------------------------------------------
  module.exports = router;
  return router;
  }
  module.exports = returnRouter;