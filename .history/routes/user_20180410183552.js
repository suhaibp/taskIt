var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
const Config = require('../config/database');
var config = require(__dirname + '/../config/config.json')[env];
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
var Role = models.tbl_role;
var Plans = models.tbl_plan;
var Company = models.tbl_company;
var Project = models.tbl_project;
var Users = models.tbl_user_profile;
var User_profile = models.tbl_user_profile;
var Category = models.tbl_project_category;
var Login = models.tbl_login;
var Login_attempt = models.tbl_login_attempt;
var Team_assoc = models.tbl_team_assoc;
var Project_estimation_team = models.tbl_project_estimation_team;
var Project_estimation_notification = models.tbl_estimation_notification;
var Estimation = models.tbl_estimation;
var Estimation_team_members = models.tbl_project_estimation_team_members;
var Estimation_modules = models.tbl_estimation_module;
var Estimation_tasks = models.tbl_estimation_task;
var Designation = models.tbl_designation;
var Team_assoc = models.tbl_team_assoc;
var Team = models.tbl_team;
var Experience = models.tbl_prev_exp;
var TimeExtensionRequestNotification = models.tbl_time_extension_req_notification;
var NewTaskRequestNotification = models.tbl_new_task_req_notification;
var NewTaskRequest = models.tbl_new_task_request;
var TimeExtensionRequest = models.tbl_time_extension_request;
var ProjectTask = models.tbl_project_tasks;

async = require("async");
var Projects = models.tbl_project;
var Industries = models.tbl_industry;
var CompanySize = models.tbl_company_size;
var Teams = models.tbl_team;
var TeamAssoc = models.tbl_team_assoc;
var Plan = models.tbl_plan;
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

var User_profile = models.tbl_user_profile;

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

    // ---------------------------------Start-------------------------------------------
    // Function      : get pm by id
    // Params        : login id
    // Returns       : user info
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          : getPmByLoginid
    router.get('/getPmByLoginid/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Login.findById(req.params.id).then(login => {
            role_id = login.role_id;
            if (role_id == 1) {
                Company.findOne({
                    where: {
                        login_id: req.params.id
                    }
                }).then(company => {
                    res.json(company.cmp_name);
                });
            }
            if (role_id == 3) {
                User_profile.findOne({
                    where: {
                        login_id: req.params.id
                    }
                }).then(user => {
                    res.json(user.f_name + " " + user.l_name);
                });
            }
        });
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getTeamMembers
    // Params        : login id, project id
    // Returns       : team members
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          :  Find user profile id of head from tbl_user_profie using login id. Then find the team id from tbl_estimation_teams using head id. Then team members from tbl_team_assocs. 
    router.get('/getTeamMembers/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            login_id = decoded.id;
            User_profile.findOne({
                where: {
                    login_id: login_id
                }
            }).then(user => {
                Project_estimation_team.findOne({
                    where: {
                        head_id: user.id,
                        project_id: req.params.id
                    }
                }).then(teams => {
                    Users.findAll({
                        include: [
                            {
                                model: Login,
                                where: {
                                    cmp_id: decoded.cmp_id,
                                    id: {
                                        [Op.ne]: login_id
                                    },
                                    block_status: false,
                                    delete_status: false,
                                }
                            },
                            {
                                model: Team_assoc,
                                where: {
                                    cmp_id: decoded.cmp_id,
                                    team_id: teams.team_id,
                                }
                            }]
                    }).then(team_members => {
                        team_members.push({ team_id: teams.id });
                        res.json(team_members);
                    });
                });

            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : add estimation
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          :  
    router.post('/addEstimation', function (req, res) {
        // isError = false;
        var pm_id = '';
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // if (req.body.team_member.length == 0) {
            //     isError = true;
            //     res.json({ success: true, msg: "Atleast one team member is required!" });
            // }
            // else 
            cmp_id = decoded.cmp_id;
            Company.findById(cmp_id).then(cmp => {
                Plans.findById(cmp.plan_id).then(plan => {
                    isError = false;
                    // no_modules = plan.no_modules;
                    // no_tasks = plan.no_tasks;
                    // isError = false;
                    // if (no_modules != "Unlimited") {
                    //     if (no_modules < req.body.modules.length) {
                    //         isError = true;
                    //         res.json({ success: false, msg: "No.of modules reaches to maximum, please upgrade your plan!" });
                    //     }
                    // }
                    // else if (isError = false && no_tasks != "Unlimited") {
                    //     req.body.modules.forEach(element => {
                    //         if (no_tasks < element.tasks.length) {
                    //             isError = true;
                    //             // res.json({ success: false, msg: "No.of tasks reaches to maximum, please upgrade your plan!" });
                    //         }
                    //     });
                    // }

                    if (isError = false && req.body.modules.length == 0) {
                        isError = true;
                        res.json({ success: true, msg: "Atleast one module is required!" });
                    }
                    else if (isError = false && req.body.modules.length != 0) {
                        req.body.modules.forEach(element => {
                            if (element.tasks.length == 0) {
                                isError = true;
                                res.json({ success: false, msg: "Each module should contain atleast one task!" });
                            }
                        });
                    }
                    if (isError == false) {
                        Project.findById(req.body.project_id).then(project => {
                            this.pm_id = project.pm_id;
                        });
                        const estimation = Estimation.build({
                            estimation_hour: req.body.estimated_hour,
                            project_id: req.body.project_id,
                            estimation_team_id: req.body.team_id,
                            date_time: new Date(),
                        });
                        estimation.save().then(function (est) {
                            // console.log(est.id)
                            req.body.modules.forEach(moduleArray => {
                                const est_modules = Estimation_modules.build({
                                    estimation_id: est.id,
                                    module_name: moduleArray.name
                                });
                                est_modules.save().then(function (modules) {
                                    moduleArray.tasks.forEach(taskArray => {
                                        Estimation_tasks.bulkCreate([
                                            {
                                                task_name: taskArray.name,
                                                description: taskArray.description,
                                                planned_hour: taskArray.planned_hour,
                                                buffer_hour: taskArray.buffer_time,
                                                estimation_module_id: modules.id,
                                                estimation_team_id: req.body.team_id,
                                            }
                                        ]).then(tasks => { })
                                    });
                                });
                            });
                            req.body.team_member.forEach(item => {
                                Estimation_team_members.bulkCreate([
                                    { estimation_team_id: req.body.team_id, user_profile_id: item }
                                ]).then(members => {
                                    const notification = Project_estimation_notification.build({
                                        estimation_id: est.id,
                                        project_id: req.body.project_id,
                                        from_id: decoded.id,
                                        to_id: this.pm_id
                                    });
                                    notification.save().then(function (notif) {
                                    });
                                });
                            });
                            Project_estimation_notification.update({
                                is_completed: true
                            }, {
                                    where: {
                                        id: req.body.notif_id
                                    }
                                }).then(data => {
                                });

                        });
                        io.sockets.emit("approveEstimation", {
                        });
                        res.json({ success: true, msg: "Success" });
                    }
                });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get TeamHeadNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin user assigned for a project estimation(ie .as team head).
    router.get('/getTeamHeadNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            login_id = decoded.id;
            Project_estimation_notification.findAll({
                where: {
                    to_id: login_id,
                    is_completed: false
                },
                include: {
                    model: Project
                }
            }).then(notif => {
                res.json(notif);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get notif by id
    // Params        : id
    // Returns       : notification
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the logged in member is the suitable person to estimate
    router.get('/getNotif/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project_estimation_notification.findById(req.params.id).then(notif => {
                if (notif.to_id == decoded.id && notif.is_completed == false) {
                    res.json({ success: true, msg: "" });
                }
                else {
                    res.json({ success: false, msg: "Unauthorized Access!" });
                }
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getCurrentEstimation
    // Params        : notification id
    // Returns       : estimation
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          : get Current Estimation from notification id
    router.get('/getCurrentEstimation/:id', function (req, res) {
        var to_id = '';
        var est = '';
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project_estimation_notification.findById(req.params.id).then(notif => {
                this.to_id = notif.to_id;
                Estimation.find({
                    where: {
                        id: notif.estimation_id
                    },
                    include: [
                        {
                            model: Project_estimation_team,
                            include: [{
                                model: User_profile
                            }],
                        },
                        {
                            model: Estimation_modules,
                            include: {
                                model: Estimation_tasks
                            }
                        },
                    ]
                    // , raw: true
                }).then(estimations => {
                    // console.log(estimations)
                    if (estimations !== '' && estimations !== null) {
                        team_id = estimations.tbl_project_estimation_team.id;
                        Estimation_team_members.find({
                            where: {
                                estimation_team_id: team_id
                            },
                        }).then(members => {
                            res.json({ team_members: members, data: estimations });
                        });
                    }
                    else {
                        // console.log(estimations)
                        res.json({ data: estimations });
                    }

                });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getProfile
    // Params        : 
    // Returns       : logged in user details
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : 
    router.get('/getProfile', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            User_profile.find({
                where: {
                    login_id: decoded.id
                },
                include: [
                    {
                        model: Login,
                    },
                    {
                        model: Designation,
                    },
                    {
                        model: Role,
                    },
                    {
                        model: Team_assoc,
                        include: {
                            model: Team
                        }
                    },
                    {
                        model: Experience
                    },
                ]
            }).then(user => {
                res.json(user);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : updateUser
    // Params        : user data
    // Returns       : 
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : 
    router.post('/updateUser', function (req, res) {
        isError = false;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.f_name == '' || req.body.l_name == '' || req.body.gender == '' || req.body.contact_no == '' || req.body.password == '') {
                res.json({ success: false, msg: "All fields are required!" });
            }
            else if (validateNo(req.body.contact_no) == false) {
                res.json({ success: false, msg: "Enter a valid phone number" });
            }
            else if (validatePassword(req.body.password) == false) {
                res.json({ success: false, msg: "Password contain atleast 6 characters and should contain one number,one character and one special character" });
            }
            else if (req.body.password != req.body.c_password) {
                res.json({ success: false, msg: "Password does'nt match!" });
            }
            else {
                var bcr_password = '';
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) throw err;
                        bcr_password = hash;
                    })
                });
                if (req.body.imgSrc != '../assets/images/dp.jpg') {
                    timestamp = new Date().getTime().toString();
                    docName = req.body.id + timestamp + Math.floor(100000 + Math.random() * 900000);
                    // console.log(req.body.imgSrc);
                    var base64 = decodeBase64Image(req.body.imgSrc);
                    // console.log(base64);
                    require("fs").writeFile('../taskit/public/assets/profile_upload/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
                    });
                    require("fs").writeFile('../taskit/angular/src/assets/profile_upload/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
                    });
                    profile_image = docName + '.' + base64.ext;
                }
                else {
                    profile_image = '';
                }
                User_profile.update(
                    {
                        f_name: req.body.f_name,
                        l_name: req.body.l_name,
                        gender: req.body.gender,
                        contact_no: req.body.contact_no
                    },
                    {
                        where: {
                            login_id: decoded.id
                        },
                    }).then(user => {
                        if (user == 1) {
                            if (bcr_password != '') {
                                Login.update({
                                    password: bcr_password,
                                    profile_image: profile_image
                                }, {
                                        where: {
                                            id: decoded.id
                                        },
                                    }).then(login => {
                                        if (login == 1) {
                                            res.json({ success: true, msg: "Success" });
                                            io.sockets.emit("updateProfile", {
                                            });
                                        }
                                        else {
                                            res.json({ success: false, msg: "Failed" });
                                        }
                                    });
                            }
                        }
                        else {
                            res.json({ success: false, msg: "Failed" });
                        }
                    });
            }
        }
        else {
            return res.status(401).send('Invalid User');
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
    // Function      : validatePassword
    // Params        : password
    // Returns       : boolean true or false
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : for validate a password.
    function validatePassword(password) {
        var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{6,}$/;
        return re.test(password);
    }
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : decodeBase64Image
    // Params        : base64encoded image
    // Returns       : image type, extension, data
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : for decoding base64encoded image

    function decodeBase64Image(dataString) {
        // console.log(dataString);
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        //   console.log(matches);
        var response = {};

        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }

        response.type = matches[1];
        ext = matches[1].split("/");
        response.ext = ext[1];
        response.data = new Buffer(matches[2], 'base64');

        return response;
    }
    // ----------------------------------End-------------------------------------------
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
          temp = [];
        resProjects.forEach(element=> {
            temp2 = []
                temp.push({id:element.id,planned_end_date:element.planned_end_date,planned_start_date:element.planned_start_date,project_name:element.project_name,tbl_project_member_assocs:element.tbl_project_member_assocs})
                // element.tbl_project_member_assocs.forEach(ele => {
                // temp.push(ele)
                console.log(element.tbl_project_member_assocs.user_profile_id);
            // });
            });
        res.json(temp);
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
    // ---------------------------------Start-------------------------------------------
    // Function      : getNewTaskRequestNotification
    // Params        : 
    // Returns       : notification info
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    router.get('/getNewTaskRequestNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            NewTaskRequestNotification.findAll({
                where: {
                    is_user_viewed: false
                },
                include: [
                    {
                        model: NewTaskRequest,
                        where: {
                            $or: [
                                {
                                    request_status:
                                    {
                                        $eq: "Accepted"
                                    }
                                },
                                {
                                    request_status:
                                    {
                                        $eq: "Rejected"
                                    }
                                }]
                        },
                        include: {
                            model: User_profile,
                            include: {
                                model: Login,
                                where: {
                                    id: decoded.id
                                }
                            }
                        }
                    }
                ]
            }).then(notif => {
                res.json(notif);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getTimeExtensionRequestNotification
    // Params        : 
    // Returns       : notification info
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          : 
    router.get('/getTimeExtensionRequestNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            TimeExtensionRequestNotification.findAll({
                where: {
                    is_user_viewed: false
                },
                include: [
                    {
                        model: TimeExtensionRequest,
                        where: {
                            $or: [
                                {
                                    req_status:
                                    {
                                        $eq: "Accepted"
                                    }
                                },
                                {
                                    req_status:
                                    {
                                        $eq: "Rejected"
                                    }
                                }]
                        },
                        include: [{
                            model: ProjectTask,
                            include: {
                                model: User_profile,
                                include: {
                                    model: Login,
                                    where: {
                                        id: decoded.id
                                    }
                                }
                            }
                        }]
                    }
                ]
            }).then(notif => {
                res.json(notif);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of time extension request approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          :  
    router.get('/closeNotif/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            TimeExtensionRequestNotification.update({
                is_user_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(notif => {
                    if (notif == 1) {
                        res.json({ success: true, msg: "Success" });
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of new task request approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 05-04-2018
    // Last Modified : 05-04-2018, Rinsha
    // Desc          :  
    router.get('/closeNotif1/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            NewTaskRequestNotification.update({
                is_user_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(notif => {
                    if (notif == 1) {
                        res.json({ success: true, msg: "Success"});
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    module.exports = router;

    return router;
}
module.exports = returnRouter;
