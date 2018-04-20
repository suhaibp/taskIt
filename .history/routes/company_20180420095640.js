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
const emailTemplate = require('../template/verification_email');
const request = require('request');
async = require("async");
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
var Complexity_percentage = models.tbl_complexity_percentage;
var User_profile = models.tbl_user_profile;
var Login_attempt = models.tbl_login_attempt;
var Emp_leave = models.tbl_emp_leave;
var Public_holiday = models.tbl_public_holiday;
var cmp_work_time_assocs = models.tbl_cmp_work_time_assoc;
var cmp_work_times = models.tbl_cmp_work_time;
var cmp_off_day_assoc = models.tbl_cmp_off_day_assoc;
var cmp_break = models.tbl_cmp_break;
var cmp_break_assoc = models.tbl_cmp_break_assoc;
var Projects_member_assoc = models.tbl_project_member_assoc;
var Plans = models.tbl_plan;
var Category = models.tbl_project_category;
var Team_assoc = models.tbl_team_assoc;
var Project_estimation_team = models.tbl_project_estimation_team;
var Estimation_team_members = models.tbl_project_estimation_team_members;
var Project_estimation_notification = models.tbl_estimation_notification;
var Estimation = models.tbl_estimation;
var Estimation_modules = models.tbl_estimation_module;
var Estimation_tasks = models.tbl_estimation_task;
var generator = require('generate-password');
var CompanySize = models.tbl_company_size;
var Estimation_team = models.tbl_project_estimation_team;
var ip = require("ip");
var moment = require('moment');
moment().format();
var momentDurationFormatSetup = require("moment-duration-format");
var dateFormat = require('dateformat');
const datesBetween = require('dates-between');
var Log = models.tbl_log;
var User = models.tbl_user_profile;
var Designation = models.tbl_designation;
var Prevexp = models.tbl_prev_exp;
var Team = models.tbl_team;
var Teamassoc = models.tbl_team_assoc;
var Usergroup = models.tbl_role;
var Project_task = models.tbl_project_tasks;
var Project_category = models.tbl_project_category;
var Project = models.tbl_project;
var Employeeleave = models.tbl_emp_leave;
var cmp_off_day = models.tbl_cmp_off_day_assoc;
var cmp_work_time = models.tbl_cmp_work_time;
var Project_modules = models.tbl_project_modules;
// var project = models.tbl_project;
var Plan = models.tbl_plan;
var Company = models.tbl_company;
var Time_extension_request = models.tbl_time_extension_request;
var Time_extension_request_notifications = models.tbl_time_extension_req_notification;
var task_status_assoc = models.tbl_task_status_assoc;
var task_statuses = models.tbl_task_status;

'use strict';
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      : myTrim
    // Params        : string
    // Returns       : string
    // Author        :sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : For removing unwanted space from left and right
    function myTrim(x) {
        return x.replace(/^\s+|\s+$/gm, '');
    }
    // ----------------------------------End-------------------------------------------
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
    // Function      : validateEmail
    // Params        : email
    // Returns       : boolean true or false
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : for validate an email
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : All users 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : all users
    router.get('/allusers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            User.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id },
                include: [{
                    model: Login,
                    required: true,
                    // where: {delete_status: false}
                }]
            }).then(user => {
                //console.log(projects);
                return res.json(user);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : All deleteusers
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : all deleteusers
    router.get('/alldeleteusers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            User.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id },
                include: [{
                    model: Login,
                    required: true,
                    where: { delete_status: true }
                }]
            }).then(user => {
                //console.log(projects);
                return res.json(user);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : All users 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : all active users
    router.get('/allactiveusers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id },
                include: [{
                    model: Login,
                    required: true,
                    where: { [Op.and]: [{ block_status: false, delete_status: false }] }
                }]
            }).then(user => {
                return res.json(user);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : All users 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : all blocked users
    router.get('/allblockedusers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id },
                include: [{
                    model: Login,
                    required: true,
                    where: { [Op.and]: [{ block_status: true, delete_status: false }] }
                }]
            }).then(user => {
                //console.log(projects);
                res.json(user);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------                   
    // ---------------------------------Start-------------------------------------------
    // Function      : block user
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : block user
    router.put('/blockuser/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Login.update({
                block_status: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(user => {
                    if (!user) {
                        return res.json({ success: false, msg: 'Faild to block user' });
                    } else {
                        io.sockets.emit("blockuser", {
                            //user_id : req.params.id
                        });
                        return res.json({ success: true, msg: 'block user Successfully' });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : unblock user
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          :07-03-2018
    // Last Modified : 
    // Desc          : unblock user
    router.put('/unblockuser/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Login.update({
                block_status: false
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(user => {
                    if (!user) {
                        return res.json({ success: false, msg: 'Faild to unblock user' });
                    } else {
                        io.sockets.emit("unblockuser", {
                            //user_id : req.params.id
                        });
                        return res.json({ success: true, msg: 'User unblock Successfully' });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : delete user
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 07-03-2018
    // Last Modified : 
    // Desc          : delete user
    router.post('/deleteuser/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Login.update({
                delete_status: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(user => {
                    if (!user) {
                        return res.json({ success: false, msg: 'Faild to delete user' });
                    } else {
                        return res.json({ success: true, msg: 'Delete User Successfully' });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : All designation 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : all designation
    router.get('/alldesignation', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Designation.findAll({
                where: { delete_status: false }
            }).then(designation => {
                //console.log(projects);
                return res.json(designation);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------    
    // ---------------------------------Start-------------------------------------------
    // Function      : All prev exp 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : all  previous experience 
    router.get('/allprevexp', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Prevexp.findAll({
            }).then(prevexp => {
                return res.json(prevexp);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------    
    // ---------------------------------Start-------------------------------------------
    // Function      : All usergroup
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : all  previous experience 
    router.get('/allusergroup', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Usergroup.findAll({
                where: { is_visible: true }
            }).then(usergroup => {
                return res.json(usergroup);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------     
    // ---------------------------------Start-------------------------------------------
    // Function      : All teams
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : all  teams
    router.get('/allteam', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Team.findAll({
            }).then(team => {
                return res.json(team);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : decodeBase64Image
    // Params        : base64encoded image
    // Returns       : image type, extension, data
    // Author        : sudha
    // Date          : 08-03-2018
    // Last Modified : 
    // Desc          : for decoding base64encoded image
    function decodeBase64Image(dataString) {
        // // console.log(dataString);
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        //   // console.log(dataString);
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
    // ---------------------------------Start-------------------------------------------
    // Function      : add user
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 25-01-2018
    // Last Modified : 
    // Desc          : adduser
    router.post('/adduser', (req, res, next) => {
        //  var regex  = /^\d+(?:\.\d{0,2})$/;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var team = req.body.team;
            // var cmp_id = 1;
            var photoName = '';
            var isErr = false;
            errMsg = '';
            email = myTrim(req.body.email);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }

            Company.findOne({
                order: [['id', 'DESC']],
                required: true,
                where: { id: cmp_id },
                include:
                {
                    model: Plan,

                }

            }).then(companyPlan => {
                var no_members = parseInt(companyPlan.tbl_plan.no_members);

                User.count({
                    where: { [Op.and]: [{ cmp_id: cmp_id }] }
                    // where: { cmp_id: cmp_id,delete_status:false },
                })
                    .then(count => {
                        var count1 = count;
                        if (count1 >= no_members) {
                            errMsg = "Cant Add, Maximum number of members reached!";
                            isErr = true;
                            // return res.json("jh");
                        }
                        // return res.json(count1);

                        if (!isErr && req.body.f_name == '' || req.body.f_name == null) {
                            errMsg = "* Failed, Please Enter First Name!";
                            isErr = true;
                        }
                        if (!isErr && req.body.l_name == '' || req.body.l_name == null) {
                            errMsg = "* Failed, Please Enter Last Name!";
                            isErr = true;
                        }
                        if (!isErr && req.body.email == '' || req.body.email == null) {
                            errMsg = "* Failed, Please Enter Email!";
                            isErr = true;
                        }
                        if (!isErr && req.body.gender == '' || req.body.gender == null) {
                            errMsg = "* Failed, Please Select gender!";
                            isErr = true;
                        }
                        if (!isErr && req.body.contact_no == '' || req.body.contact_no == null) {
                            errMsg = "* Failed, Please Enter Phone Number!";
                            isErr = true;
                        }
                        if (!isErr && validateNo(req.body.contact_no) == false) {
                            errMsg = "* Failed, Please Enter Valid Phone Number!";
                            isErr = true;
                        }
                        if (!isErr && req.body.design == '' || req.body.design == null) {
                            errMsg = "* Failed, Please Select Designation!";
                            isErr = true;
                        }
                        if (!isErr && req.body.pre_exp == '' || req.body.pre_exp == null) {
                            errMsg = "* Failed, Please Select Previous experience!";
                            isErr = true;
                        }
                        if (!isErr && req.body.user_group == '' || req.body.user_group == null) {
                            errMsg = "* Failed, Please Select User Group!";
                            isErr = true;
                        }
                        // console.log(req.body.join_date);
                        if (!isErr && req.body.join_date == '' || req.body.join_date == null) {
                            errMsg = "* Failed, Please Select join_date!";
                            isErr = true;
                        }
                        if (!isErr && req.body.user_group == 4 && (req.body.team == null || req.body.team == '')) {
                            errMsg = "* Failed, Please Select Team member!";
                            isErr = true;
                        }
                        if (!validateEmail(req.body.email) && !isErr) {
                            errMsg = req.body.email + " is not a valid email";
                            isErr = true;
                        }
                        if (!isErr) {
                            if (req.body.photoSrc != '') {
                                ext = ['gif', 'png', 'jpg', 'jpeg']
                                var base64 = decodeBase64Image(req.body.photoSrc);
                                if (!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                                    errMsg = "* Failed, Invalid Photo!";
                                    isErr = true;
                                }
                                console.log(base64.type);
                                console.log(base64.ext);
                                photoName = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000) + '.' + base64.ext);
                                //console.log(photoName);
                                require("fs").writeFile('../taskIt/public/assets/profile_upload/' + photoName, base64.data, 'base64', function (err) {
                                    console.log(err);
                                });
                                require("fs").writeFile('../taskIt/angular/src/assets/profile_upload/' + photoName, base64.data, 'base64', function (err) {
                                    console.log(err);
                                });
                            }
                            var password = generator.generate({
                                length: 10,
                                numbers: true
                            });
                            // console.log("generator pw:" + password);
                            var bcr_password = '';
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(password, salt, (err, hash) => {
                                    if (err) throw err;
                                    bcr_password = hash;
                                })
                            })
                            // console.log("bcryp:" + bcr_password)
                            Login.findAll({
                                where: { [Op.and]: [{ email: email, delete_status: false, cmp_id: cmp_id }] }
                            }).then(user => {
                                // console.log(user);
                                //return res.json(user);
                                if (!isErr && (user.length > 0)) {
                                    errMsg = "Email Already Exists";
                                    isErr = true;
                                    res.json({ success: false, msg: errMsg });
                                } else {
                                    console.log(cmp_id);
                                    const logindetails = Login.build({
                                        email: req.body.email,
                                        password: bcr_password,
                                        role_id: req.body.user_group,
                                        cmp_id: cmp_id,
                                        profile_image: photoName,
                                        block_status: false,
                                        delete_status: false
                                    })
                                    logindetails.save().then(function (newloginUser) {
                                        var user_id = newloginUser.id;
                                        const Userdetails = User.build({
                                            f_name: req.body.f_name,
                                            l_name: req.body.l_name,
                                            contact_no: req.body.contact_no,
                                            join_date: req.body.join_date,
                                            gender: req.body.gender,
                                            designation_id: req.body.design,
                                            prev_exp_id: req.body.pre_exp,
                                            email: req.body.email,
                                            cmp_id: cmp_id,
                                            role_id: req.body.user_group,
                                            login_id: user_id,
                                            status: false
                                        })
                                        Userdetails.save().then(function (newUser) {
                                            var new_user_id = newUser.id;
                                            team.forEach((tm, i) => {
                                                const Teamassoctn = Teamassoc.build({
                                                    is_head: false,
                                                    cmp_id: cmp_id,
                                                    user_profile_id: new_user_id,
                                                    team_id: tm
                                                })
                                                Teamassoctn.save().then(function (teamasso) {
                                                });
                                            })
                                            emailTemplate.sendUsercredentialMail(req.body.email, req.body.f_name, password);
                                            // console.log(newUser);
                                            var id = decoded.id;
                                            // var role = req.body.id
                                            var user_id;
                                            Users.find({
                                                where: {
                                                    login_id: id
                                                }
                                            }).then(resUser => {
                                                user_id = resUser.id;
                                                saveLog("New User created!", user_id)
                                            })
                                            res.json({ success: true, msg: "NewUser Created Successfully" });
                                        })
                                    })
                                }
                            });

                        } else {
                            res.json({ success: false, msg: errMsg });
                        }
                    });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------Start-------------------------------------------
    // Function      : singleuser
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : singleuser
    router.post('/singleuser', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                where: { login_id: req.body.id },
                include: [{
                    model: Login
                },
                {
                    model: Teamassoc,
                }],
            }).then(user => {
                //console.log(projects);
                return res.json(user);
                // res.json(user)
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : updateuser
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : updateuser
    router.post('/updateuser', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // res.json({email:1})
            var teams = req.body.team;
            // var cmp_id = 1;
            // var photoName = '';
            var isErr = false;
            errMsg = '';
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            // console.log("asd"+req.body.f_name);
            if (!isErr && req.body.f_name == '' || req.body.f_name == null) {
                errMsg = "* Failed, Please Enter First Name!";
                isErr = true;
            }
            if (!isErr && req.body.l_name == '' || req.body.l_name == null) {
                errMsg = "* Failed, Please Enter Last Name!";
                isErr = true;
            }
            if (!isErr && req.body.contact_no == '' || req.body.contact_no == null) {
                errMsg = "* Failed, Please Enter Phone Number!";
                isErr = true;
            }
            if (!isErr && validateNo(req.body.contact_no) == false) {
                errMsg = "* Failed, Please Enter Valid Phone Number!";
                isErr = true;
            }
            if (!isErr && req.body.role_id == 4 && (req.body.team == null || req.body.team == '')) {
                errMsg = "* Failed, Please Select Team member!";
                isErr = true;
            }
            if (!isErr) {
                if (req.body.editPhotoSrc) {
                    if (req.body.photoSrc != '') {
                        //delete file
                        require("fs").unlinkSync('../taskIt/public/assets/profile_upload/' + req.body.photoSrc);
                        require("fs").unlinkSync('../taskIt/angular/src/assets/profile_upload/' + req.body.photoSrc);
                    }

                    // console.log(req.body.editPhotoSrc);
                    ext = ['gif', 'png', 'jpg', 'jpeg']
                    var base64 = decodeBase64Image(req.body.editPhotoSrc);
                    if (!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
                        errMsg = "* Failed, Invalid Photo!";
                        isErr = true;
                    }
                    // console.log(base64.type);
                    //   console.log(base64.ext);
                    photoName = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000) + '.' + base64.ext);
                    //console.log(photoName);
                    require("fs").writeFile('../taskIt/public/assets/profile_upload/' + photoName, base64.data, 'base64', function (err) {
                        console.log(err);
                    });
                    require("fs").writeFile('../taskIt/angular/src/assets/profile_upload/' + photoName, base64.data, 'base64', function (err) {
                        console.log(err);
                    });
                    Login.update({
                        profile_image: photoName,
                    }, {
                            where: {
                                id: req.body.login_id
                            }
                        }).then(user1 => {
                        });
                }
                Login.update({
                    role_id: req.body.user_group,
                }, {
                        where: {
                            id: req.body.login_id
                        }
                    }).then(user1 => {
                        User.update({
                            f_name: req.body.f_name,
                            l_name: req.body.l_name,
                            contact_no: req.body.contact_no,
                            join_date: req.body.join_date,
                            gender: req.body.gender,
                            designation_id: req.body.designation_id,
                            prev_exp_id: req.body.prev_exp_id,
                            role_id: req.body.role_id,
                        }, {
                                where: {
                                    id: req.body.id
                                }
                            }).then(user2 => {
                                if (req.body.role_id == 4) {
                                    Teamassoc.destroy({
                                        where: {
                                            user_profile_id: req.body.id
                                        }
                                    }).then(team => {
                                        teams.forEach((tm, i) => {
                                            const Teamassoctn = Teamassoc.build({
                                                is_head: false,
                                                cmp_id: cmp_id,
                                                user_profile_id: req.body.id,
                                                team_id: tm
                                            })
                                            Teamassoctn.save().then(function (teamasso) {
                                            });
                                        })
                                    });
                                } else {
                                    Teamassoc.destroy({
                                        where: {
                                            user_profile_id: req.body.id
                                        }
                                    }).then(team => {
                                    });
                                }
                            });
                    });
                var id = decoded.id;
                // var role = req.body.id
                var user_id;
                Users.find({
                    where: {
                        login_id: id
                    }
                }).then(resUser => {
                    user_id = resUser.id;
                    saveLog("User profile updated!", user_id)
                })
                res.json({ success: true, msg: "User Updated Successfully" });
            } else {
                res.json({ success: false, msg: errMsg });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : allprojectcategory
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 11-04-2018, Rinsha
    // Desc          : allprojectcategory
    router.get('/allprojectcategory', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (req.headers && req.headers.authorization) {
                var authorization = req.headers.authorization.substring(4), decoded;
                decoded = jwt.verify(authorization, Config.secret);
                cmp_id = decoded.cmp_id;
                Project_category.findAll({
                    order: [['id', 'DESC']],
                    where: {
                        delete_status: false,
                        cmp_id: cmp_id
                    }
                }).then(category => {
                    return res.json(category);
                });
            } else {
                return res.status(401).send('Invalid User');
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : delete category
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : delete category
    router.put('/deletecategory/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // console.log("id del"+req.params.id);
            var isErr = false;
            errMsg = '';
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project.findAll({
                where: { category_id: req.params.id }
            }).then(catg => {
                // console.log(user);
                //return res.json(user);
                if (!isErr && (catg.length > 0)) {
                    errMsg = "Project category canot delete";
                    isErr = true;
                    res.json({ success: false, msg: errMsg });
                }
                else {
                    Project_category.update({
                        delete_status: true
                    }, {
                            where: {
                                id: req.params.id
                            }
                        }).then(user => {
                            if (!user) {
                                return res.json({ success: false, msg: 'Faild to delete Category' });
                            } else {
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Category deleted!", user_id)
                                })
                                return res.json({ success: true, msg: 'Delete Category Successfully' });
                            }
                        });
                }
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : add Category
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 12-01-2018
    // Last Modified : 11-04-2018, Rinsha
    // Desc          : addCategory
    router.post('/addCategory', (req, res, next) => {
        // console.log(req.body);
        // var cmp_id = 1;
        var isErr = false;
        errMsg = '';
        name = myTrim(req.body.name);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (!isErr && req.body.name == '' || req.body.name == null) {
                errMsg = "* Failed, Please Enter Category Name!";
                isErr = true;
            }
            if (!isErr) {
                Project_category.findAll({
                    where: { [Op.and]: [{ category_name: name, delete_status: false, cmp_id: cmp_id }] }
                }).then(category => {
                    // console.log(user);
                    //return res.json(user);
                    if (!isErr && (category.length > 0)) {
                        errMsg = "Category Name Already Exists";
                        isErr = true;
                        res.json({ success: false, msg: errMsg });
                    } else {
                        const addcategory = Project_category.build({
                            category_name: req.body.name,
                            cmp_id: cmp_id,
                            delete_status: false
                        })
                        addcategory.save().then(function (newcategory) {
                            // console.log(newPlan);
                            var id = decoded.id;
                            // var role = req.body.id
                            console.log(id);
                            var user_id;
                            Users.find({
                                where: {
                                    login_id: id
                                }
                            }).then(resUser => {
                                console.log(resUser)
                                user_id = resUser.id;
                                saveLog("Category " + req.body.name + " added!", user_id)
                            })
                            res.json({ success: true, msg: "Project Category Created Successfully" });
                        })
                    }
                });
            } else {
                res.json({ success: false, msg: errMsg });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End----------------------------------------------- 
    // ---------------------------------Start-------------------------------------------
    // Function      : singlecategory
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 13-03-2018
    // Last Modified : 
    // Desc          : singlecategory
    router.get('/singlecategory/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project_category.findOne({
                where: { id: req.params.id },
            }).then(category => {
                //console.log(projects);
                return res.json(category);
                // res.json(user)
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : updatecategory
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 13-03-2018
    // Last Modified : 
    // Desc          : updatecategory
    router.post('/updatecategory', (req, res, next) => {
        // console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var isErr = false;
            errMsg = '';
            category_name = myTrim(req.body.category_name);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (!isErr && req.body.category_name == '' || req.body.category_name == null) {
                errMsg = "* Failed, Please Enter Category Name!";
                isErr = true;
            }
            if (!isErr) {
                Project_category.findOne({
                    "raw": true,
                    where: { [Op.and]: [{ category_name: req.body.category_name, delete_status: false }] }
                }).then(category => {
                    console.log(category);
                    //return res.json(user);
                    if (!isErr && category && (category.id != req.body.id)) {
                        errMsg = "Category Name Already Exists";
                        isErr = true;
                        res.json({ success: false, msg: errMsg });
                    } else {
                        Project_category.update({
                            category_name: req.body.category_name
                        }, {
                                where: {
                                    id: req.body.id
                                }
                            }).then(data1 => {
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Category " + req.body.category_name + " updated!", user_id)
                                })
                                res.json({ success: true, msg: "Project Category updated Successfully" });
                            })
                    }
                });
            } else {
                res.json({ success: false, msg: errMsg });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : allempleaves
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          : all employee leave
    router.get('/allempleaves', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.findAll({
                order: [['id', 'DESC']],
                required: true,
                // where: { cmp_id: cmp_id, delete_status: false },
                where: { [Op.and]: [{ cmp_id: cmp_id, delete_status: false, request_status: "Accepted" }] },
                include: [
                    {
                        model: User,
                        attributes: ['f_name'],
                        required: true,
                        include: [{
                            // "required":true,
                            model: Login,
                            attributes: [],
                            required: true,
                            where: { [Op.and]: [{ block_status: false, delete_status: false, is_verified: true }] }
                        }]
                    }
                ]
            }).then(empleave => {
                return res.json(empleave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------        
    // ---------------------------------Start-------------------------------------------
    // Function      : allcompanyemployee
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          :all company employee
    router.get('/allcompanyemployee', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findAll({
                attributes: ['id', 'f_name'],
                "raw": true,
                order: [['id', 'DESC']],
                where: { cmp_id: cmp_id },
                include: [{
                    model: Login,
                    attributes: [],
                    required: true,
                    where: { [Op.and]: [{ block_status: false, delete_status: false, is_verified: true }] }
                }]
            }).then(allemp => {
                return res.json(allemp);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteempleave
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 14-03-2018
    // Last Modified : 
    // Desc          : deleteempleave
    router.put('/deleteempleave/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // console.log("id del"+req.params.id);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.update({
                delete_status: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(emp => {
                    if (!emp) {
                        return res.json({ success: false, msg: 'Faild to delete Employee leave' });
                    } else {
                        io.sockets.emit("deleteLeaveuser", {
                            //user_id : req.params.id
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Category " + req.body.category_name + " updated!", user_id)
                        })
                        return res.json({ success: true, msg: 'Delete Employee leave Successfully' });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : singleempleave
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 
    // Desc          : singleempleave
    router.get('/singleempleave/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.findOne({
                where: { id: req.params.id },
            }).then(singleemp => {
                return res.json(singleemp);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : addEmpleave
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 28-03-2018
    // Desc          : addEmpleave
    router.post('/addEmpleave', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var isErr = false;
            errMsg = '';
            var moment = require('moment');
            var time = moment();
            var time_format = time.format('YYYY-MM-DD');
            console.log(time_format);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (!isErr && req.body.startdate == '' || req.body.startdate == null) {
                errMsg = "* Failed, Please Select Start Date!";
                isErr = true;
            }
            if (!isErr && time_format >= req.body.startdate) {
                errMsg = "* Failed, Wrong date selection!";
                isErr = true;
            }
            if (!isErr && req.body.enddate == '' || req.body.enddate == null) {
                errMsg = "* Failed, Please Select End Date!";
                isErr = true;
            }
            if (!isErr && time_format >= req.body.enddate) {
                errMsg = "* Failed, Wrong date selection!";
                isErr = true;
            }
            if (!isErr && req.body.enddate < req.body.startdate) {
                errMsg = "* Failed, Please Select  date Correctly!";
                isErr = true;
            }
            if (!isErr && req.body.startavlhr == '' || req.body.startavlhr == null) {
                errMsg = "* Failed, Please select start available hour!";
                isErr = true;
            }
            if (!isErr && req.body.endavlhr == '' || req.body.endavlhr == null) {
                errMsg = "* Failed, Please select end available hour!";
                isErr = true;
            }
            if (!isErr && req.body.emp_id == '' || req.body.emp_id == null) {
                errMsg = "* Failed, Please select Employee!";
                isErr = true;
            }
            const startDate = new Date(req.body.startdate);
            const endDate = new Date(req.body.enddate);
            var total_seconds = 0;
            async.eachOfSeries(datesBetween(startDate, endDate), (daterng, key, callback) => {
                // console.log(daterng);

                Public_holiday.findOne({

                    where: { date: daterng, cmp_id: cmp_id },

                }).then(holiday => {
                    if (holiday) {
                        // console.log(daterng+"holiday")
                        callback();
                    } else {
                        // console.log(daterng+"not holiday")   
                        var d = new Date(daterng);
                        var date = d.getDate(daterng);
                        var day = d.getDay(daterng);//start 1

                        var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
                        var weekno = weekOfMonth + 1;
                        //console.log(day);
                        // console.log(weekno);
                        //  console.log( parseInt(weekOfMonth));          

                        cmp_off_day.findOne({

                            required: true,
                            where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                            include: [{
                                model: cmp_work_time,
                                required: true,

                            }]

                        }).then(work_time => {
                            if (work_time) {

                                // parse time using 24-hour clock and use UTC to prevent DST issues
                                var start = moment.utc('"' + work_time.tbl_cmp_work_time.start_time + '"', "HH:mm:ss");
                                var end = moment.utc('"' + work_time.tbl_cmp_work_time.end_time + '"', "HH:mm:ss");

                                // account for crossing over to midnight the next day
                                if (end.isBefore(start)) end.add(1, 'day');

                                // calculate the duration
                                var d = moment.duration(end.diff(start));

                                // subtract the lunch break
                                // d.subtract(30, 'minutes');

                                // format a string result
                                var s = moment.utc(+d).format('HH:mm:ss');

                                // console.log("s" + s);
                                var a = s.split(':'); // split it at the colons

                                // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

                                total_seconds = total_seconds + seconds;

                                callback();

                            } else {
                                cmp_work_time.findOne({

                                    required: true,
                                    where: { [Op.and]: [{ is_default: true, cmp_id: cmp_id }] },

                                }).then(work_time1 => {

                                    // parse time using 24-hour clock and use UTC to prevent DST issues
                                    var start = moment.utc('"' + work_time1.start_time + '"', "HH:mm:ss");
                                    var end = moment.utc('"' + work_time1.end_time + '"', "HH:mm:ss");

                                    // account for crossing over to midnight the next day
                                    if (end.isBefore(start)) end.add(1, 'day');

                                    // calculate the duration
                                    var d1 = moment.duration(end.diff(start));

                                    // subtract the lunch break
                                    // d.subtract(30, 'minutes');

                                    // format a string result
                                    var s1 = moment.utc(+d1).format('HH:mm:ss');

                                    // console.log("e" + s1);

                                    var a1 = s1.split(':'); // split it at the colons

                                    // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                    var seconds1 = (+a1[0]) * 60 * 60 + (+a1[1]) * 60 + (+a1[2]);


                                    total_seconds = total_seconds + seconds1;

                                    callback();

                                });

                            }

                        });
                    }

                });


            }, function (err) {
                console.log("tot" + total_seconds);
                // });
                if (!isErr) {
                    async.series([
                        function (callback) {
                            if (!isErr && req.body.startavlhr.hour == null) {
                                errMsg = "* Failed, Please select start available hour!";
                                isErr = true;
                            }
                            if (!isErr && req.body.startavlhr.minute == null) {
                                errMsg = "* Failed, Please select start available minute!";
                                isErr = true;
                            }
                            if (!isErr && req.body.endavlhr.hour == null) {
                                errMsg = "* Failed, Please select end available hour!";
                                isErr = true;
                            }
                            if (!isErr && req.body.endavlhr.minute == null) {
                                errMsg = "* Failed, Please select end available minute!";
                                isErr = true;
                            }
                            public_holiday.findAll({
                                attributes: ['title', 'date'],
                                required: true,
                                where: { cmp_id: cmp_id },
                            }).then(holiday => {
                                // console.log(holiday.title); 
                                holiday.forEach((element) => {
                                    var startdate = dateFormat(req.body.startdate, "isoDate");
                                    var enddate = dateFormat(req.body.enddate, "isoDate");
                                    console.log("jk" + startdate);
                                    console.log(element.date);
                                    if (!isErr && startdate == element.date && enddate == element.date) {
                                        errMsg = "*" + element.date + "" + element.title + "" + "Holiday! ";
                                        isErr = true;
                                    }
                                }); callback();
                            });
                        }, function (callback) {
                            var d = new Date(req.body.startdate);
                            var date = d.getDate(req.body.startdate);
                            var day = d.getDay(req.body.startdate);//start 1
                            var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
                            var weekno = weekOfMonth + 1;
                            //console.log(day);
                            // console.log(weekno);
                            //  console.log( parseInt(weekOfMonth));          
                            cmp_off_day.findOne({
                                required: true,
                                where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                include: [{
                                    model: cmp_work_time,
                                    required: true,
                                }]
                            }).then(work_time => {
                                if (work_time) {
                                    // console.log(work_time.tbl_cmp_work_time.start_time)
                                    // console.log(work_time.tbl_cmp_work_time.end_time)
                                    // parse time using 24-hour clock and use UTC to prevent DST issues
                                    var start = moment.utc('"' + work_time.tbl_cmp_work_time.start_time + '"', "HH:mm:ss");
                                    var end = moment.utc('"' + work_time.tbl_cmp_work_time.end_time + '"', "HH:mm:ss");
                                    // account for crossing over to midnight the next day
                                    if (end.isBefore(start)) end.add(1, 'day');
                                    // calculate the duration
                                    var d = moment.duration(end.diff(start));
                                    // subtract the lunch break
                                    // d.subtract(30, 'minutes');
                                    // format a string result
                                    var s = moment.utc(+d).format('H');
                                    console.log("s" + s);
                                    console.log(req.body.startavlhr.hour);
                                    //  res.json(work_time);
                                    if (!isErr && (parseFloat(s) < parseFloat(req.body.startavlhr.hour))) {
                                        errMsg = "* Failed,working hour exceed available hour !";
                                        isErr = true;
                                    }
                                    callback();
                                    //else{  }
                                } else {
                                    cmp_work_time.findOne({
                                        required: true,
                                        where: { [Op.and]: [{ is_default: true, cmp_id: cmp_id }] },
                                    }).then(work_time1 => {
                                        //  console.log(work_time1.start_time)
                                        //  console.log(work_time1.end_time)
                                        // parse time using 24-hour clock and use UTC to prevent DST issues
                                        var start = moment.utc('"' + work_time1.start_time + '"', "HH:mm:ss");
                                        var end = moment.utc('"' + work_time1.end_time + '"', "HH:mm:ss");
                                        // account for crossing over to midnight the next day
                                        if (end.isBefore(start)) end.add(1, 'day');
                                        // calculate the duration
                                        var d1 = moment.duration(end.diff(start));
                                        // subtract the lunch break
                                        // d.subtract(30, 'minutes');
                                        // format a string result
                                        var s1 = moment.utc(+d1).format('H');
                                        console.log("e" + s1);
                                        console.log(req.body.endavlhr.hour);
                                        //  res.json(work_time);
                                        if (!isErr && (parseFloat(s1) < parseFloat(req.body.endavlhr.hour))) {
                                            errMsg = "* Failed,working hour exceed available hour !";
                                            isErr = true;
                                        }
                                        callback();
                                        //else{  }
                                    });
                                }
                            });
                        }, function (callback) {
                            if (!isErr) {
                                Employeeleave.findAll({
                                    required: true,
                                    // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
                                    where: {
                                        [Op.and]: [{ cmp_id: cmp_id, user_profile_id: req.body.emp_id, delete_status: false }],
                                        [Op.or]: [{ start_date: req.body.startdate, end_date: req.body.enddate }]
                                    }
                                }).then(leave => {
                                    // console.log(user);
                                    //return res.json(user);
                                    if (!isErr && (leave.length > 0)) {
                                        errMsg = " Already Exists";
                                        isErr = true;
                                        res.json({ success: false, msg: errMsg });
                                    } else {
                                        var hh = req.body.startavlhr.hour;
                                        var mm = req.body.startavlhr.minute;
                                        var ss = req.body.startavlhr.second;
                                        if (hh < 10) { hh = "0" + hh; }
                                        if (mm < 10) { mm = "0" + mm; }
                                        if (ss < 10) { ss = "0" + ss; }
                                        // This formats your string to HH:MM:SS
                                        var startavailablehour = hh + ":" + mm + ":" + ss;
                                        console.log("q" + startavailablehour);
                                        var hh1 = req.body.endavlhr.hour;
                                        var mm1 = req.body.endavlhr.minute;
                                        var ss1 = req.body.endavlhr.second;
                                        if (hh1 < 10) { hh = "0" + hh1; }
                                        if (mm1 < 10) { mm = "0" + mm1; }
                                        if (ss1 < 10) { ss = "0" + ss1; }
                                        // This formats your string to HH:MM:SS
                                        var endavlhravailablehour = hh + ":" + mm + ":" + ss;
                                        console.log("d" + endavlhravailablehour);
                                        var a2 = startavailablehour.split(':'); // split it at the colons

                                        // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                        var seconds3 = (+a2[0]) * 60 * 60 + (+a2[1]) * 60 + (+a2[2]);
                                        var a3 = endavlhravailablehour.split(':'); // split it at the colons

                                        // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                        var seconds4 = (+a3[0]) * 60 * 60 + (+a3[1]) * 60 + (+a3[2]);
                                        var leavehr = total_seconds - (seconds3 + seconds4);
                                        var leavehrs = moment.duration(leavehr, "seconds").format("hh:mm:ss");
                                        console.log(leavehrs);
                                        const addEmployeeleave = Employeeleave.build({
                                            start_date: req.body.startdate,
                                            end_date: req.body.enddate,
                                            cmp_id: cmp_id,
                                            user_profile_id: req.body.emp_id,
                                            start_available_hrs: startavailablehour,
                                            end_available_hrs: endavlhravailablehour,
                                            leave_hrs: leavehrs,
                                            delete_status: false,
                                            request_status: "Accepted",
                                            is_admin_viewed: true,
                                            is_user_viewed: false
                                        })
                                        addEmployeeleave.save().then(function (newcategory) {
                                            callback();
                                        })
                                    }
                                });
                            } else {
                                callback();
                            }
                        }
                    ],
                        function (err) {
                            if (!isErr) {
                                io.sockets.emit("Leaveaddeduser", {
                                    //user_id : req.params.id
                                });
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Leave added successfully!", user_id)
                                })
                                res.json({ success: true, msg: "Leave added Successfully" });
                            } else {
                                res.json({ success: false, msg: errMsg });
                            }
                        });
                } else {
                    res.json({ success: false, msg: errMsg });
                }
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------    
    // ---------------------------------Start-------------------------------------------
    // Function      : updateempleave
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 15-01-2018
    // Last Modified : 
    // Desc          : updateempleave
    router.post('/updateempleave', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var isErr = false;
            errMsg = '';
            var moment = require('moment');
            var time = moment();
            var time_format = time.format('YYYY-MM-DD');
            console.log(time_format);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (!isErr && req.body.start_date == '' || req.body.start_date == null) {
                errMsg = "* Failed, Please Select Start Date!";
                isErr = true;
            }
            if (!isErr && time_format >= req.body.start_date) {
                errMsg = "* Failed, Wrong date selection!";
                isErr = true;
            }
            if (!isErr && req.body.end_date == '' || req.body.end_date == null) {
                errMsg = "* Failed, Please Select End Date!";
                isErr = true;
            }
            if (!isErr && time_format >= req.body.end_date) {
                errMsg = "* Failed, Wrong date selection!";
                isErr = true;
            }
            if (!isErr && req.body.end_date < req.body.start_date) {
                errMsg = "* Failed, Please Select  date Correctly!";
                isErr = true;
            }
            if (!isErr && req.body.startavlhr == '' || req.body.startavlhr == null) {
                errMsg = "* Failed, Please select start available hour!";
                isErr = true;
            }
            if (!isErr && req.body.endavlhr == '' || req.body.endavlhr == null) {
                errMsg = "* Failed, Please select end available hour!";
                isErr = true;
            }
            if (!isErr && req.body.user_profile_id == '' || req.body.user_profile_id == null) {
                errMsg = "* Failed, Please select Employee!";
                isErr = true;
            }
            const startDate = new Date(req.body.start_date);
            const endDate = new Date(req.body.end_date);
            var total_seconds = 0;
            async.eachOfSeries(datesBetween(startDate, endDate), (daterng, key, callback) => {
                // console.log(daterng);

                public_holiday.findOne({

                    where: { date: daterng, cmp_id: cmp_id },

                }).then(holiday => {
                    if (holiday) {
                        // console.log(daterng+"holiday")
                        callback();
                    } else {
                        // console.log(daterng+"not holiday")   
                        var d = new Date(daterng);
                        var date = d.getDate(daterng);
                        var day = d.getDay(daterng);//start 1

                        var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
                        var weekno = weekOfMonth + 1;
                        //console.log(day);
                        // console.log(weekno);
                        //  console.log( parseInt(weekOfMonth));          

                        cmp_off_day.findOne({

                            required: true,
                            where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                            include: [{
                                model: cmp_work_time,
                                required: true,

                            }]

                        }).then(work_time => {
                            if (work_time) {

                                // parse time using 24-hour clock and use UTC to prevent DST issues
                                var start = moment.utc('"' + work_time.tbl_cmp_work_time.start_time + '"', "HH:mm:ss");
                                var end = moment.utc('"' + work_time.tbl_cmp_work_time.end_time + '"', "HH:mm:ss");

                                // account for crossing over to midnight the next day
                                if (end.isBefore(start)) end.add(1, 'day');

                                // calculate the duration
                                var d = moment.duration(end.diff(start));

                                // subtract the lunch break
                                // d.subtract(30, 'minutes');

                                // format a string result
                                var s = moment.utc(+d).format('HH:mm:ss');

                                // console.log("s" + s);
                                var a = s.split(':'); // split it at the colons

                                // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

                                total_seconds = total_seconds + seconds;

                                callback();

                            } else {
                                cmp_work_time.findOne({

                                    required: true,
                                    where: { [Op.and]: [{ is_default: true, cmp_id: cmp_id }] },

                                }).then(work_time1 => {

                                    // parse time using 24-hour clock and use UTC to prevent DST issues
                                    var start = moment.utc('"' + work_time1.start_time + '"', "HH:mm:ss");
                                    var end = moment.utc('"' + work_time1.end_time + '"', "HH:mm:ss");

                                    // account for crossing over to midnight the next day
                                    if (end.isBefore(start)) end.add(1, 'day');

                                    // calculate the duration
                                    var d1 = moment.duration(end.diff(start));

                                    // subtract the lunch break
                                    // d.subtract(30, 'minutes');

                                    // format a string result
                                    var s1 = moment.utc(+d1).format('HH:mm:ss');

                                    // console.log("e" + s1);

                                    var a1 = s1.split(':'); // split it at the colons

                                    // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                    var seconds1 = (+a1[0]) * 60 * 60 + (+a1[1]) * 60 + (+a1[2]);


                                    total_seconds = total_seconds + seconds1;

                                    callback();

                                });

                            }

                        });
                    }

                });


            }, function (err) {
                console.log("tot" + total_seconds);
                // });
                if (!isErr) {
                    async.series([
                        function (callback) {
                            public_holiday.findAll({
                                attributes: ['title', 'date'],
                                required: true,
                                where: { cmp_id: cmp_id },
                            }).then(holiday => {
                                // console.log(holiday.title); 
                                holiday.forEach((element) => {
                                    var startdate = dateFormat(req.body.start_date, "isoDate");
                                    var enddate = dateFormat(req.body.end_date, "isoDate");
                                    //  console.log("jk"+startdate);
                                    //  console.log(element.date);  
                                    if (!isErr && startdate == element.date && enddate == element.date) {
                                        errMsg = "*" + element.date + "" + element.title + "" + "Holiday! ";
                                        isErr = true;
                                    }
                                }); callback();
                            });
                        }, function (callback) {
                            var d = new Date(req.body.start_date);
                            var date = d.getDate(req.body.start_date);
                            var day = d.getDay(req.body.start_date);//start 1
                            var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
                            var weekno = weekOfMonth + 1;
                            //console.log(day);
                            // console.log(weekno);
                            //  console.log( parseInt(weekOfMonth));          
                            cmp_off_day.findOne({
                                required: true,
                                where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                include: [{
                                    model: cmp_work_time,
                                    required: true,
                                }]
                            }).then(work_time => {
                                if (work_time) {
                                    // console.log(work_time.tbl_cmp_work_time.start_time)
                                    // console.log(work_time.tbl_cmp_work_time.end_time)
                                    // parse time using 24-hour clock and use UTC to prevent DST issues
                                    var start = moment.utc('"' + work_time.tbl_cmp_work_time.start_time + '"', "HH:mm:ss");
                                    var end = moment.utc('"' + work_time.tbl_cmp_work_time.end_time + '"', "HH:mm:ss");
                                    // account for crossing over to midnight the next day
                                    if (end.isBefore(start)) end.add(1, 'day');
                                    // calculate the duration
                                    var d = moment.duration(end.diff(start));
                                    // subtract the lunch break
                                    // d.subtract(30, 'minutes');
                                    // format a string result
                                    var s = moment.utc(+d).format('H');
                                    console.log("s" + s);
                                    console.log(req.body.startavlhr.hour);
                                    //  res.json(work_time);
                                    if (!isErr && (parseFloat(s) < parseInt(req.body.startavlhr.hour))) {
                                        errMsg = "* Failed,working hour exceed available hour !";
                                        isErr = true;
                                    }
                                    callback();
                                    //else{  }
                                } else {
                                    cmp_work_time.findOne({
                                        required: true,
                                        where: { [Op.and]: [{ is_default: true, cmp_id: cmp_id }] },
                                    }).then(work_time1 => {
                                        //  console.log(work_time1.start_time)
                                        //  console.log(work_time1.end_time)
                                        // parse time using 24-hour clock and use UTC to prevent DST issues
                                        var start = moment.utc('"' + work_time1.start_time + '"', "HH:mm:ss");
                                        var end = moment.utc('"' + work_time1.end_time + '"', "HH:mm:ss");
                                        // account for crossing over to midnight the next day
                                        if (end.isBefore(start)) end.add(1, 'day');
                                        // calculate the duration
                                        var d1 = moment.duration(end.diff(start));
                                        // subtract the lunch break
                                        // d.subtract(30, 'minutes');
                                        // format a string result
                                        var s1 = moment.utc(+d1).format('H');
                                        console.log("e" + s1);
                                        console.log(req.body.endavlhr.hour);
                                        //  res.json(work_time);
                                        if (!isErr && (parseFloat(s1) < parseInt(req.body.endavlhr.hour))) {
                                            errMsg = "* Failed,working hour exceed available hour !";
                                            isErr = true;
                                        }
                                        callback();
                                        //else{  }
                                    });
                                }
                            });
                        }, function (callback) {
                            if (!isErr) {
                                Employeeleave.findOne({
                                    required: true,
                                    // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
                                    where: {
                                        [Op.and]: [{ cmp_id: cmp_id, user_profile_id: req.body.user_profile_id, delete_status: false }],
                                        [Op.or]: [{ start_date: req.body.start_date, end_date: req.body.end_date }]
                                    }
                                }).then(leave => {
                                    // console.log(user);
                                    //return res.json(user);
                                    // if (!isErr && (leave.length > 0)) {
                                    if (!isErr && leave && (leave.id != req.body.id)) {
                                        errMsg = " Already Exists";
                                        isErr = true;
                                        res.json({ success: false, msg: errMsg });
                                    } else {
                                        var hh = parseInt(req.body.startavlhr.hour);
                                        var mm = parseInt(req.body.startavlhr.minute);
                                        var ss = parseInt(req.body.startavlhr.second);
                                        if (hh < 10) { hh = "0" + hh; }
                                        if (mm < 10) { mm = "0" + mm; }
                                        if (ss < 10) { ss = "0" + ss; }
                                        // This formats your string to HH:MM:SS
                                        var startavailablehour = hh + ":" + mm + ":" + ss;
                                        console.log("q" + startavailablehour);
                                        var hh1 = parseInt(req.body.endavlhr.hour);
                                        var mm1 = parseInt(req.body.endavlhr.minute);
                                        var ss1 = parseInt(req.body.endavlhr.second);
                                        if (hh1 < 10) { hh = "0" + hh1; }
                                        if (mm1 < 10) { mm = "0" + mm1; }
                                        if (ss1 < 10) { ss = "0" + ss1; }
                                        // This formats your string to HH:MM:SS
                                        var endavlhravailablehour = hh + ":" + mm + ":" + ss;
                                        console.log("d" + endavlhravailablehour);
                                        var a2 = startavailablehour.split(':'); // split it at the colons

                                        // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                        var seconds3 = (+a2[0]) * 60 * 60 + (+a2[1]) * 60 + (+a2[2]);
                                        var a3 = endavlhravailablehour.split(':'); // split it at the colons

                                        // minutes are worth 60 seconds. Hours are worth 60 minutes.
                                        var seconds4 = (+a3[0]) * 60 * 60 + (+a3[1]) * 60 + (+a3[2]);
                                        var leavehr = total_seconds - (seconds3 + seconds4);
                                        var leavehrs = moment.duration(leavehr, "seconds").format("hh:mm:ss");
                                        //    console.log("1"+seconds3);
                                        //    console.log("1"+seconds3);
                                        //    console.log("@"+seconds4);
                                        console.log(leavehrs);
                                        Employeeleave.update({
                                            start_date: req.body.start_date,
                                            end_date: req.body.end_date,
                                            cmp_id: cmp_id,
                                            user_profile_id: req.body.user_profile_id,
                                            start_available_hrs: startavailablehour,
                                            end_available_hrs: endavlhravailablehour,
                                            leave_hrs: leavehrs,
                                            delete_status: false,
                                            request_status: "Accepted",
                                            is_admin_viewed: true,
                                            is_user_viewed: false
                                        }, {
                                                where: {
                                                    id: req.body.id
                                                }
                                            }).then(updateempleave => {
                                                callback();
                                            })
                                    }
                                });
                            } else {
                                callback();
                            }
                        }
                    ],
                        function (err) {
                            if (!isErr) {
                                io.sockets.emit("Leaveaddeduser", {
                                    //user_id : req.params.id
                                });
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Leave updated!", user_id)
                                })
                                res.json({ success: true, msg: "Leave updated Successfully" });
                            } else {
                                res.json({ success: false, msg: errMsg });
                            }
                        });
                } else {
                    res.json({ success: false, msg: errMsg });
                }
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : datefilterforlog
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified : 
    // Desc          :date filter for log
    router.post('/datefilterforlog', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (req.body.user_id == "all") {
                Log.findAll({
                    order: [['id', 'DESC']],
                    required: true,
                    where: {
                        createdAt: {
                            $between: [req.body.startDate, req.body.endDate]
                        }
                    },
                    include: [{
                        model: User,
                        required: true,
                    }]
                }).then(userlog => {
                    //console.log(userlog);
                    res.json(userlog);
                });
            } else {
                Log.findAll({
                    order: [['id', 'DESC']],
                    required: true,
                    where: {
                        createdAt: {
                            $between: [req.body.startDate, req.body.endDate]
                        }, user_profile_id: req.body.user_id
                    },
                    include: [{
                        model: User,
                        required: true,
                    }]
                }).then(userlog => {
                    // console.log(userlog);
                    res.json(userlog);
                });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : allemppendingleavesnotifi 
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : all employee pending leave notification
    router.get('/allemppendingleavesnotifi', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id, delete_status: false, request_status: 'Pending', is_admin_viewed: false },
                include:
                {
                    model: User,
                    attributes: ['f_name'],
                    required: true,
                    include: {
                        // "required":true,
                        model: Login,
                        attributes: [],
                        required: true,
                        where: { [Op.and]: [{ block_status: false, delete_status: false, is_verified: true }] }
                    }
                }

            }).then(emppendingleave => {
                return res.json(emppendingleave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : leavenotifclose
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : leave notif close(status change)
    router.get('/leavenotifclose/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.update({

                is_admin_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data1 => {
                    io.sockets.emit("userstatuschange", {
                    });
                    if (data1) {
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("User status changed!", user_id)
                        })
                        res.json({ success: true, msg: "user status change Successfully" });
                    } else {
                        res.json({ success: false, msg: " user status change Failed" });
                    }

                })
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : allempleaves pending
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 
    // Desc          : all employee pending leave
    router.get('/allemppendingleaves', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.findAll({
                order: [['id', 'DESC']],
                required: true,
                where: { cmp_id: cmp_id, delete_status: false },
                include: [
                    {
                        model: User,
                        attributes: ['f_name'],
                        required: true,
                        include: [{
                            // "required":true,
                            model: Login,
                            attributes: [],
                            required: true,
                            where: { [Op.and]: [{ block_status: false, delete_status: false, is_verified: true }] }
                        }]
                    }
                ]
            }).then(emppendingleave => {
                return res.json(emppendingleave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------     
    // ---------------------------------Start-------------------------------------------
    // Function      : userleave
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 03-04-2018
    // Desc          : userleave
    router.get('/userleave/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Employeeleave.findOne({
                required: true,
                where: { id: req.params.id },
                include: {
                    model: User,

                    required: true,
                    include: [
                        {
                            model: Login,
                            required: true,
                        },

                    ]
                }

            }).then(emppendingleave => {
                var login_id = emppendingleave.tbl_user_profile.login_id;
                User.findOne({
                    where: {
                        login_id: login_id
                    },
                    include:
                    {
                        model: Login,
                    },
                }).then(userProfile => {
                    var userid = userProfile.id;
                    Project.findAll({
                        include: [
                            {
                                model: Project_modules,
                                // order: [['id', 'DESC']],
                                required: true,
                                include:
                                {
                                    model: Project_task,
                                    required: true,

                                    where: { assigned_to_id: userid },

                                }
                            },

                        ],
                        order: [
                            [Project_modules, 'id', 'ASC'],

                        ]


                    }).then(myTasks => {
                        data = { 'leave': emppendingleave, 'mytask': myTasks }
                        return res.json(data);

                    });
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : addrejectleave
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : addrejectleave
    router.post('/addrejectleave', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var isErr = false;
            errMsg = '';

            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (!isErr && req.body.reject_reason == '' || req.body.reject_reason == null) {
                errMsg = "* Failed, Please Enter Reject  Reason!";
                isErr = true;
            }
            if (!isErr) {

                Employeeleave.update({
                    reject_reason: req.body.reject_reason,
                    request_status: "Rejected"
                }, {
                        where: {
                            id: req.body.id
                        }
                    }).then(data1 => {
                        io.sockets.emit("Rejectedleave", {
                            //user_id : req.params.id
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Leave Rejected!", user_id)
                        })
                        res.json({ success: true, msg: "Leave Reject Successfully" });
                    })
            }

            else {
                res.json({ success: false, msg: errMsg });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : add accept leave 
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : add accept leave
    router.post('/addacceptleave', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var isErr = false;
            errMsg = '';
            Employeeleave.update({

                request_status: "Accepted"
            }, {
                    where: {
                        id: req.body.id
                    }
                }).then(data1 => {
                    if (data1) {
                        io.sockets.emit("Acceptedleave", {
                            //user_id : req.params.id
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Leave Accepted!", user_id)
                        })
                        res.json({ success: true, msg: "Leave Accept Successfully" });
                    } else {
                        res.json({ success: false, msg: "Failed" });
                    }

                })
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : alltimeextension
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-04-2018
    // Last Modified : 
    // Desc          : all time extension
    router.get('/alltimeextension', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Time_extension_request.findAll({
                order: [['id', 'DESC']],
                required: true,
                // where: { req_status: 'Pending' },
                include: [
                    {
                        model: Project_task,
                        attributes: ['task_name'],
                        required: true,
                        include: [
                            {
                                model: User,
                                required: true,
                                attributes: ['f_name'],
                                include:
                                {
                                    model: Login,
                                    attributes: ['profile_image'],
                                    required: true,
                                    where: { [Op.and]: [{ block_status: false, delete_status: false }] }
                                },

                            },
                            {
                                model: Project_modules,
                                required: true,
                                include:
                                {
                                    model: Project,
                                    attributes: ['id', 'project_name'],
                                    required: true,
                                    where: { cmp_id: cmp_id }
                                },
                            }
                        ]
                    }
                ]
            }).then(emppendingleave => {
                return res.json(emppendingleave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : timerequest
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 04-04-2018
    // Last Modified :
    // Desc          : time request details(single project)

    router.post('/timerequest', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            var projid = parseInt(req.body.projid);
            var reqid = parseInt(req.body.reqid);
            // var projid=36;
            // var reqid =6;
            // var cmp_id = 1;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Time_extension_request.findOne({

                required: true,
                where: { id: reqid },

            }).then(reqdetails => {

                Project.findOne({

                    required: true,
                    where: { [Op.and]: [{ id: projid, cmp_id: cmp_id }] },

                }).then(project => {

                    Project_modules.findAll({

                        required: true,
                        where: { project_id: projid },
                        include: {
                            model: Project_task,
                            order: [['id', 'planned_start_date_time']],
                            required: true,
                            include: {
                                model: User,
                                required: true,
                            }
                        }

                    }).then(taskassign => {
                        var names = [];
                        taskassign.forEach((elm, i) => {
                            elm.tbl_project_tasks.forEach((elm1, i) => {
                                names.push(elm1.tbl_user_profile.f_name);
                                // console.log(elm1.tbl_user_profile.f_name)
                            });
                        });
                        console.log(names);
                        uniqueArray = names.filter(function (elem, pos) {
                            return names.indexOf(elem) == pos;
                        })

                        Project_modules.findAll({
                            order: [['id', 'ASC']],
                            where: { project_id: projid },
                            include: [
                                {
                                    model: Project_task,
                                    required: true,
                                    include: [
                                        {
                                            model: User,
                                            required: true,

                                        }]
                                },

                            ],

                        }).then(myTasks => {

                            data = { 'reqdetails': reqdetails, 'project': project, 'teammembers': uniqueArray, 'myTasks': myTasks }
                            return res.json(data);

                        });

                    });

                });

            });
        } else {
            return res.status(401).send('Invalid User');
        }

    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : rejecttimeextreq
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : rejecttimeextreq
    router.put('/rejecttimeextreq/:id', function (req, res) {
        // console.log("id del" + req.params.id);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Time_extension_request.update({
                req_status: "Rejected"
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(user => {
                    if (!user) {
                        return res.json({ success: false, msg: 'Faild to Rejected ' });
                    } else {
                        io.sockets.emit("Rejectedtimeext", {
                            //user_id : req.params.id
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Rejected Time extention request", user_id)
                        })
                        return res.json({ success: true, msg: 'Rejected Successfully' });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End----------------------------------------------- 
    // ---------------------------------Start-------------------------------------------
    // Function      : sendtoadmin
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : send to admin(time extension request)
    router.put('/sendtoadmin/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Time_extension_request.update({
                req_status: "Approval"
            }).then(user => {
                Time_extension_request_notifications.update({
                    is_pm_viewed: false,
                    is_admin_viewed: false,
                    is_user_viewed: false,
                }, {
                        where: {
                            request_id: req.params.id
                        }
                    }).then(user1 => {
                        if (!user1) {
                            return res.json({ success: false, msg: 'Faild to send to admin' });
                        } else {
                            io.sockets.emit("sendtoadmin", {
                                //user_id : req.params.id
                            });
                            // console.log(newPlan);
                            var id = decoded.id;
                            // var role = req.body.id
                            var user_id;
                            Users.find({
                                where: {
                                    login_id: id
                                }
                            }).then(resUser => {
                                user_id = resUser.id;
                                saveLog("Time extention request sent to admin!", user_id)
                            })
                            return res.json({ success: true, msg: 'send to admin Successfully' });
                        }
                    });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End----------------------------------------------- 
    // ---------------------------------Start-------------------------------------------
    // Function      : sendtoadminnotif
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-04-2018
    // Last Modified : 
    // Desc          : send to admin notif(time extension )
    router.get('/sendtoadminnotif', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            role_id = decoded.role_id;
            // var cmp_id = 1;
            // var role_id = 1
            if (role_id == 1) {
                Time_extension_request_notifications.findAll({
                    required: true,
                    where: {
                        is_pm_viewed: false,
                        is_admin_viewed: false,
                        is_user_viewed: false
                    },
                    include: [{
                        model: Time_extension_request, as: 'xt',
                        required: true,
                        where: {
                            req_status: 'Approval'
                        },
                        include: [{
                            model: Project_task,
                            required: true,
                            include: [{
                                model: Project_modules,
                                required: true,
                                include: [{
                                    model: Project,
                                    required: true,
                                    where: {
                                        cmp_id: cmp_id
                                    }

                                }]
                            }, {
                                model: User,
                                required: true,
                                include: [{
                                    model: Login,
                                    required: true,
                                    where: { [Op.and]: [{ block_status: false, delete_status: false }] }
                                }]
                            }]
                        }]
                    }]
                }).then(resReq => {
                    return res.json(resReq);

                }).catch(err => {
                    res.json({
                        //   status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }
            else {
                return res.json("no data");
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : leavenotifclose
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 29-03-2018
    // Last Modified : 
    // Desc          : leave notif close(status change)
    router.get('/admintimeextnotifclose/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Time_extension_request_notifications.update({

                is_admin_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data1 => {
                    io.sockets.emit("adminviewstatuschange", {
                    });
                    if (data1) {

                        res.json({ success: true, msg: "admin status change Successfully" });
                    } else {
                        res.json({ success: false, msg: " admin status change Faild" });
                    }

                })
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------   
    // ---------------------------------Start-------------------------------------------
    // Function      : userleavedata
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 07-04-2018
    // Last Modified : 
    // Desc          : userleavedata
    router.get('/userleavedata/:id', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Employeeleave.findAll({
                where: { user_profile_id: req.params.id },
            }).then(userleave => {
                // console.log(projects);
                return res.json(userleave);
                // res.json(user)
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End------------------------------------------- 

    // ---------------------------------Start-------------------------------------------
    // Function      : get plan by id
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, Rinsha
    // Desc          : getplan
    router.get('/planById/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Plans.findById(req.params.id).then(plans => {
                res.json(plans);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (req.headers && req.headers.authorization) {
                var authorization = req.headers.authorization.substring(4), decoded;
                decoded = jwt.verify(authorization, Config.secret);
                cmp_id = decoded.cmp_id;
                if (req.body.addr == '' || req.body.cardnum == '' || req.body.cardname == '' || req.body.cvv == '' || req.body.fname == '' || req.body.lname == '' || req.body.no == '' || req.body.no_months == '') {
                    res.json({ success: false, msg: "All fields are required" });
                }
                else if (validateNo(req.body.no) == false) {
                    res.json({ success: false, msg: "Enter a valid phone number" });
                }
                else {
                    Company.update({
                        no_months: req.body.no_months,
                        plan_id: req.params.id,
                        upgraded_date_time: Date.now(),
                    }, {
                            where: {
                                id: cmp_id
                            }
                        }).then(data => {
                            if (data == 1) {
                                Login.update({
                                    cmp_status: "Subscribed"
                                }, {
                                        where: {
                                            id: decoded.id
                                        }
                                    }).then(data => {
                                        if (data == 1) {
                                            // console.log(newPlan);
                                            var id = decoded.id;
                                            // var role = req.body.id
                                            var user_id;
                                            Users.find({
                                                where: {
                                                    login_id: id
                                                }
                                            }).then(resUser => {
                                                user_id = resUser.id;
                                                saveLog("Subscription upgraded!", user_id)
                                            })
                                            res.json({ success: true, msg: "Success" });
                                        }
                                        else {
                                            res.json({ success: false, msg: "Failed" });
                                        }
                                    });
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
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get all projects
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getAllProject
    router.get('/getAllProject', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Project.findAll({
                where: {
                    cmp_id: cmp_id
                }
            }).then(project => {
                res.json(project);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Users.findAll({
                // order: [['id', 'DESC']],
                include: [{
                    model: Login,
                    where: {
                        role_id: 3,
                        cmp_id: cmp_id,
                        block_status: false,
                        delete_status: false,
                    }
                }]
            }).then(pm => {
                res.json(pm);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Category.findAll({
                where: {
                    cmp_id: cmp_id,
                    delete_status: false
                }
            }).then(category => {
                res.json(category);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
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
        isError = false;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            cmp_id = decoded.cmp_id;
            if (req.body.project_name == '' || req.body.category_id == '' || req.body.project_type == '' || req.body.priority == '' || req.body.description == '') {
                res.json({ success: false, msg: "All fields are required" });
            }
            else {
                assignee_id = decoded.id;
                if (req.body.pm_id == assignee_id) {
                    is_pm_viewed = true;
                }
                else {
                    is_pm_viewed = false;
                }
                project_name = capitalizeFirstLetter(req.body.project_name);
                Company.findById(cmp_id).then(cmp => {
                    Project.findAll({
                        where: {
                            cmp_id: cmp_id
                        }
                    }).then(projects => {
                        projectLength = projects.length + 1;
                        if (projectLength < 10) {
                            projectLength = '00' + projectLength;
                        }
                        if (projectLength < 100 && projectLength > 9) {
                            projectLength = '0' + projectLength;
                        }
                        Plans.findById(cmp.plan_id).then(plan => {
                            no_projects = plan.no_projects;
                            if (no_projects != "Unlimited") {
                                if (no_projects < projectLength) {
                                    isError = true;
                                    res.json({ success: false, msg: "No.of projects reaches to maximum, please upgrade your plan!" });
                                }
                                else {
                                    isError = false;
                                }
                            }
                            else {
                                isError = false;
                            }
                            if (isError == false) {
                                cmp_code = cmp.cmp_code;
                                var currentTime = new Date()
                                var month = currentTime.getMonth() + 1;
                                var day = currentTime.getDate();
                                var year = currentTime.getFullYear();
                                cDate = month + "/" + day + "/" + year;
                                const project = Project.build({
                                    project_name: project_name,
                                    category_id: req.body.category_id,
                                    project_code: cmp_code + "PR/" + projectLength + "/" + cDate,
                                    status: 'Drafted',
                                    project_type: req.body.project_type,
                                    priority: req.body.priority,
                                    description: req.body.description,
                                    pm_id: req.body.pm_id,
                                    assignee_id: decoded.id,
                                    cmp_id: cmp_id,
                                    is_pm_viewed: is_pm_viewed
                                })
                                project.save().then(function (newProject) {
                                    if (req.body.pm_id != decoded.id) {
                                        io.sockets.emit("addProject", {
                                            pm_id: req.body.pm_id
                                        });
                                    }
                                    // console.log(newPlan);
                                    var id = decoded.id;
                                    // var role = req.body.id
                                    var user_id;
                                    Users.find({
                                        where: {
                                            login_id: id
                                        }
                                    }).then(resUser => {
                                        user_id = resUser.id;
                                        saveLog("Project " + project_name + " created!", user_id)
                                    })
                                    res.json({ success: true, msg: "Project Created Successfully, Your Project code is " + project.project_code, id: newProject.id });
                                })
                            }
                        });
                    });
                });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 06-3-2018
    // Last Modified : 06-3-2018, Jooshifa
    // Desc          : company and user direct login with username and password with google captcha
    router.post('/authenticate', (req, res) => {
        array = [];
        comparePassword = function (candPass, hash, callback) {
            bcrypt.compare(candPass, hash, (err, isMatch) => {
                if (err) throw err;
                callback(null, isMatch);
            })
        }
        const email = req.body.email;
        const password = req.body.password;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        //    -------------------------------------- to check user not found ------------------------------------------
        Login.findOne({
            where: {
                email: req.body.email
            }
        }).then(login => {
            // res.json(login);
            // // console.log(login);
            if (login == null || login == [] || login == '') {
                const loginAttempt = Login_attempt.build({
                    ip: ip.address(),
                    date_time: new Date(),
                    is_success: false
                })
                loginAttempt.save().then(function (newloginAttempt) {
                    Login_attempt.findOne({
                        order: [['id', 'DESC']],
                        where: {
                            ip: ip.address(),
                            is_success: true
                        }
                    }).then(loginAttempt => {
                        if (loginAttempt == '' || loginAttempt == null || loginAttempt == []) {
                            Login_attempt.findAll({
                                where: {
                                    ip: ip.address(),
                                    is_success: false,
                                }
                            }).then(loginAttemptFalse => {
                                if (loginAttemptFalse.id != null || loginAttemptFalse.id == '' || loginAttemptFalse.id != []) {
                                    loginAttemptFalse.forEach(allFalseAttempt => {
                                        array.push({ id: allFalseAttempt.id });
                                    })
                                    // // console.log(array.length);
                                    if (array.length > 3) {
                                        return res.json({ caseno: 1, success: false, msg: 'User not found' });
                                        if (req.body.captcha == undefined || req.body.captcha == '' || req.body.captcha == null) {
                                            return res.json({ "success": false, "msg": "Please select captcha" });
                                        }
                                        const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                                        const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                                        request(verifyUrl, (err, response, body) => {
                                            body = JSON.parse(body);
                                            if (body.success !== undefined && !body.success) {
                                                return res.json({ "success": false, "msg": "Failed captcha verification" });
                                            }
                                            else if (body.success) {
                                                return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                                            }
                                        });
                                    }
                                    else {
                                        return res.json({ success: false, msg: 'User not found' });
                                    }
                                }
                            });
                        }
                        else if (loginAttempt != '' || loginAttempt != null || loginAttempt != []) {
                            Login_attempt.findAll({
                                where: {
                                    ip: ip.address(),
                                    is_success: false,
                                    id: {
                                        [Op.gt]: loginAttempt.id
                                    }
                                }
                            }).then(loginAttemptFalse => {
                                if (loginAttemptFalse.id != null || loginAttemptFalse.id == '' || loginAttemptFalse.id != []) {
                                    loginAttemptFalse.forEach(allFalseAttempt => {
                                        array.push({ id: allFalseAttempt.id });
                                    })
                                    if (array.length > 3) {
                                        return res.json({ caseno: 1, success: false, msg: 'User not found' });
                                        if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
                                            return res.json({ "success": false, "msg": "Please select captcha" });
                                        }
                                        // Secret Key
                                        const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                                        // Verify URL
                                        const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                                        // Make Request To VerifyURL
                                        request(verifyUrl, (err, response, body) => {
                                            body = JSON.parse(body);
                                            // If Not Successful
                                            if (body.success !== undefined && !body.success) {
                                                return res.json({ "success": false, "msg": "Failed captcha verification" });
                                            }
                                            //If Successful
                                            else if (body.success) {
                                                return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                                            }
                                        });
                                    }
                                    else {
                                        return res.json({ success: false, msg: 'User not found' });
                                    }
                                }
                            });
                        } else {
                        }
                    });
                });
            }
            else if (login != null || login != [] || login != '') {
                // // console.log("else if");
                comparePassword(password, login.password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    }
                    //    -------------------------------------- if  match ------------------------------------------
                    if (isMatch) {
                        if (login.block_status == true) {
                            return res.json({ success: false, msg: 'Account blocked' });
                            // // console.log("Account blocked");
                        }
                        else if (login.delete_status == true) {
                            return res.json({ success: false, msg: 'Account deleted' });
                            // // console.log("Account deleted");
                        }
                        else if (login.role_id == 1 || login.role_id == 3) {

                            if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                                return res.json({ success: false, msg: 'Company not verified' });
                            }
                            // if (login.is_profile_completed == false) {
                            //     Company.findOne({
                            //         where: {
                            //             login_id: login.id
                            //         }
                            //     }).then(company2 => {
                            //         return res.json({ success: false, msg: 'Profile not completed', profile_complete: false, cmp_id: company2.id });
                            //     });
                            // }
                            else {
                                // // console.log("else condition");
                                const token = jwt.sign(login.toJSON(), Config.secret, { expiresIn: 60400 }); // sec 1 week
                                User_profile.update({
                                    login_id: login.id
                                }, {
                                        where: {
                                            email: login.email
                                        }
                                    }).then(data1 => {
                                        const loginAttempt = Login_attempt.build({
                                            ip: ip.address(),
                                            date_time: new Date(),
                                            is_success: true
                                        })
                                        loginAttempt.save().then(function (newloginAttempt) {
                                            return res.json({
                                                success: true,
                                                msg: 'login succesfully',
                                                token: 'JWT ' + token,
                                                // cmp_id: company2.id,
                                                login: {
                                                    id: login.id,
                                                    role_id: login.role_id,
                                                    // status: login.cmp_status
                                                }
                                            });
                                        });
                                    });
                            }
                        }
                        else if (login.role_id == 4) {
                            const token = jwt.sign(login.toJSON(), Config.secret, { expiresIn: 60400 }); // sec 1 week
                            User_profile.update({
                                login_id: login.id
                            }, {
                                    where: {
                                        email: login.email
                                    }
                                }).then(data1 => {
                                    const loginAttempt = Login_attempt.build({
                                        ip: ip.address(),
                                        date_time: new Date(),
                                        is_success: true
                                    })
                                    loginAttempt.save().then(function (newloginAttempt) {
                                        return res.json({
                                            success: true,
                                            msg: 'login succesfully',
                                            token: 'JWT ' + token,
                                            // cmp_id: company2.id,
                                            login: {
                                                id: login.id,
                                                role_id: login.role_id,
                                                // status: login.cmp_status
                                            }
                                        });
                                    });
                                });
                        }

                        // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
                        // else if (login.block_status == false && login.delete_status == false && login.is_verified == true && login.is_profile_completed == true && login.cmp_status != "Not Verified" ){
                    }
                    //    -------------------------------------- not matches ------------------------------------------
                    else {
                        //    -------------------------------------- to save into login_attempt table ------------------------------------------
                        const loginAttempt = Login_attempt.build({
                            ip: ip.address(),
                            date_time: new Date(),
                            is_success: false
                        })
                        loginAttempt.save().then(function (newloginAttempt) {
                            Login_attempt.findOne({
                                order: [['id', 'DESC']],
                                where: {
                                    ip: ip.address(),
                                    is_success: true
                                }
                            }).then(loginAttempt => {
                                if (loginAttempt == '' || loginAttempt == null || loginAttempt == []) {
                                    Login_attempt.findAll({
                                        where: {
                                            ip: ip.address(),
                                            is_success: false,
                                        }
                                    }).then(loginAttemptFalse => {
                                        if (loginAttemptFalse.id != null || loginAttemptFalse.id == '' || loginAttemptFalse.id != []) {
                                            loginAttemptFalse.forEach(allFalseAttempt => {
                                                array.push({ id: allFalseAttempt.id });
                                            })
                                            // // console.log(array.length);
                                            if (array.length > 3) {
                                                return res.json({ caseno: 1, success: false, msg: 'Wrong Password' });
                                                if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
                                                    return res.json({ "success": false, "msg": "Please select captcha" });
                                                }
                                                const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                                                const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                                                request(verifyUrl, (err, response, body) => {
                                                    body = JSON.parse(body);
                                                    if (body.success !== undefined && !body.success) {
                                                        return res.json({ "success": false, "msg": "Failed captcha verification" });
                                                    }
                                                    else if (body.success) {
                                                        return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                                                    }
                                                });
                                            } else {
                                                return res.json({ success: false, msg: 'Wrong Password' });
                                            }
                                        }
                                        // else {
                                        //     return res.json({ success: false, msg: 'Wrong Password' });
                                        // }
                                    });
                                }
                                else if (loginAttempt != '' || loginAttempt != null || loginAttempt != []) {
                                    Login_attempt.findAll({
                                        where: {
                                            ip: ip.address(),
                                            is_success: false,
                                            id: {
                                                [Op.gt]: loginAttempt.id
                                            }
                                        }
                                    }).then(loginAttemptFalse => {
                                        if (loginAttemptFalse.id != null || loginAttemptFalse.id == '' || loginAttemptFalse.id != []) {
                                            loginAttemptFalse.forEach(allFalseAttempt => {
                                                array.push({ id: allFalseAttempt.id });
                                            })
                                            if (array.length > 3) {
                                                return res.json({ caseno: 1, success: false, msg: 'Wrong Password' });
                                                if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
                                                    return res.json({ "success": false, "msg": "Please select captcha" });
                                                }
                                                // Secret Key
                                                const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                                                // Verify URL
                                                const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                                                // Make Request To VerifyURL
                                                request(verifyUrl, (err, response, body) => {
                                                    body = JSON.parse(body);
                                                    // If Not Successful
                                                    if (body.success !== undefined && !body.success) {
                                                        return res.json({ "success": false, "msg": "Failed captcha verification" });
                                                    }
                                                    //If Successful
                                                    else if (body.success) {
                                                        return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                                                    }
                                                });
                                            }
                                            return res.json({ success: false, msg: 'Wrong Password' });
                                        }
                                    });
                                } else {
                                }
                            });
                        });
                    }
                });
            }
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
            // // console.log(decoded);
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
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
                            // // console.log(login2.is_verified);
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
    // Function      : Company verification
    // Params        : verification id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 
    router.post('/forgotPassword', function (req, res) {
        // // console.log(req.body);
        if (req.body.email == 'undefined' || req.body.email == '' || req.body.email == null || req.body.email == []) {
            return res.json({ success: false, msg: 'Email is required' });
        }
        Login.findOne({
            where: {
                email: req.body.email
            }
        }).then(login => {
            if (!login || login == 'undefined' || login == '' || login == null || login == []) {
                // // console.log("Email not found! Plase enter a valid email");
                return res.json({ success: false, msg: 'Email not found! Plase enter a valid email' });
            }
            else if (login.block_status == true) {
                // // console.log("Account blocked");
                return res.json({ success: false, msg: 'Account blocked' });
            }
            else if (login.delete_status == true) {
                // // console.log("Account deleted");
                return res.json({ success: false, msg: 'Account deleted' });
            }
            else if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                // // console.log("Company not verified'");
                return res.json({ success: false, msg: 'Company not verified' });
            }
            // else if (login.is_profile_completed == false) {
            //     // console.log("Profile not completed'");
            //     return res.json({ success: false, msg: 'Profile not completed' });
            // }
            else if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
                // // console.log("captcah not exist");
                return res.json({ "success": false, "msg": "Please select captcha" });
            }
            else {
                const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                request(verifyUrl, (err, response, body) => {
                    body = JSON.parse(body);
                    if (body.success !== undefined && !body.success) {
                        // // console.log("captchs not success");
                        return res.json({ "success": false, "msg": "Failed captcha verification" });
                    }
                    else if (body.success) {
                        // // console.log("captchs ");
                        var password = generator.generate({
                            length: 10,
                            numbers: true
                        });
                        // // console.log("assword created" );
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if (err) throw err;
                                Login.update({
                                    password: hash
                                }, {
                                        where: {
                                            email: req.body.email
                                        }
                                    }).then(data1 => {
                                        // // console.log(login);
                                        // // console/.log("passeord updarted");
                                        Company.findOne({
                                            where: {
                                                login_id: login.id
                                            }
                                        }).then(company => {
                                            // // console.log("routes is oke");
                                            // emailTemplate.sendResetPasswordMail(req.body.email, company.cmp_name, password);
                                            emailTemplate.sendResetPasswordMail(req.body.email, password);
                                            return res.json({ "success": true, "msg": "Reset password successfully.Please check your email" });
                                        });
                                    });
                                // // console.log(password + "    password");
                                //    // console.log(hash + "   bcrpted password");
                            })
                        })
                        // return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                    }
                });
                // // console.log("Email found");
            }
        });

    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get company details by id
    // Params        : id
    // Returns       : company details
    // Author        : Jooshifa
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Jooshifa
    // Desc          : 
    router.get('/getCompanyDetails/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Login.findOne({
                include: [{
                    model: Company, where: { id: req.params.id }
                }]
            }).then(data => {
                // console.log(data.is_profile_completed);
                res.json(data);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-designer-users
    // Params        : 
    // Returns       : designer details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 

    router.get('/get-designer-users', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            User_profile.findAll({
                // where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: Team_assoc,
                        where: { team_id: 2 }
                    },
                    {
                        model: Login,
                        where: { [Op.and]: [{ delete_status: false, block_status: false }] }
                    }
                ]
            }).then(DesignerUsers => {
                //console.log(projects);
                res.json(DesignerUsers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // }
    //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : get_industries
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018,
    // Desc          : get industry list

    router.get('/get_industries', function (req, res) {
        Industries.findAll().then(industries => {
            //// console.log(projects);
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
    router.get('/get_cmp_size', function (req, res) {
        CompanySize.findAll().then(companieSize => {
            //// console.log(projects);
            res.json(companieSize);
        });
    });
    //  ---------------------------------Start-------------------------------------------
    // Function      : register_company
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018,
    // Desc          : company registration

    router.post('/register_company', function (req, res) {
        try {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            req.body.forEach(element => {
                if (element.ans == '') {
                    res.json({ status: 0, message: "Please try again!" });
                    res.end();
                }
            });
            // // console.log(validateEmail(req.body[0].ans));
            if (!reg.test(req.body[0].ans.toLowerCase()) || !(/^\d+$/.test(req.body[4].ans))) {
                res.send({ status: 0, message: "Check email and phone number!" });
                res.end();

            }
            else {
                if (typeof req.body.id == 'undefined') {
                    Login.findAll(
                        { where: { email: req.body[0].ans } }

                    ).then(login => {
                        //// console.log(projects);
                        if (login.length == 0) {
                            var newPassword;
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(req.body[7].ans, salt, (err, hash) => {
                                    // // console.log(hash);
                                    if (err) throw err;
                                    newPassword = hash;
                                    let newLogin = Login.build({
                                        email: req.body[0].ans,
                                        fb_id: null,
                                        fb_token: null,
                                        is_verified: false,
                                        block_status: false,
                                        delete_status: false,
                                        profile_image: null,
                                        cmp_status: 'Not Verified',
                                        role_id: 1,
                                        is_profile_completed: true,
                                        cmp_id: null,
                                        google_id: null,
                                        google_token: null,
                                        password: hash
                                    })
                                    // // console.log(newLogin);
                                    newLogin.save().then(resLogin => {
                                        // console.log(resLogin.id)

                                        // if(resLogin.length>0){
                                        // res.json(resLogin)
                                        // // console.log("hh")
                                        Plan.find({
                                            where: { is_defualt: true }
                                        }).then(resPlan => {
                                            // console.log(req.body);
                                            let newCompany = Company.build({
                                                cmp_name: req.body[1].ans,
                                                cmp_code: req.body[2].ans,
                                                contact_no: req.body[4].ans,
                                                why_choosen: req.body[6].ans,
                                                login_id: resLogin.id,
                                                cmp_size_id: req.body[5].ans,
                                                industry_id: req.body[3].ans,
                                                plan_id: resPlan.id,
                                                no_months: 1,
                                                is_admin_viewed: false,
                                                verification_code: req.body[9].ans
                                            })

                                            // // console.log(newCompany);
                                            newCompany.save().then((resCmp) => {
                                                // console.log("resCmp");
                                                // console.log(resCmp);
                                                Login.update({ cmp_id: resCmp.id }, { where: { id: resLogin.id } }).then(resLog => {
                                                    emailTemplate.sendVerificationMail(req.body[0].ans, req.body[1].ans, req.body[9].ans);
                                                    WorkingTime.build({
                                                        title: "9:00 - 17:00",
                                                        cmp_id: resCmp.id,
                                                        start_time: "09:00:00",
                                                        end_time: "17:00:00",
                                                        is_default: true
                                                    }).save().then(resTiming => {
                                                        res.json({ status: 1, message: "Registered! Check your Email!" })

                                                    }).catch(err => {
                                                        console.log(err);
                                                    })
                                                })

                                            })
                                        }).catch(errorx => {
                                            // res.json({status: 0, message:"Failed!"});
                                            res.json(errorx);
                                        })
                                        // }
                                    }).catch(error => {
                                        // Ooops, do some error-handling
                                        res.json({ status: 0, message: "Some error occured!" })
                                    })
                                })
                            })

                        } else {
                            //email exist
                            res.json({ status: 0, message: "Already Registered!" });
                        }

                    });
                } else {
                    //update for jooshifa
                    let newCompany = Company.build({
                        cmp_name: req.body[1].ans,
                        cmp_code: req.body[2].ans,
                        contact_no: req.body[4].ans,
                        why_choosen: req.body[7].ans,
                        login_id: resLogin.id,
                        cmp_size_id: req.body[5].ans,
                        industry_id: req.body[3].ans,
                        plan_id: resPlan.id,
                        no_months: 1,
                        is_admin_viewed: false,
                        verification_code: req.body[9].ans
                    })

                    Company.update({
                        cmp_name: req.body[1].ans,
                        cmp_code: req.body[2].ans,
                        contact_no: req.body[4].ans,
                        why_choosen: req.body[7].ans,
                        login_id: resLogin.id,
                        cmp_size_id: req.body[5].ans,
                        industry_id: req.body[3].ans,
                        plan_id: resPlan.id,
                        no_months: 1,
                        is_admin_viewed: false
                    }, {
                            where: {
                                id: req.body[10].ans
                            }
                        }).then(data1 => {
                        })
                }

            }
        } catch (err) {
            res.json({ status: 0, message: "Already Registered!" });
        }

    });
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : register_company2
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, 
    // Desc          : company registration
    router.post('/register_company2', function (req, res) {
        //    // console.log(req.body[0].ans + "      company name");
        //    // console.log(req.body[1].ans+ "      company code");
        //    // console.log(req.body[2].ans + "      company industry");
        //    // console.log(req.body[3].ans + "      contact number");
        //    // console.log(req.body[4].ans + "      company size");
        //    // console.log(req.body[5].ans + "      why choosen");
        //    // console.log(req.body[6].ans + "      id");
        // res.json(req.body);
        Company.findOne({
            where: {
                id: req.body[6].ans
            }
        }).then(companyData => {
            // // console.log(companyData)
            Company.update({
                cmp_name: req.body[0].ans,
                cmp_code: req.body[1].ans,
                industry_id: req.body[2].ans,
                contact_no: req.body[3].ans,
                cmp_size_id: req.body[4].ans,
                why_choosen: req.body[5].ans,
                is_admin_viewed: false
            }, {
                    where: {
                        id: req.body[6].ans
                    }
                }).then(data1 => {
                    Login.update({
                        is_profile_completed: true,
                        cmp_id: req.body[6].ans,
                    }, {
                            where: {
                                id: companyData.login_id
                            }
                        }).then(data2 => {
                            return res.json({ "success": true, "msg": "Profile completed successfully" });
                        })
                })
        })
    });

    //  ---------------------------------End-------------------------------------------
    //   if (config.use_env_variable) {
    //     var sequelize = new Sequelize(process.env[config.use_env_variable]);
    //   } else {
    //     var sequelize = new Sequelize(config.database, config.username, config.password, config);
    //   }

    //   sequelize.query("select * from GetAllSt();").spread(
    //     function (actualres, settingName2) {
    //       // console.log(actualres);
    //       // console.log(settingName2);
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
                            // // console.log(login2.is_verified);
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Projects.findAll({
                where: {
                    status: {
                        [Op.ne]: 'Cancelled'
                    }
                },
                raw: true
            }).then(data => {
                console.log(data);
                return res.json(data);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            User_profile.findAll({
                // where: {
                //     status: {
                //         [Op.ne]: 'false'
                //     }
                // },
                include: [
                    { model: Projects_member_assoc, 
                        required: true,
                        where: {
                            project_id: req.params.id,
                        }
                    },
                    { model: Login, where: { [Op.and]: [{ block_status: false, delete_status: false }] }, required: true }

                ],
                raw: true
            }).then(data => {
                return res.json(data);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getTeams
    // Params        :
    // Returns       : developer details
    // Author        : MANU
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, 
    // Desc          
    router.get('/getTeams', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            var teamName;
            var team = [];
            Teams.findAll().then(teams => {
                // console.log(projects);
                teamName = teams.team_name;
                // teams.forEach(element => {
                async.eachOfSeries(teams, function (element, key, callback) {
                    TeamAssoc.findAndCountAll({
                        where: { team_id: element.id, cmp_id: cmp_id }
                    }).then(resTeam => {
                        team.push({ team_name: element.team_name, count: resTeam.count, team_id: element.id })
                        callback();
                    })
                }, () => {
                    res.json(team);

                })

                // });
            });

        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-developer-users
    // Params        :
    // Returns       : developer details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    router.get('/get-developer-users', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            developer = [];
            User_profile.findAll({
                // where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: Team_assoc,
                        where: { team_id: 1 }
                    },
                    {
                        model: Login,
                        where: { [Op.and]: [{ delete_status: false, block_status: false }] }
                    }
                ]
            }).then(DeveloperUsers => {
                res.json(DeveloperUsers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-designer-users
    // Params        : 
    // Returns       : designer details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    router.get('/get-designer-users', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            User_profile.findAll({
                // where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: Team_assoc,
                        where: { team_id: 2 }
                    },
                    {
                        model: Login,
                        where: { [Op.and]: [{ delete_status: false, block_status: false }] }
                    }
                ]
            }).then(DesignerUsers => {
                //console.log(projects);
                res.json(DesignerUsers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // }
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getMembers
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, 
    // Desc          : get list of teams and stregth
    router.get('/getMembers/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var teamName;
            var members = [];
            Users.findAll({
                where: {
                    cmp_id: cmp_id,
                    role_id: 4
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
                    users[key].onTeam = false;
                    // console.log(element)
                    TeamAssoc.findAll({
                        raw: true,
                        where: { user_profile_id: element.id, cmp_id: cmp_id, team_id: req.params.id }
                    }).then(resUser => {
                        // res.json(resUser);
                        // console.log(resUser)
                        if (resUser.length > 0) {
                            users[key].onTeam = true;
                            tmp3.push(element.id);
                            tmp5.push(element);
                        }
                        // console.log(element.id)
                        tmp[element.id] = users[key];
                        // members.push({f_name:resUser.f_name, l_name:resUser.l_name, id:resUser.id})
                        callback();
                    })
                }, () => {
                    TeamAssoc.find({
                        raw: true,
                        where: { cmp_id: cmp_id, team_id: req.params.id, is_head: true }
                    }).then(resHead => {
                        // res.json(resHead);
                        tmp4 = resHead
                        tmp2 = [];
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
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : assignMemeber5
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, 
    // Desc          : assign team members and head to a team
    router.post('/assignMemebers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var teamName;
            var team = [];
            // console.log(req.body)
            TeamAssoc.destroy({
                where: {
                    user_profile_id: { [Op.in]: req.body[0] },
                    team_id: req.body[2],
                    cmp_id: cmp_id
                }
            }).then(() => {
                members = req.body[0];
                var teamassoc;
                members.forEach(element => {
                    if (element == req.body[1]) {
                        teamassoc = TeamAssoc.build({
                            is_head: true,
                            cmp_id: cmp_id,
                            user_profile_id: element,
                            team_id: req.body[2]
                        })
                    } else {
                        teamassoc = TeamAssoc.build({
                            is_head: false,
                            cmp_id: cmp_id,
                            user_profile_id: element,
                            team_id: req.body[2]
                        })
                    }
                    teamassoc.save().then((resTeamAssoc) => {
                        // console.log(resTeamAssoc);
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Team members assigned!", user_id)
                        })
                        res.json({
                            status: 1,
                            Message: "Successfully assigned!"
                        })
                    }).catch(error => {
                        res.json({
                            status: 0,
                            Message: "Some error occured!"
                        })
                    })
                });
            }).catch(err => {
                res.json({
                    status: 0,
                    Message: "Some error occured!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End---------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-qc-users
    // Params        : 
    // Returns       : QC details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 
    router.get('/get-qc-users', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            User_profile.findAll({
                include: [
                    {
                        model: Team_assoc,
                        where: { team_id: 3 }
                    },
                    {
                        model: Login,
                        where: { [Op.and]: [{ delete_status: false, block_status: false }] }
                    }
                ]
            }).then(QCUsers => {
                //console.log(projects);
                res.json(QCUsers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    router.get('/get-modules-tasks/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            array = [];
            Estimation_modules.findAll({
                include: [
                    {
                        model: Estimation,
                        where: { project_id: req.params.id },
                    },
                    {
                        model: Estimation_tasks,
                        include: [
                            {
                                model: Estimation_team,
                                // where: { team_id: Estimation_tasks.estimation_team_id
                                // },
                            },
                        ]
                    },
                ]
            }).then(ModulesTasks => {
                res.send(ModulesTasks);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-all-users
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc          : 
    router.get('/get-all-users', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            User_profile.findAll({
                include: [
                    {
                        model: Team_assoc,
                        // where: { team_id: 3 }
                    },
                    {
                        model: Login,
                        where: { [Op.and]: [{ delete_status: false, block_status: false }] }
                    }
                ]
            }).then(AllUsers => {
                //console.log(projects);
                res.json(AllUsers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-all-users
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc          
    router.get('/get-complexity-percentage', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Complexity_percentage.findAll({
            }).then(Complexity_percentage => {
                //console.log(projects);
                res.json(Complexity_percentage);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get-date-time 
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc    
    router.post('/get-date-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (req.body.task_name == '' || req.body.planned_hour == 0 || req.body.assigned_person == '' || req.body.priority == '' || req.body.start_date == '' || req.body.start_time == '' || req.body.end_date == '' || req.body.end_time == '') {
                res.send({ success: false, msg: 'Please fill all required fields' });
            }
            else if (req.body.start_date && req.body.end_date) {
                var startDate = new Date(req.body.start_date);
                var endDate = new Date(req.body.end_date);
                start_time = req.body.start_time;
                end_time = req.body.end_time;
                startDate.setHours(start_time.hour, start_time.minute, start_time.second);
                endDate.setHours(end_time.hour, end_time.minute, end_time.second);
                if (startDate >= endDate) {
                    res.send({ success: false, msg: 'End datetime should be greater than start date time' });
                }
                else {
                    res.send({ success: true, msg: 'ok' });
                }
            }
            else {
                res.send({ success: true, msg: 'Task added succesfully' });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    router.get('/get-availablity/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // console.log("hello");
            // console.log(req.params.id);
            Emp_leave.findAll({
                where: {
                    [Op.and]: [{ user_profile_id: req.params.id, request_status: 'Accept' }]
                }
            }).then(empLeave => {
                res.json(empLeave);
                // console.log(empLeave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // 
    // ---------------------------------Start-------------------------------------------
    // Function      :get_public-holidays
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc    
    router.get('/get-public-holidays', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Public_holiday.findAll({
                // where: { cmp_id: decoded.cmp_id },
                where: { cmp_id: 1 },
            }).then(PublicHoliday => {
                res.json(PublicHoliday);
                // console.log(PublicHoliday)
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :get_working-time
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc    
    router.get('/get-working-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_work_times.findAll({
                // where: { cmp_id: decoded.cmp_id }
                include: [
                    {
                        model: cmp_work_time_assocs,
                    }
                ]
            }).then(workTime => {
                // console.log(workTime);
                res.json(workTime);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-off-days-assoc
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc    
    router.get('/get-off-days-assoc', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_work_times.findAll({
                // where: { cmp_id: decoded.cmp_id }
                include: [
                    {
                        model: cmp_off_day_assoc,
                    }
                ]
            }).then(offdays => {
                // console.log(offdays);
                res.json(offdays);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-break-time
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc    
    router.get('/get-break-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_break.findAll({
                // where: { cmp_id: decoded.cmp_id }
                include: [
                    {
                        model: cmp_break_assoc,
                    }
                ]
            }).then(cmp_break => {
                // console.log(cmp_breaks);
                res.json(cmp_break);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get project by id
    // Params        : id
    // Returns       : project
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : getProject
    router.get('/getProjectById/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Projects.findById(req.params.id).then(project => {
                res.json(project);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get developer team
    // Params        : 
    // Returns       : users in developer team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getDeveloperTeam
    router.get('/getDeveloperTeam', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Users.findAll({
                // order: [['id', 'DESC']],
                include: [{
                    model: Login,
                    where: {
                        cmp_id: cmp_id,
                        block_status: false,
                        delete_status: false,
                    }
                }, {
                    model: Team_assoc,
                    where: {
                        cmp_id: cmp_id,
                        team_id: 1,
                    }
                }]
            }).then(developers => {
                res.json(developers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get designer team
    // Params        : 
    // Returns       : users in designer team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getDesignerTeam
    router.get('/getDesignerTeam', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Users.findAll({
                // order: [['id', 'DESC']],
                include: [{
                    model: Login,
                    where: {
                        cmp_id: cmp_id,
                        block_status: false,
                        delete_status: false,
                    }
                }, {
                    model: Team_assoc,
                    where: {
                        cmp_id: cmp_id,
                        team_id: 2,
                    }
                }]
            }).then(designers => {
                res.json(designers);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get qc team
    // Params        : 
    // Returns       : users in qc team
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : getQCTeam
    router.get('/getQCTeam', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Users.findAll({
                // order: [['id', 'DESC']],
                include: [{
                    model: Login,
                    where: {
                        cmp_id: cmp_id,
                        block_status: false,
                        delete_status: false,
                    }
                }, {
                    model: Team_assoc,
                    where: {
                        cmp_id: cmp_id,
                        team_id: 3,
                    }
                }]
            }).then(qc => {
                res.json(qc);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : assign project
    // Params        : form data
    // Returns       : 
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          : AssignTeamHead
    router.post('/AssignTeamHead', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            // // console.log(req.body.forward_to);
            if (req.body.developer_id == '' && req.body.designer_id == '' && req.body.qc_id == '') {
                res.json({ success: false, msg: "Please select atleast one Team Head" });
            }
            // else if (req.body.developer_id != '') {
            //     if (req.body.developer_id == req.body.designer_id || req.body.developer_id == req.body.qc_id) {
            //         res.json({ success: false, msg: "Team heads must be diffrent" });
            //     }
            // }
            // else if (req.body.designer_id != '') {
            //     if (req.body.developer_id == req.body.designer_id || req.body.designer_id == req.body.qc_id) {
            //         res.json({ success: false, msg: "Team heads must be diffrent" });
            //     }
            // }
            // else if (req.body.qc_id != '') {
            //     if (req.body.developer_id == req.body.qc_id || req.body.designer_id == req.body.qc_id) {
            //         res.json({ success: false, msg: "Team heads must be diffrent" });
            //     }
            // }
            else if (req.body.requirement == '' || req.body.docFile == '' || req.body.docFile == null) {
                res.json({ success: false, msg: "Requirement Summary & Attatchment is required" });
            }
            else if (req.body.forward_to == '') {
                res.json({ success: false, msg: "Please select a Team Head to forward the Estimation Request" });
            }
            else {
                timestamp = new Date().getTime().toString();
                docName = req.body.project_id + timestamp + Math.floor(100000 + Math.random() * 900000);
                // // console.log("docSrc --------------------------------------------------")
                // // console.log(req.body.docSrc);
                var base64 = decodeBase64Image(req.body.docSrc);
                // // console.log(base64);
                require("fs").writeFile('../taskit/public/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                    // // console.log(err);
                });
                require("fs").writeFile('../taskit/angular/src/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                    // // console.log(err);
                });
                // // console.log(req.body);
                Project.update({
                    requirement_summary: req.body.requirement,
                    requirement_attatchment: docName + '.' + base64.ext,
                }, {
                        where: {
                            id: req.body.project_id
                        }
                    }).then(data => {
                        if (data == 1) {
                            //start
                            if (req.body.developer_id != '') {
                                Project_estimation_team.bulkCreate([
                                    { project_id: req.body.project_id, team_id: 1, head_id: req.body.developer_id.id },
                                    // { project_id: req.body.project_id, team_id: 2, head_id: req.body.designer_id.id },
                                    // { project_id: req.body.project_id, team_id: 3, head_id: req.body.qc_id.id },
                                ]).then(team1 => { });
                            }
                            if (req.body.designer_id !== '') {
                                Project_estimation_team.bulkCreate([
                                    // { project_id: req.body.project_id, team_id: 1, head_id: req.body.developer_id.id },
                                    { project_id: req.body.project_id, team_id: 2, head_id: req.body.designer_id.id },
                                    // { project_id: req.body.project_id, team_id: 3, head_id: req.body.qc_id.id },
                                ]).then(team2 => { });
                            }
                            if (req.body.qc_id != '') {
                                Project_estimation_team.bulkCreate([
                                    // { project_id: req.body.project_id, team_id: 1, head_id: req.body.developer_id.id },
                                    // { project_id: req.body.project_id, team_id: 2, head_id: req.body.designer_id.id },
                                    { project_id: req.body.project_id, team_id: 3, head_id: req.body.qc_id.id },
                                ]).then(team3 => { });
                            }
                            // end
                            const estimation_notif = Project_estimation_notification.build({
                                project_id: req.body.project_id,
                                from_id: decoded.id,
                                to_id: req.body.forward_to.login_id,
                            })
                            estimation_notif.save().then(function (newProject) {
                                io.sockets.emit("doEstimation", {
                                    to_id: req.body.forward_to.login_id
                                });
                                res.json({ success: true, msg: "Success" });
                            });
                        }
                        else {
                            res.json({ success: false, msg: "Failed" });
                        }
                    });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : edit project
    // Params        : data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, Rinsha
    // Desc          :
    router.post('/editProject', function (req, res) {
        // // console.log(req.body)
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            // // console.log(req.body);
            if (req.body.project_name == '' || req.body.category_id == '' || req.body.project_type == '' || req.body.priority == '' || req.body.requirement_summary == '' || req.body.description == '') {
                res.json({ success: false, msg: "All fields are required" });
            }
            else {
                if (req.body.docSrc && req.body.docSrc != '') {
                    timestamp = new Date().getTime().toString();
                    docName = req.body.project_id + timestamp + Math.floor(100000 + Math.random() * 900000);
                    var base64 = decodeBase64Image(req.body.docSrc);
                    require("fs").writeFile('../taskit/public/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // // console.log(err);
                    });
                    require("fs").writeFile('../taskit/angular/src/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // // console.log(err);
                    });
                    requirement_attatchment = docName + '.' + base64.ext;
                    projectUpdate();
                }
                else {
                    Project.findById(req.body.project_id).then(pro => {
                        requirement_attatchment = pro.requirement_attatchment;
                        projectUpdate();
                    });
                }
                // // console.log(req.body);
                function projectUpdate() {
                    Project.update({
                        project_name: req.body.project_name,
                        category_id: req.body.category_id,
                        project_type: req.body.project_type,
                        priority: req.body.priority,
                        description: req.body.description,
                        requirement_summary: req.body.requirement_summary,
                        requirement_attatchment: requirement_attatchment,
                    }, {
                            where: {
                                id: req.body.project_id
                            }
                        }).then(data => {
                            if (data == 1) {
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Project updated!", user_id)
                                })
                                res.json({ success: true, msg: "Success" });
                            }
                            else {
                                res.json({ success: false, msg: "Failed" });
                            }
                        });
                }
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get category by id
    // Params        : id
    // Returns       : category
    // Author        : Rinsha
    // Date          : 08-03-2018
    // Last Modified : 08-03-2018, Rinsha
    // Desc          : getCategoryById
    router.get('/getCategoryById/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Category.findById(req.params.id).then(category => {
                res.json(category);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : delete project
    // Params        : id 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : to delete a project
    router.get('/deleteProject/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project.destroy({
                where: {
                    id: req.params.id
                }
            }).then(project => {
                // console.log(newPlan);
                var id = decoded.id;
                // var role = req.body.id
                var user_id;
                Users.find({
                    where: {
                        login_id: id
                    }
                }).then(resUser => {
                    user_id = resUser.id;
                    saveLog("Project deleted!", user_id)
                })
                res.json({ success: true, msg: "Success" });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all projects by status
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : getAllProjectByStatus
    router.get('/getAllProjectByStatus/:status', function (req, res) {
        // // console.log(req.params.status);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (req.params.status == 'all') {
                Project.findAll({
                    order: [['id', 'DESC']],
                    where: { cmp_id: cmp_id }
                }).then(project => {
                    res.json(project);
                });
            }
            else {
                Project.findAll({
                    order: [['id', 'DESC']],
                    where: {
                        status: req.params.status,
                        cmp_id: cmp_id
                    }
                }).then(project => {
                    res.json(project);
                });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get assignHeadNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager assigned for a project. If yes, then notification to assign team heads
    router.get('/assignHeadNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project.findAll({
                where: {
                    pm_id: decoded.id,
                    is_estimation_resubmitted: false,
                    is_pm_viewed: false
                }
            }).then(project => {
                res.json(project);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 12-03-2018
    // Last Modified : 12-03-2018, Rinsha
    // Desc          : close notification when pm sees the assign team head notification
    router.get('/closeNotif/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project.update({
                is_pm_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "" });
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get approveEstimationNotification
    // Params        : 
    // Returns       : notification data
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : check whether the loggedin project manager have pending estimation approval notification
    router.get('/approveEstimationNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project_estimation_notification.findAll({
                where: {
                    to_id: decoded.id,
                    is_completed: false
                },
                include: [{
                    model: Project
                }]
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
    // Function      : close notification of estimation approval
    // Params        : notification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Rinsha
    // Desc          : close notification when pm sees the estimation approval notification
    router.get('/closeNotif2/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project_estimation_notification.update({
                is_completed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "" });
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getProjectstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          :  
    router.get('/getProjectstimations/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Estimation.findAll({
                where: {
                    is_resubmitted: false,
                    project_id: req.params.id
                },
                include: [
                    {
                        model: Project_estimation_team,
                        include: [{
                            model: User_profile
                        }, {
                            model: Estimation_team_members
                        }
                        ],
                    },
                    {
                        model: Estimation_modules,
                        include: {
                            model: Estimation_tasks
                        }
                    },
                ]
            }).then(estimations => {
                res.json(estimations);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : resubmitEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          : 
    router.post('/resubmitEstimation/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.reason == '' || req.body.reason == null) {
                res.json({ success: false, msg: "Reason is required!" });
            }
            else {
                Estimation.update({
                    is_resubmitted: true,
                    reason: req.body.reason
                }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(data => {
                        if (data == 1) {
                            const notification = Project_estimation_notification.build({
                                project_id: req.body.project_id,
                                estimation_id: req.params.id,
                                from_id: decoded.id,
                                to_id: req.body.to_id,
                            });
                            notification.save().then(function (notif) {
                                io.sockets.emit("resubmitEstimation", {
                                    to_id: req.body.to_id
                                });
                                res.json({ success: true, msg: "Success" });
                            });
                        } else {
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
    // Function      : resubmitEstimation
    // Params        : estimation id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Rinsha
    // Desc          : 
    router.get('/acceptEstimation/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Estimation.update({
                is_accepted: true,
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "Success" });
                    } else {
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
    // Function      : get team heads of the project who does nt involved in estimations
    // Params        : project id, current_estimation_team_ids
    // Returns       : team head info
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          : getTeamHeadsToEstimate
    router.post('/getTeamHeadsToEstimate/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project_estimation_team.findAll({
                where: {
                    project_id: req.params.id,
                },
                include: {
                    model: User_profile
                }
            }).then(teamheads => {
                res.json(teamheads);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardEstimationRequest
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 16-03-2018
    // Last Modified : 16-03-2018, Rinsha
    // Desc          :
    router.post('/forwardEstimationRequest/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            const notification = Project_estimation_notification.build({
                project_id: req.params.id,
                from_id: decoded.id,
                to_id: req.body.head_id
            });
            notification.save().then(function (notif) {
                io.sockets.emit("doEstimation", {
                    to_id: req.body.head_id
                });
                res.json({ success: true, msg: "Success" });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getTotalEstimations
    // Params        : project id
    // Returns       : estimations
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          :  
    router.get('/getTotalEstimations/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project_estimation_notification.findAll({
                where: {
                    project_id: req.params.id,
                    estimation_id: null
                },
            }).then(estimations => {
                res.json(estimations.length);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : send request to admin for approval
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : sendForApproval 
    router.post('/sendForApproval/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.pm_id == decoded.id) {
                is_admin_viewed = true;
            }
            else {
                is_admin_viewed = false;
            }
            Project.update({
                is_estimation_completed: true,
                is_admin_viewed: is_admin_viewed
            }, {
                    where: {
                        id: req.params.id
                    },
                }).then(project => {
                    io.sockets.emit("approveProject", {
                        to_id: req.body.head_id
                    });
                    res.json({ success: true, msg: "Success" });
                });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get apprroveProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : check whether the loggedin company admin have any project to approve
    router.get('/approveProjectNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project.findAll({
                where: {
                    assignee_id: decoded.id,
                    is_estimation_completed: true,
                    is_admin_viewed: false
                }
            }).then(project => {
                res.json(project);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project approval
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 19-03-2018
    // Last Modified : 19-03-2018, Rinsha
    // Desc          : close notification when pm sees the project approval notification
    router.get('/closeNotif3/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project.update({
                is_admin_viewed: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "" });
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : accept project
    // Params        : cost, estimated hr, project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : acceptProject
    router.post('/acceptProject', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.pm_id == decoded.id) {
                is_pm_viewed_for_planning = true
            }
            else {
                is_pm_viewed_for_planning = false
            }
            Project.update({
                project_cost: req.body.project_cost,
                total_estimated_hour: req.body.estimation_hour,
                is_approved: true,
                is_pm_viewed_for_planning: is_pm_viewed_for_planning,
                is_estimation_resubmitted: false,
            }, {
                    where: {
                        id: req.body.p_id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "Success" });
                        io.sockets.emit("planProject", {
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Project plan accepted!", user_id)
                        })
                    } else {
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
    // Function      : reject project
    // Params        : cost, estimated hr, project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    router.post('/rejectProject', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project.update({
                project_cost: req.body.project_cost,
                total_estimated_hour: req.body.estimation_hour,
                status: "Cancelled"
            }, {
                    where: {
                        id: req.body.p_id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "Success" });
                    } else {
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
    // Function      : resubmit project
    // Params        : cost, estimated hr, project id, pm id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : resubmitProject
    router.post('/resubmitProject', function (req, res) {
        is_pm_viewed = true;
        // // console.log(req.body.pm_id);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.pm_id == decoded.id) {
                this.is_pm_viewed = true
            }
            else {
                this.is_pm_viewed = false
            }
            Project.update({
                is_estimation_completed: false,
                is_admin_viewed: false,
                is_approved: false,
                is_estimation_resubmitted: true,
                is_pm_viewed: this.is_pm_viewed
            }, {
                    where: {
                        id: req.body.p_id
                    }
                }).then(data => {
                    if (data == 1) {
                        io.sockets.emit("reEstimateProject", {
                        });
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Project submitted for re-estimation!", user_id)
                        })
                        res.json({ success: true, msg: "Success" });
                    } else {
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
    // Function      : get planProjectNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any project to plan
    router.get('/planProjectNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project.findAll({
                where: {
                    pm_id: decoded.id,
                    is_approved: true,
                    is_pm_viewed_for_planning: false
                }
            }).then(project => {
                res.json(project);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : close notification of project plan
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : close notification when pm sees the project plan notification
    router.get('/closeNotif4/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project.update({
                is_pm_viewed_for_planning: true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data => {
                    if (data == 1) {
                        res.json({ success: true, msg: "" });
                    }
                    else {
                        res.json({ success: false, msg: "Failed" });
                    }
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get resubmitEstimationNotification
    // Params        : 
    // Returns       : project data
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : check whether the loggedin pm have any estimation to resubmit
    router.get('/resubmitEstimationNotification', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Project.findAll({
                where: {
                    pm_id: decoded.id,
                    is_estimation_resubmitted: true,
                    is_pm_viewed: false
                }
            }).then(project => {
                res.json(project);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAcceptedEstimations
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 20-03-2018
    // Last Modified : 20-03-2018, Rinsha
    // Desc          : 
    router.get('/getAcceptedEstimations/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Estimation.findAll({
                where: {
                    is_resubmitted: false,
                    is_accepted: true,
                    project_id: req.params.id
                },
            }).then(estimations => {
                res.json(estimations.length);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : forwardStatus
    // Params        : project id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 21-03-2018
    // Last Modified : 21-03-2018, Rinsha
    // Desc          : check whether the estimation request forwarded to any team head is pending
    router.get('/getforwardStatus/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Project_estimation_notification.findAll({
                where: {
                    is_completed: false,
                    project_id: req.params.id
                },
            }).then(notif => {
                res.json(notif.length);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : capitalizeFirstLetter
    // Params        : string
    // Returns       : 
    // Author        : Rinsha
    // Date          : 04-04-2018
    // Last Modified : 04-04-2018, Rinsha
    // Desc          :  
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // -----------------------------------End------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : getMembers
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018,
    // Desc          : get list of teams and stregth

    router.get('/getMembers/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var teamName;
            var members = [];
            Users.findAll({
                where: {
                    cmp_id: cmp_id,
                    role_id: 4
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
                    users[key].onTeam = false;
                    // console.log(element)
                    TeamAssoc.findAll({
                        raw: true,
                        where: { user_profile_id: element.id, cmp_id: cmp_id, team_id: req.params.id }
                    }).then(resUser => {
                        // res.json(resUser);
                        // console.log(resUser)

                        if (resUser.length > 0) {
                            users[key].onTeam = true;
                            tmp3.push(element.id);
                            tmp5.push(element);
                        }
                        // console.log(element.id)
                        tmp[element.id] = users[key];
                        // members.push({f_name:resUser.f_name, l_name:resUser.l_name, id:resUser.id})
                        callback();
                    })
                }, () => {
                    TeamAssoc.find({
                        raw: true,
                        where: { cmp_id: cmp_id, team_id: req.params.id, is_head: true }
                    }).then(resHead => {
                        // res.json(resHead);
                        tmp4 = resHead
                        tmp2 = [];
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

        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.post('/assignMemebers', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var teamName;
            var team = [];
            // console.log(req.body)
            TeamAssoc.destroy({
                where: {
                    user_profile_id: { [Op.in]: req.body[0] },
                    team_id: req.body[2],
                    cmp_id: cmp_id
                }
            }).then(() => {
                members = req.body[0];
                var teamassoc;
                members.forEach(element => {
                    if (element == req.body[1]) {
                        teamassoc = TeamAssoc.build({
                            is_head: true,
                            cmp_id: cmp_id,
                            user_profile_id: element,
                            team_id: req.body[2]
                        })
                    } else {
                        teamassoc = TeamAssoc.build({
                            is_head: false,
                            cmp_id: cmp_id,
                            user_profile_id: element,
                            team_id: req.body[2]
                        })
                    }
                    teamassoc.save().then((resTeamAssoc) => {
                        console.log(resTeamAssoc);
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("members and head assigned!", user_id)
                        })
                        res.json({
                            status: 1,
                            Message: "Successfully assigned!"
                        })
                    }).catch(error => {
                        res.json({
                            status: 0,
                            Message: "Some error occured!"
                        })
                    })

                });
            }).catch(err => {
                res.json({
                    status: 0,
                    Message: "Some error occured!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/getUserGroups', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            Role.findAll({
                where: {
                    is_visible: true
                }
            }).then(Roles => {
                // console.log(projects);
                res.json(Roles);
                // });
            });

        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 06-3-2018
    // Last Modified : 06-3-2018, Jooshifa
    // Desc          : company and user direct login with username and password with google captcha


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
    //             // console.log(name);

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
    //               // console.log(element);
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
    //  ---------------------------------Start-------------------------------------------
    // Function      : assignMemeber5
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018,
    // Desc          : assign team members and head to a team

    router.get('/getAccessRights/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            var roleId = req.params.id;
            console.log(roleId);
            tmp = [];
            var rights;
            if (roleId == 3) {
                AccessRightsMain.findAll({
                    raw: true, where: {
                        for_user: false
                    }
                }).then(mainAccessRights => {
                    tmp = mainAccessRights;
                    async.eachOfSeries(mainAccessRights, (element, key, callback) => {
                        trueCount = 0;
                        AccessRights.findAndCountAll({
                            where: {
                                main_access_right_id: element.id
                            },
                            raw: true
                        }).then((resx) => {

                            tmp[key].sub = resx.rows;

                            async.eachOfSeries(resx.rows, (element1, key1, callback1) => {

                                AccessRightsAssoc.findAndCountAll({
                                    where: {
                                        cmp_id: cmp_id,
                                        role_id: roleId,
                                        access_rights_id: element1.id
                                    },
                                    raw: true
                                }).then((resAssoc) => {
                                    if (resAssoc.count > 0) {
                                        trueCount++;
                                        tmp[key].sub[key1].checked = true;
                                    } else {
                                        tmp[key].sub[key1].checked = false;
                                    }
                                    callback1();
                                });

                            }, () => {
                                if ((tmp[key].sub.length != 0) && (tmp[key].sub.length == trueCount)) {
                                    tmp[key].checked = true;
                                    tmp[key].intermediate;

                                } else {
                                    tmp[key].checked = false;
                                    tmp[key].intermediate = false;

                                }
                                callback();
                            })

                            //callback();
                        });

                    }, () => {
                        res.json(tmp);
                    })
                })
            } else {
                AccessRightsMain.findAll({
                    raw: true, where: {
                        for_user: true
                    }
                }).then(mainAccessRights => {
                    tmp = mainAccessRights;
                    async.eachOfSeries(mainAccessRights, (element, key, callback) => {
                        trueCount = 0;
                        AccessRights.findAndCountAll({
                            where: {
                                main_access_right_id: element.id
                            },
                            raw: true
                        }).then((resx) => {

                            tmp[key].sub = resx.rows;

                            async.eachOfSeries(resx.rows, (element1, key1, callback1) => {

                                AccessRightsAssoc.findAndCountAll({
                                    where: {
                                        cmp_id: cmp_id,
                                        role_id: roleId,
                                        access_rights_id: element1.id
                                    },
                                    raw: true
                                }).then((resAssoc) => {
                                    if (resAssoc.count > 0) {
                                        trueCount++;
                                        tmp[key].sub[key1].checked = true;
                                    } else {
                                        tmp[key].sub[key1].checked = false;
                                    }
                                    callback1();
                                });

                            }, () => {
                                if ((tmp[key].sub.length != 0) && (tmp[key].sub.length == trueCount)) {
                                    tmp[key].checked = true;
                                    // tmp[key].intermediate = false;

                                } else {
                                    tmp[key].checked = false;
                                    // tmp[key].intermediate = true;

                                }
                                callback();
                            })

                            //callback();
                        });

                    }, () => {
                        res.json(tmp);
                    })
                })
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : assignMemeber5
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018,
    // Desc          : assign team members and head to a team

    router.post('/assignRights/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // console.log(req.body)
            // var cmp_id = 1;

            role_id = parseInt(req.params.id);
            console.log(role_id);
            AccessRightsAssoc.destroy({
                where: {
                    role_id: role_id,
                    cmp_id: cmp_id
                }
            }).then(resDel => {
                req.body.forEach(element => {
                    async.eachOfSeries(element.sub, (ele, key, callback) => {
                        if (ele.checked == true) {
                            AccessRightsAssoc.findAndCountAll({
                                where: {
                                    cmp_id: cmp_id,
                                    access_rights_id: ele.id,
                                    role_id: role_id
                                }
                            }).then(resAssoc => {
                                console.log(resAssoc)
                                if (resAssoc.count == 0) {
                                    let assoc = AccessRightsAssoc.build({
                                        cmp_id: cmp_id,
                                        access_rights_id: ele.id,
                                        role_id: role_id
                                    })
                                    assoc.save().then(res => {

                                    }).catch(err => {
                                        // console.log(err);
                                    })
                                    // console.log(resAssoc.count)
                                }

                            });
                        } callback();
                    },
                        () => {
                            // console.log(newPlan);
                            var id = decoded.id;
                            // var role = req.body.id
                            var user_id;
                            Users.find({
                                where: {
                                    login_id: id
                                }
                            }).then(resUser => {
                                user_id = resUser.id;
                                saveLog("Access rights assigned!", user_id)
                            })
                            res.json({
                                status: 1,
                                message: "Successfully assigned!"
                            })
                        })
                });
            })
        } else {
            return res.status(401).send('Invalid User');
        }

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

    router.get('/getWorkingTimes', function (req, res) {
        if (req.headers && req.headers.authorization) {
          var authorization = req.headers.authorization.substring(4), decoded;
          //     try {
          decoded = jwt.verify(authorization, Config.secret);
          var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            WorkingTime.find({
                where: {
                    is_default: true,
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
                    include: [{
                        model: WorkingTime
                    }]
                }).then(resTime => {

                    Break.findAll({
                        where: {
                            cmp_id: cmp_id,
                            is_default: true
                        }
                    }).then(resbreak => {
                        timingArray = {};
                        timingArray.break = resbreak;
                        timingArray.default = wrktime;
                        timingArray.others = resTime;
                        res.json(timingArray);
                    })

                })
                // });
            });

        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.post('/saveWorkingTimes', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            console.log(req.body)
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            if (req.body.start.hour == '' || !(/^\d+$/.test(req.body.start.hour)) || req.body.start.minute == '' || !(/^\d+$/.test(req.body.start.minute)) || req.body.end.hour == '' || !(/^\d+$/.test(req.body.end.hour)) || req.body.end.minute == '' || !(/^\d+$/.test(req.body.end.minute))) {
                res.json({
                    status: 0,
                    message: "Error time format!"
                })
            }
            else {
                WorkingTime.update(
                    {
                        title: req.body.start.hour + ":" + req.body.start.minute + "-" + req.body.end.hour + ":" + req.body.end.minute,
                        start_time: req.body.start.hour + ":" + req.body.start.minute,
                        end_time: req.body.end.hour + ":" + req.body.end.minute
                    },
                    {
                        where: {
                            id: req.body.id
                        }
                    }
                ).then(resWtime => {
                    // console.log(newPlan);
                    var id = decoded.id;
                    // var role = req.body.id
                    var user_id;
                    Users.find({
                        where: {
                            login_id: id
                        }
                    }).then(resUser => {
                        user_id = resUser.id;
                        saveLog("Company working time saved!", user_id)
                    })
                    res.json({
                        status: 1,
                        message: "Successfully saved!"
                    })
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error in updating! Try again!"
                    })
                })
            }

        } else {
            return res.status(401).send('Invalid User');
        }
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
    router.post('/deleteBreak', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            Break.destroy({
                where: {
                    id: req.body.id
                }
            }).then(resBreak => {
                BreakAssoc.findAll({
                    raw: true,
                    where: {
                        break_id: req.body.id
                    }
                }).then(resBreakAssoc => {
                    if (resBreakAssoc.length > 0) {
                        BreakAssoc.destroy({
                            where: {
                                break_id: req.body.id
                            }
                        }).then(resDel => {
                            res.json({
                                status: 1,
                                message: "Delete Successfull!"
                            })
                        }).catch(err => {
                            res.json({
                                status: 0,
                                message: "Error occured!Try again!"
                            })
                        })
                    }
                    else {
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Break deleted!", user_id)
                        })
                        res.json({
                            status: 1,
                            message: "Deleted Successfully!"
                        })
                    }
                }).catch(e => {
                    res.json({
                        status: 0,
                        message: "Error occured!Try again!"
                    })
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
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
    router.post('/saveBreak', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            // console.log(req.body)
            if (req.body.title == '') {
                res.json({
                    status: 0,
                    message: "Title empty!"
                })
            }
            else {
                if (req.body.day == null && req.body.week == null) {
                    Break.build({
                        title: req.body.title,
                        cmp_id: cmp_id,
                        start_time: req.body.start_time.hour + ":" + req.body.start_time.minute,
                        end_time: req.body.end_time.hour + ":" + req.body.end_time.minute,
                        is_default: true
                    }).save().then(resSave => {
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Break saved!", user_id)
                        })
                        res.json({
                            status: 1,
                            message: "Successfully saved!"
                        })
                    }).catch(err => {
                        res.json({
                            status: 0,
                            message: "An error occured! Try again!"
                        })
                    })
                }
            }
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/getWeekHours', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            console.log(cmp_id)
            WorkingTimeAssoc.findAll({
                order: [
                    ['day_no', 'ASC']
                ],
                include: [
                    {
                        model: WorkingTime, 
                        require: true, 
                        where: {
                            cmp_id: cmp_id
                        }
                    }],
            }).then(wrktime => {
                let tmp = {};
                tmp2 = {};
                wrktime.forEach((element) => {

                    dayno = 0;
                    // element.tbl_cmp_work_time.forEach((ele) => {
                    if (dayno != element.day_no) {
                        dayno = element.day_no;
                        tmp = {};
                    }
                    //   if(typeof tmp[ele.day_no] === 'undefined') {
                    //     tmp[ele.day_no]= new Array();
                    //     if(typeof tmp[ele.day_no][ele.week_no] === 'undefined') {
                    //     }
                    //     // tmp[ele.day_no][ele.week_no] = new Array();
                    // }
                    if (tmp2[element.day_no]) {
                        tmp2[element.day_no][element.week_no] = { id: element.tbl_cmp_work_time.id, title: element.tbl_cmp_work_time.title, start: element.tbl_cmp_work_time.start_time, end: element.tbl_cmp_work_time.end_time };
                    } else {
                        tmp = { [element.week_no]: { id: element.tbl_cmp_work_time.id, title: element.tbl_cmp_work_time.title, start: element.tbl_cmp_work_time.start_time, end: element.tbl_cmp_work_time.end_time } };
                        tmp2[element.day_no] = tmp;
                    }
                    //  });
                });
                cmp_off_day_assoc.findAll({
                    where:{cmp_id: cmp_id  }              
                }).then(resOff => {
                    resOff.forEach(element => {
                        if (tmp2[element.day_no]) {
                            tmp2[element.day_no][element.week_no] = { id: element.id };
                        } else {
                            tmp = { [element.week_no]: { id: element.id } };
                            tmp2[element.day_no] = tmp;
                        }
                    })
                    console.log(tmp2);
                    let x = {};
                    for (i = 1; i <= 7; i++) {
                        let tp = {}
                        for (j = 1; j <= 5; j++) {
                            // console.log(i)
                            if (tmp2[i]) {
                                if (tmp2[i][j]) {
                                    tp[j] = tmp2[i][j]
                                } else {
                                    tp[j] = {}
                                }
                            }
                            else {
                                tp[j] = {}
                            }

                        }
                        // console.log(tp);
                        x[i] = tp
                        // console.log(x);
                    }
                    res.json(x)
                })
            });

        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    router.get('/get-availablity/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Emp_leave.findAll({
                where: {
                    [Op.and]: [{ user_profile_id: req.params.id, request_status: 'Accept' }]

                }
            }).then(empLeave => {
                res.json(empLeave);
                // console.log(empLeave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      :get_public-holidays
    // Params        :
    // Returns       :
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc

    router.get('/get-public-holidays', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            Public_holiday.findAll({

                where: { cmp_id: decoded.cmp_id },
                // where: { cmp_id: 1 },

            }).then(PublicHoliday => {
                res.json(PublicHoliday);
                // console.log(PublicHoliday)
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      :get_working-time
    // Params        :
    // Returns       :
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc
    router.get('/get-working-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_work_times.findAll({
                where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: cmp_work_time_assocs,
                    }
                ]
            }).then(workTime => {
                console.log(workTime);
                res.json(workTime);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get-off-days-assoc
    // Params        :
    // Returns       :
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc

    router.get('/get-off-days-assoc', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_work_times.findAll({
                where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: cmp_off_day_assoc,
                    }
                ]
            }).then(offdays => {
                // console.log(offdays);
                res.json(offdays);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get-break-time
    // Params        :
    // Returns       :
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc

    router.get('/get-break-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_break.findAll({
                where: { cmp_id: decoded.cmp_id },
                include: [
                    {
                        model: cmp_break_assoc,
                    }
                ]
            }).then(cmp_break => {
                // console.log(cmp_breaks);
                res.json(cmp_break);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : getUserGroups
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018,
    // Desc          : get user groups  from db
    router.get('/getYears', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            let data = [];
            // var cmp_id = 1;
            d = (new Date()).getFullYear();
            y1 = d - 1;
            y2 = d;
            y3 = d + 1
            data.push(y1)
            data.push(y2)
            data.push(y3)
            res.json(data)
            // }
        } else {
            return res.status(401).send('Invalid User');
        }
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
    router.post('/getHoliday', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            console.log(req.body)
            if (req.body.year == null) {
                res.json({
                    status: 0,
                    message: "Error occured!"
                })
            }
            else {
                d = req.body.year;
                let startDate = '';
                let endDate = '';
                startDate = d + "-01-01";
                endDate = d + "-12-31";

                console.log(d);
                Holiday.findAll({
                    where: {
                        date: { [Op.between]: [startDate, endDate] },
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
        } else {
            return res.status(401).send('Invalid User');
        }
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
    router.post('/updateHoliday', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            console.log(req.body.date)
            if (req.body.date == '' || req.body.date == null) {
                res.json({
                    status: 0,
                    message: "Date Empty!"
                })
            }
            else if (req.body.title == '' || req.body.title == null) {
                res.json({
                    status: 0,
                    message: "Title Empty!"
                })
            }
            else {
                Holiday.findAndCountAll({
                    where: {
                        title: req.body.title,
                        date: req.body.date,
                        cmp_id: cmp_id
                    }
                }).then(resHoliday => {
                    if (resHoliday.count > 1) {
                        res.json({
                            status: 0,
                            message: "Already Exist!"
                        })
                    } else {
                        Holiday.update({
                            title: req.body.title,
                            date: req.body.date
                        },
                            {
                                where: {
                                    id: req.body.id
                                }
                            }).then(resUpdation => {
                                if (resUpdation == 1) {
                                    // console.log(newPlan);
                                    var id = decoded.id;
                                    // var role = req.body.id
                                    var user_id;
                                    Users.find({
                                        where: {
                                            login_id: id
                                        }
                                    }).then(resUser => {
                                        user_id = resUser.id;
                                        saveLog("Holiday Updated!", user_id)
                                    })
                                    res.json({
                                        status: 1,
                                        message: "Successfully Updated!"
                                    })
                                }
                                else {
                                    res.json({
                                        status: 1,
                                        message: "Failed! Try again!"
                                    })
                                }
                            })
                    }
                })
            }
        } else {
            return res.status(401).send('Invalid User');
        }

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
    router.post('/deleteHoliday', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            console.log(req.body.id)
            if (req.body.id == '' || req.body.id == null) {
                res.json({
                    status: 0,
                    message: "Error occured!"
                })
            }
            else {
                Holiday.destroy({
                    where: {
                        id: req.body.id
                    }
                }).then(resHoliday => {
                    // console.log(newPlan);
                    var id = decoded.id;
                    // var role = req.body.id
                    var user_id;
                    Users.find({
                        where: {
                            login_id: id
                        }
                    }).then(resUser => {
                        user_id = resUser.id;
                        saveLog("Holiday deleted!", user_id)
                    })
                    res.json({
                        status: 1,
                        message: "Successfully deleted!"
                    })
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }
        } else {
            return res.status(401).send('Invalid User');
        }
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
    router.post('/saveHoliday', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // role_id = req.params.id;
            // console.log(req.body.date + 5.5);

            console.log(new Date().getTimezoneOffset());
            if (req.body.title == '' || req.body.title == null) {
                res.json({
                    status: 0,
                    message: "Title is empty!"
                })
            }
            else if (req.body.date == '' || req.body.date == null) {
                res.json({
                    status: 0,
                    message: "Date is empty!"
                })
            }
            else {
                Holiday.findAndCountAll({
                    where: {
                        title: req.body.title,
                        date: req.body.date,
                        cmp_id: cmp_id
                    }
                }).then(resExist => {
                    if (resExist.count > 0) {
                        res.json({
                            status: 0,
                            message: "Holiday with same date and name exist!"
                        })
                    } else {
                        Holiday.build({
                            title: req.body.title,
                            cmp_id: cmp_id,
                            date: req.body.date
                        }).save().then(resSave => {
                            // console.log(resSave)
                            // console.log(newPlan);
                            var id = decoded.id;
                            // var role = req.body.id
                            var user_id;
                            Users.find({
                                where: {
                                    login_id: id
                                }
                            }).then(resUser => {
                                user_id = resUser.id;
                                saveLog("Holiday saved!", user_id)
                            })
                            res.json({
                                status: 1,
                                message: "Successfully saved!"
                            })
                        }).catch(err => {
                            res.json({
                                status: 0,
                                message: "An error occured! Try again!"
                            })
                        })
                    }
                }).catch(error => {
                    res.json({
                        status: 0,
                        message: "An error occured! Try again!"
                    })
                })
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------

    // //  ---------------------------------Start-------------------------------------------
    // // Function      : getMembers
    // // Params        :
    // // Returns       :
    // // Author        : Manu Prasad
    // // Date          : 13-03-2018
    // // Last Modified : 13-03-2018,
    // // Desc          : get list of teams and stregth

    // router.get('/getNotifications', function (req, res) {
    //   // if (req.headers && req.headers.authorization) {
    //   //   var authorization = req.headers.authorization.substring(4), decoded;
    //   //   //     try {
    //   //   decoded = jwt.verify(authorization, Config.secret);
    //   //   var cmp_id = decoded._id;
    //   var cmp_id = 1;
    //   // res.json(req.body);
    //   var user_id = 74;
    //   var role_id = 1;
    //   Users.findAll({
    //     include:[{
    //       model:ProjectMemeberAssoc,
    //       where:{
    //         user_profile_id : user_id
    //       },
    //       include: [{
    //         model:Projects
    //       }]
    //     }],

    //   }).then( resProjects => {
    //     res.json(resProjects);
    //   })
    //   // }
    // })
    // //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : getMembers
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018,
    // Desc          : get list of teams and stregth

    router.get('/getUserProjects', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var id = decoded.id;
            // var cmp_id = 1;
            // res.json(req.body);
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                Users.findAll({
                    include: [{
                        model: ProjectMemeberAssoc,
                        where: {
                            user_profile_id: user_id
                        },
                        include: [{
                            model: Projects,
                            where: {
                                cmp_id: cmp_id
                            }
                        }]
                    }],

                }).then(resProjects => {
                    res.json(resProjects);
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })

        } else {
            return res.status(401).send('Invalid User');
        }
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var id = decoded.id;
            var user_id;
            // res.json(req.body);
            // Users.find({
            //     where: {
            //         login_id: id
            //     }
            // }).then(resUser => {
            //     user_id = resUser.id;
            // }).catch(err => {
            //     res.json({
            //         status: 0,
            //         message: "Error occured! Try again!"
            //     })
            // })
            // var user_id = 74;
            Projects.findAll({
                where: {
                    id: req.params.id,
                    cmp_id: cmp_id
                },

                include: [{
                    model: ProjectMemeberAssoc,
                    include: [{
                        model: Users
                    }, {
                        model: ProjectTeam
                    }]
                }, {
                    model: Modules,

                    include: [{
                        model: Tasks,
                    }]
                }],

            }).then(resProjects => {
                if (resProjects.length <= 0) {
                    res.json({
                        status: 0,
                        message: "Project not found!"
                    })
                } else {
                    res.json(resProjects);
                }
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Generate token
    // Params        : company id
    // Returns       : jwt token
    // Author        : jooshifa
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, jooshifa
    // Desc          : 

    router.get('/generateToken/:id', function (req, res) {
        Login.findOne({
            include: [{
                model: Company, where: { id: req.params.id }
            }]
        }).then(newdata => {
            const token = jwt.sign(login, Config.secret, {
                expiresIn: 60400 // sec 1 week
            });
            return res.json({
                success: true,
                token: 'JWT ' + token,
                login: {
                    id: req.params.id,
                    role: newdata.role_id,
                }
            });
            // // console.log(projects);
            // res.json(data);
        });
    });
    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getProjects
    // Params        : 
    // Returns       : get project detail
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          : 

    router.get('/getProjects/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            Projects.findOne({
                where: {
                    id: req.params.id
                }
            }).then(projectData => {
                // console.log(projectData);
                res.send(projectData);
            });
        } else {
            return res.status(401).send('Invalid User');
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var user_id;
            // res.json(req.body);
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                var status = req.body.status
                Users.findAll({
                    include: [{
                        model: ProjectMemeberAssoc,
                        where: {
                            user_profile_id: user_id
                        },
                        include: [{
                            model: Projects,
                            where: {
                                cmp_id: cmp_id,
                                status: status
                            }
                        }]
                    }],

                }).then(resProjects => {
                    if (resProjects.length <= 0) {
                        res.json({
                            status: 0,
                            message: "Project not found!"
                        })
                    } else {
                        res.json(resProjects);
                    }
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var user_id;
            // res.json(req.body);
            // res.json(req.body);
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                var proId = req.body.id
                Users.findAll({
                    include: [{
                        model: ProjectMemeberAssoc,
                        where: {
                            user_profile_id: user_id
                        },
                        include: [{
                            model: Projects,
                            where: {
                                cmp_id: cmp_id,
                                id: proId
                            }
                        }]
                    }],

                }).then(resProjects => {
                    if (resProjects.length <= 0) {
                        res.json({
                            status: 0,
                            message: "Project not found!"
                        })
                    } else {
                        res.json(resProjects);
                    }
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })

        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/getNotifications', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var user_id = 74;
            var role = 4
            if (role == 4) {
                TimeExtentionNotification.findAll({
                    where: {
                        is_pm_viewed: false,
                        is_admin_viewed: false,
                        is_user_viewed: false
                    },
                    include: [{
                        model: TimeExtentionReq, as: 'xt',
                        where: {
                            req_status: 'Pending'
                        },
                        include: [{
                            model: Tasks,
                            // as: 'Task',
                            // raw:true,
                            include: [{
                                model: Modules,
                                // as: 'Module',
                                include: [{
                                    model: Projects,
                                    where: {
                                        cmp_id: cmp_id
                                    }

                                }]
                            }, {
                                model: Users,
                                // as: 'Users',
                                include: [{
                                    model: Login
                                }]
                            }]
                        }]
                    }]
                }).then(resReq => {
                    // // console.log(resReq.tbl_time_extension_request.tbl_project_task.tbl_project_module)
                    // TimeExtentionNotification.findAll({
                    //   where: {
                    //     is_pm_viewed: false,
                    //     is_admin_viewed: true,
                    //     is_user_viewed: false
                    //   },
                    //   include: [{
                    //     model:TimeExtentionReq,
                    //     where: {
                    //       req_status: 'Accepted'
                    //     }
                    //   }]
                    // }).then( resBack =>{
                    let response = {}
                    // response['back'] = resBack
                    response['req'] = resReq;
                    res.send(response);

                    //   }).catch(err =>{
                    //   res.json({
                    //     status: 0,
                    //     message: "Error occured! Try again!"
                    //   })
                    // })
                    // res.json(resReq)
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            }
            else if (role == 1) {

            }

        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    router.get('/getNotifications2', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            var id = decoded.id;

            var user_id;
            var role = decoded.role_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                if (role == 3) {

                    NewTaskNotification.findAll({
                        where: {
                            is_pm_viewed: false,
                            is_admin_viewed: false,
                            is_user_viewed: false
                        },
                        include: [{
                            model: NewTaskreq,
                            where: {
                                request_status: 'Pending'
                            },
                            include: [{

                                model: Modules,
                                include: [{
                                    model: Projects,
                                    where: {
                                        cmp_id: cmp_id
                                    }

                                }]
                            }, {
                                model: Users,
                                include: [{
                                    model: Login
                                }]
                            }]
                        }]
                    }).then(rex => {
                        NewTaskNotification.findAll({
                            where: {
                                is_pm_viewed: false,
                                is_admin_viewed: true,
                                is_user_viewed: false
                            },
                            include: [{
                                model: NewTaskreq,
                                where: {
                                    request_status: {
                                        [Op.in]: ['Accepted', 'Rejected']
                                    }
                                },
                                include: [{

                                    model: Modules,
                                    include: [{
                                        model: Projects,
                                        where: {
                                            cmp_id: cmp_id
                                        }
                                    }]
                                }, {
                                    model: Users,
                                    include: [{
                                        model: Login
                                    }]
                                }]
                            }]
                        }).then(resBack => {
                            let response = {}
                            response['back'] = resBack
                            response['req'] = rex;
                            res.send(response);
                        }).catch(err => {
                            res.json({
                                status: 0,
                                message: "Error in getting notifications!"
                            })
                        })
                    }).catch(err => {
                        res.json({
                            status: 0,
                            message: "Error in getting notifications!"
                        })
                    })
                }
                else if (role == 1) {
                    NewTaskNotification.findAll({
                        where: {
                            is_pm_viewed: false,
                            is_admin_viewed: false,
                            is_user_viewed: false
                        },
                        include: [{
                            model: NewTaskreq,
                            where: {
                                request_status: 'Approval'
                            },
                            include: [{

                                model: Modules,
                                include: [{
                                    model: Projects,
                                    where: {
                                        cmp_id: cmp_id
                                    }
                                }]
                            }, {
                                model: Users,
                                include: [{
                                    model: Login
                                }]
                            }]
                        }]
                    }).then(resBack => {
                        let response = {}
                        response['back'] = resBack
                        // response['req'] = rex;
                        res.send(response);
                    }).catch(err => {
                        res.json({
                            status: 0,
                            message: "Error in getting notifications!"
                        })
                    })
                }
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })

        } else {
            return res.status(401).send('Invalid User');
        }
    })

    //  ---------------------------------Start-------------------------------------------
    // Function      : closeNotifnewTaskReq
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018,
    // Desc          : get list of teams and stregth

    router.post('/closeNotifnewTaskReq', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var role_id = decoded.role_id
            id = req.body.id;
            closeNotifnewTaskReq(role_id, id);
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    function closeNotifnewTaskReq(role_id, id) {
        if (role_id == 3) {
            NewTaskNotification.update({
                is_pm_viewed: true
            }, {
                    where: {
                        id: id
                    }
                }).then(resUpdate => {
                    res.json({
                        status: 1,
                        message: "Notification closed!"
                    })
                }).catch(err => {
                    res.json({
                        status: 1,
                        message: "Notification closing failed!"
                    })
                })
        } else if (role_id == 1) {
            NewTaskNotification.update({
                is_admin_viewed: true
            }, {
                    where: {
                        id: id
                    }
                }).then(resUpdate => {
                    res.json({
                        status: 1,
                        message: "Notification closed!"
                    })
                }).catch(err => {
                    res.json({
                        status: 1,
                        message: "Notification closing failed!"
                    })
                })
        }
    }
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeNotifnewTaskReq
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018,
    // Desc          : get list of teams and stregth

    router.post('/closeNotifAproval', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var role_id = decoded.role_id
            id = req.body.id;
            closeNotifApproval(role_id, id);

            // }
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    function closeNotifApproval(role_id, id) {
        if (role_id == 3) {
            NewTaskNotification.update({
                is_pm_viewed: true
            }, {
                    where: {
                        id: id
                    }
                }).then(resUpdate => {
                    res.json({
                        status: 1,
                        message: "Notification closed!"
                    })
                }).catch(err => {
                    res.json({
                        status: 1,
                        message: "Notification closing failed!"
                    })
                })
        } else if (role_id == 1) {
            NewTaskNotification.update({
                is_admin_viewed: true
            }, {
                    where: {
                        id: id
                    }
                }).then(resUpdate => {
                    res.json({
                        status: 1,
                        message: "Notification closed!"
                    })
                }).catch(err => {
                    res.json({
                        status: 1,
                        message: "Notification closing failed!"
                    })
                })
        }
    }
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeNotifnewTaskReq
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018,
    // Desc          : get list of teams and stregth

    router.get('/getNewTaskRequests', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            var role_id = decoded.role_id;
            id = req.body.id;
            // console.log(cmp_id)
            if (role_id == 3) {
                NewTaskNotification.findAll({
                    // where: {
                    //     is_pm_viewed: false,
                    //     is_admin_viewed: false,
                    //     is_user_viewed: false
                    // },
                    include: [{
                        model: NewTaskreq,
                        required: true,

                        // where: {
                        //     request_status: 'Pending'
                        // },
                        include: [{

                            model: Modules,
                            required: true,
                            // attributes: ["id", "module_name", "project_id"],
                            // as:"pmodule",                            
                            include: [{
                                model: Projects,
                                required: true,

                                where: {
                                    cmp_id: cmp_id
                                }
                            }]
                        }, {
                            model: Users,
                            include: [{
                                model: Login
                            }]
                        }]
                    }]
                }).then(resBack => {
                    // let response = {}
                    // response['back'] = resBack
                    // response['req'] = rex;
                    res.send(resBack);
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error in getting task requests!"
                    })
                })
            } else if (role_id == 1) {
                NewTaskNotification.findAll({
                    // where: {
                    //     is_pm_viewed: false,
                    //     is_admin_viewed: false,
                    //     is_user_viewed: false
                    // },
                    include: [{
                        model: NewTaskreq,
                        required: true,

                        // where: {
                        //     request_status: 'Approval'
                        // },
                        include: [{

                            model: Modules,
                            required: true,

                            // attributes: ["id", "module_name", "project_id"],
                            // as:"pmodule", 
                            include: [{
                                model: Projects,
                                required: true,

                                where: {
                                    cmp_id: cmp_id
                                }
                            }]
                        }, {
                            model: Users,
                            include: [{
                                model: Login
                            }]
                        }]
                    }]
                }).then(resBack => {
                    // let response = {}
                    // response['back'] = resBack
                    // response['req'] = rex;
                    res.send(resBack);
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error in getting task requests!"
                    })
                })
            }

        } else {
            return res.status(401).send('Invalid User');
        }
    })

    //  ---------------------------------Start-------------------------------------------
    // Function      : get task request
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 03-04-2018
    // Last Modified : 03-04-2018,
    // Desc          : get task and details

    router.get('/getNewTaskRequest/:id', function (req, res) {
        console.log("con:" + Config.secret)
        console.log("con:" + Config.secret)
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            var role_id = decoded.role_id;
            id = req.params.id;
            //  console.log("\n\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+id);
            NewTaskreq.find({
                where: {
                    id: id,

                }, attributes: ['assigned_to_id', 'id', 'planned_hours', 'buffer_hours', 'description', 'planned_start_date', 'planned_end_date', 'attachment', 'reason', 'project_module_id', 'assigned_to_id', 'complexity_id', 'team_id', 'task_name', 'request_status'],
                include: [{
                    model: Modules,
                    include: [{
                        model: Projects,
                        where: {
                            cmp_id: cmp_id
                        },
                        // include: [{
                        //   model: ProjectMemeberAssoc,
                        //   include: [{
                        //     model: Users
                        //   }]
                        // }]
                    }]
                }, {
                    model: Users,
                    include: [{
                        model: Login
                    }]
                }]
            }).then(resBack => {
                // let response = {}
                // response['back'] = resBack
                // response['req'] = rex;
                // let projectId = resBack.tbl_project_module.project_id;
                // ProjectMemeberAssoc.findAll({
                //   where:{
                //     project_id: projectId
                //   },
                //   include: [{
                //     model: Users
                //   }]
                // }).then( resMembers =>{

                //   let response = {};
                //   response["data"] = resBack;
                //   response["members"] = resMembers;
                //   console.log(response);
                if (resBack == null || resBack == 'null') {
                    res.json({
                        status: 0,
                        message: "Request already accepted!"
                    })
                }
                else {
                    res.json(resBack);

                }
                // }).catch(err => {
                //   res.json({
                //     status: 0,
                //     message: "Error in getting task!"
                //   })
                // })
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error in getting task!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
    })

    //  ---------------------------------Start-------------------------------------------
    // Function      : getMembers
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018,
    // Desc          : get list of teams and stregth

    router.get('/getProjectsDetails/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            // res.json(req.body);
            console.log(req.params.id)
            var user_id = 74;
            Projects.find({
                where: {
                    id: req.params.id,
                    cmp_id: cmp_id
                },

                include: [{
                    model: ProjectMemeberAssoc,
                    include: [{
                        model: Users
                    }, {
                        model: ProjectTeam
                    }]
                }, {
                    model: Modules,

                    include: [{
                        model: Tasks,
                        include: [{
                            model: Users,
                        }]
                    }]
                }],

            }).then(resProjects => {
                if (resProjects.length <= 0) {
                    res.json({
                        status: 0,
                        message: "Project not found!"
                    })
                } else {
                    let count = 0;
                    resProjects.tbl_project_modules.forEach(element => {
                        element.tbl_project_tasks.forEach(ele => {
                            count = count + (ele.planned_hour + ele.buffer_hour);
                        });
                    });
                    // console.log(count)

                    res.json({ "data": resProjects, "hours": count });
                }
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error occured! Try again!"
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
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

    router.get('/checkRole/', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            //   var cmp_id = decoded._id;
            var role = decoded.role_id;
            res.json(role);
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-all-users
    // Params        : 
    // Returns       :  
    // Author        : Jooshifa
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018, Jooshifa
    // Desc          

    router.get('/get-complexity-percentage', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
            Complexity_percentage.findAll({

            }).then(Complexity_percentage => {
                //console.log(projects);
                res.json(Complexity_percentage);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : approveTask
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 08-03-2018
    // Last Modified :
    // Desc          : approve a new task

    router.post('/approveTask', function (req, res) {
        // console.log("hreeee");
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            role = decoded.role_id;
            var startDate = new Date(req.body.start_date);
            var endDate = new Date(req.body.end_date);
            start_time = req.body.start_time;
            end_time = req.body.end_time;
            var zero = 0;
            startDate.setHours(start_time.hour, start_time.minute, zero);
            endDate.setHours(end_time.hour, end_time.minute, zero);
            console.log(req.body)
            if (req.body.task_name == '' || req.body.team_id == 0 || req.body.req_id == 0 || req.body.planned_hour == 0 || req.body.assigned_person == '' || req.body.priority == '' || req.body.start_date == '' || req.body.start_time == '' || req.body.end_date == '' || req.body.end_time == '') {
                res.send({ success: false, msg: 'Please fill all required fields' });
                console.log("firs");
            }
            else if (startDate >= endDate) {
                res.send({ success: false, msg: 'End datetime should be greater than start date time' });
            }
            else {

                if (req.body.docSrc) {
                    timestamp = new Date().getTime().toString();
                    docName = req.body.id + timestamp + Math.floor(100000 + Math.random() * 900000);
                    // console.log(req.body.docSrc);
                    var base64 = decodeBase64Image(req.body.docSrc);
                    // console.log(base64);
                    require("fs").writeFile('../taskit/public/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
                    });
                    require("fs").writeFile('../taskit/angular/src/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
                    });
                }
                // var zero = 0;
                // var end_date_time = new Date(req.body.end_date).setHours(end_time.hour,end_time.minute,zero);
                // var start_date_time = new Date(req.body.start_date).setHours(start_time.hour,start_time.minute,zero);
                // console.log(end_date_time);
                // console.log(start_date_time);
                const newtaskReq = Tasks.build({
                    planned_hour: req.body.planned_hour,
                    buffer_hour: req.body.buffer_hour,
                    description: req.body.description,
                    priority: req.body.priority,
                    planned_start_date_time: startDate,
                    planned_end_date_time: endDate,
                    project_module_id: req.body.module_id,
                    assigned_to_id: req.body.assigned_id,
                    complexity_id: req.body.complexity,
                    project_team_id: req.body.team,
                    task_name: req.body.task_name,
                    project_team_id: req.body.team_id,
                    assigned_to_id: req.body.assigned_person,
                    task_type: req.body.task_type
                });
                newtaskReq.save().then(function (newRequest) {
                    // const newTaskNotif = new_task_req_notifications.build({
                    //     is_pm_viewed: false,
                    //     is_admin_viewed: false,
                    //     is_user_viewed: false,
                    //     new_task_id: newRequest.id
                    // });
                    if (role == 1) {
                        NewTaskNotification.update({
                            is_admin_viewed: true
                        }, {
                            where: {
                                new_task_id: req.body.req_id
                            }
                            }).then(function (newRequestNotification) {
                                NewTaskreq.update({
                                    request_status: "Accepted"
                                }, {
                                    where: {
                                        id: req.body.req_id
                                    }
                                    }).then(reqUpdate => {

                                        io.sockets.emit("newtaskrequestAccepted", {
                                            // expiredSocketId: newRequestNotification.id
                                        });
                                        res.send({ success: true, msg: "Request Approved!" });
                                    }).catch(err => {
                                        res.send({ success: false, msg: "Failed! Try again!" });

                                    })

                            });
                    } else {
                        NewTaskNotification.update({
                            is_pm_viewed: true
                        }, {
                            where: {
                                new_task_id: req.body.req_id
                            }
                            }).then(function (newRequestNotification) {
                                NewTaskreq.update({
                                    request_status: "Accepted"
                                }, {
                                    where: {
                                        id: req.body.req_id
                                    }
                                    }).then(reqUpdate => {

                                        io.sockets.emit("newtaskrequestAccepted", {
                                            // expiredSocketId: newRequestNotification.id
                                        });
                                        // console.log(newPlan);
                                        var id = decoded.id;
                                        // var role = req.body.id
                                        var user_id;
                                        Users.find({
                                            where: {
                                                login_id: id
                                            }
                                        }).then(resUser => {
                                            user_id = resUser.id;
                                            saveLog("New task request approved!", user_id)
                                        })
                                        res.send({ success: true, msg: "Request Approved!" });
                                    }).catch(err => {
                                        res.send({ success: false, msg: "Failed! Try again!" });

                                    })
                            });
                    }

                });
            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : rejectTaskRequest
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 08-03-2018
    // Last Modified :
    // Desc          : reject a new task

    router.post('/rejectTaskRequest/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var role = decoded.role_id;
            // });
            if (role == 1) {
                NewTaskNotification.update({
                    is_admin_viewed: true
                }, {
                        where: {
                            new_task_id: req.params.id
                        }
                    }).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status: "Rejected"
                        }, {
                                where: {
                                    id: req.params.id
                                }
                            }).then(reqUpdate => {

                                io.sockets.emit("newtaskrequestRejected", {
                                    // expiredSocketId: newRequestNotification.id
                                });
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("New task request rejected!", user_id)
                                })
                                res.send({ success: true, msg: "Request rejected!" });
                            }).catch(err => {
                                res.send({ success: false, msg: "Failed! Try again!" });

                            })

                    });
            } else if (role == 3) {
                NewTaskNotification.update({
                    is_pm_viewed: true
                }, {
                        where: {
                            new_task_id: req.params.req_id
                        }
                    }).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status: "Rejected"
                        }, {
                                where: {
                                    id: req.params.req_id
                                }
                            }).then(reqUpdate => {

                                io.sockets.emit("newtaskrequestRejected", {
                                    // expiredSocketId: newRequestNotification.id
                                });
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("New task request rejected!", user_id)
                                })
                                res.send({ success: true, msg: "Request rejected!" });
                            }).catch(err => {
                                res.send({ success: false, msg: "Failed! Try again!" });

                            })
                    });
            } else {
                res.send({ success: false, msg: "Error occured!" });

            }
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : rejectTaskRequest
    // Params        : 
    // Returns       : 
    // Author        : MANU PRASAD
    // Date          : 08-03-2018
    // Last Modified :
    // Desc          : reject a new task

    router.post('/sendApproval/:id', function (req, res) {
        // console.log("hreeee");
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;

            NewTaskNotification.update({
                is_admin_viewed: false,
                is_pm_viewed: false,
                is_user_viewed: false,
            }, {
                    where: {
                        new_task_id: req.params.id
                    }
                }).then(function (newRequestNotification) {
                    NewTaskreq.update({
                        request_status: "Approval"
                    }, {
                            where: {
                                id: req.params.id
                            }
                        }).then(reqUpdate => {

                            io.sockets.emit("newtaskrequestApproval", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            // console.log(newPlan);
                            var id = decoded.id;
                            // var role = req.body.id
                            var user_id;
                            Users.find({
                                where: {
                                    login_id: id
                                }
                            }).then(resUser => {
                                user_id = resUser.id;
                                saveLog("New task request send for approval!", user_id)
                            })
                            res.send({ success: true, msg: "Send for Approval!" });
                        }).catch(err => {
                            res.send({ success: false, msg: "Failed! Try again!" });

                        })
                });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getTasksByUser
    // Params        : pro_id, user_id
    // Returns       : 
    // Author        : Rinsha
    // Date          :  17-04-2018
    // Last Modified : 
    // Desc          : 
    router.post('/getTasksByUser/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.body.user_id == "all") {
            Modules.findAll({
                where: { project_id: req.params.id },
                include: [
                    {
                        model: Tasks,
                        include: [
                            {
                                model: task_status_assoc,

                                include: [
                                    {
                                        model: task_statuses,
                                    }
                                ],
                            }
                        ],
                    },
                ]
            }).then(myTasks => {
                res.send(myTasks);
            });
        }
        else {
            Modules.findAll({
                where: { project_id: req.params.id },
                include: [
                    {
                        model: Tasks,
                        where: { assigned_to_id: req.body.user_id },
                        include: [
                            {
                                model: task_status_assoc,

                                include: [
                                    {
                                        model: task_statuses,
                                    }
                                ],
                            }
                        ],
                    },
                ]
            }).then(myTasks => {
                res.send(myTasks);
            });
        }

    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getTasksByProject
    // Params        : pro_id
    // Returns       : 
    // Author        : Rinsha
    // Date          :  17-04-2018
    // Last Modified : 
    // Desc          : 
    router.get('/getTasksByProject/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Modules.findAll({
            where: { project_id: req.params.id },
            include: [
                {
                    model: Project
                },
                {
                    model: Tasks,
                    include: [
                        {
                            model: task_status_assoc,

                            include: [
                                {
                                    model: task_statuses,
                                }
                            ],
                        }
                    ],
                },
            ]
        }).then(myTasks => {
            res.send(myTasks);
        });
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : getTasksforResourceGraph
    // Params        : pro_id, users
    // Returns       : 
    // Author        : Rinsha
    // Date          :  18-04-2018
    // Last Modified : 
    // Desc          :  
    router.post('/getTasksforResourceGraph/:id', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        // console.log(req.body.user);
        users = req.body.user;
        var offensesByYear = [];
        async.eachOfSeries(users, function (user, key, callback) {
            // users.forEach(user => {
            var last_status_id = 0;
            var total_tasks = 0;
            var new_tasks = 0;
            var in_progress_tasks = 0;
            var completed_tasks = 0;
            var onHold_tasks = 0;
            var paused_tasks = 0;
            var new_tasksHr = 0;
            var in_progress_tasksHr = 0;
            var completed_tasksHr = 0;
            var onHold_tasksHr = 0;
            var paused_tasksHr = 0;
            var totalCompletedHr = 0;
            Modules.findAll({
                where: { project_id: req.params.id },
                include: [
                    {
                        model: Tasks,
                        where: { assigned_to_id: user.id },
                        include: [
                            {
                                model: task_status_assoc,

                                include: [
                                    {
                                        model: task_statuses,
                                    }
                                ],
                            }
                        ],
                    },
                ]
            }).then(data => {
                data.forEach(module => {
                    total_tasks = total_tasks + module.tbl_project_tasks.length;
                    module.tbl_project_tasks.forEach(task => {
                        last_status_id = 0;
                        last_status = {};
                        task.tbl_task_status_assocs.forEach(statuses => {
                            if (statuses.id > last_status_id) {
                                last_status_id = statuses.id;
                                last_status = statuses;
                            }
                        });
                        if (last_status && last_status.status_id == 1) {
                            new_tasks = new_tasks + 1;
                            new_tasksHr = new_tasksHr + task.planned_hour + task.buffer_hour;
                        }
                        if (last_status && last_status.status_id == 2) {
                            paused_tasks = paused_tasks + 1;
                            paused_tasksHr = paused_tasksHr + task.planned_hour + task.buffer_hour;
                        }
                        if (last_status && last_status.status_id == 3) {
                            in_progress_tasks = in_progress_tasks + 1;
                            in_progress_tasksHr = in_progress_tasksHr + task.planned_hour + task.buffer_hour;
                        }
                        if (last_status && last_status.status_id == 4) {
                            onHold_tasks = onHold_tasks + 1;
                            onHold_tasksHr = onHold_tasksHr + task.planned_hour + task.buffer_hour;
                        }
                        if (last_status && last_status.status_id == 5) {
                            completed_tasks = completed_tasks + 1;
                            completed_tasksHr = completed_tasksHr + task.planned_hour + task.buffer_hour;
                            totalCompletedHr = totalCompletedHr + task.actual_hour;
                        }
                    });
                });
                offensesByYear.push(
                    {
                        "New- Yet to Start": new_tasksHr,
                        "In Progress": in_progress_tasksHr,
                        "Completed": completed_tasksHr,
                        "On Hold": onHold_tasksHr,
                        "Paused": paused_tasksHr,
                        "totalCompletedHr": totalCompletedHr
                    });
                callback();
            });
        }, () => {

            res.send(offensesByYear)
        });
    });
    // -----------------------------------End------------------------------------------

    // ---------------------------------new Start-------------------------------------------
    // Function      : getHoursforResourceGraph
    // Params        :
    // Returns       : 
    // Author        : Rinsha
    // Date          :  18-04-2018
    // Last Modified : 
    // Desc          : 
    router.post('/getHoursforResourceGraph', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.cmp_id;
            // var project_names = [];
            var offensesByYear = [];
            // Project.findAll({
            //     where: {
            //         cmp_id: cmp_id,
            //         [Op.or]: [{ status: "Planned", status: "Completed", status: "In Progress" }]
            //     }
            // }).then(projects => {
            projects = req.body.project;
            async.eachOfSeries(projects, function (project, key, callback) {
                var last_status_id = 0;
                var total_tasks = 0;
                var new_tasks = 0;
                var in_progress_tasks = 0;
                var completed_tasks = 0;
                var onHold_tasks = 0;
                var paused_tasks = 0;
                var new_tasksHr = 0;
                var in_progress_tasksHr = 0;
                var completed_tasksHr = 0;
                var onHold_tasksHr = 0;
                var paused_tasksHr = 0;
                var totalCompletedHr = 0;
                Modules.findAll({
                    where: { project_id: project.id },
                    include: [
                        {
                            model: Tasks,
                            include: [
                                {
                                    model: task_status_assoc,
                                    include: [
                                        {
                                            model: task_statuses,
                                        }
                                    ],
                                }
                            ],
                        },
                    ]
                }).then(data => {
                    data.forEach(module => {
                        total_tasks = total_tasks + module.tbl_project_tasks.length;
                        module.tbl_project_tasks.forEach(task => {
                            last_status_id = 0;
                            last_status = {};
                            task.tbl_task_status_assocs.forEach(statuses => {
                                if (statuses.id > last_status_id) {
                                    last_status_id = statuses.id;
                                    last_status = statuses;
                                }
                            });
                            if (last_status && last_status.status_id == 1) {
                                new_tasks = new_tasks + 1;
                                new_tasksHr = new_tasksHr + task.planned_hour + task.buffer_hour;
                            }
                            if (last_status && last_status.status_id == 2) {
                                paused_tasks = paused_tasks + 1;
                                paused_tasksHr = paused_tasksHr + task.planned_hour + task.buffer_hour;
                            }
                            if (last_status && last_status.status_id == 3) {
                                in_progress_tasks = in_progress_tasks + 1;
                                in_progress_tasksHr = in_progress_tasksHr + task.planned_hour + task.buffer_hour;
                            }
                            if (last_status && last_status.status_id == 4) {
                                onHold_tasks = onHold_tasks + 1;
                                onHold_tasksHr = onHold_tasksHr + task.planned_hour + task.buffer_hour;
                            }
                            if (last_status && last_status.status_id == 5) {
                                completed_tasks = completed_tasks + 1;
                                completed_tasksHr = completed_tasksHr + task.planned_hour + task.buffer_hour;
                                totalCompletedHr = totalCompletedHr + task.actual_hour;
                            }
                        });
                    });
                    offensesByYear.push(
                        {
                            "New- Yet to Start": new_tasksHr,
                            "In Progress": in_progress_tasksHr,
                            "Completed": completed_tasksHr,
                            "On Hold": onHold_tasksHr,
                            "Paused": paused_tasksHr,
                            "totalCompletedHr": totalCompletedHr
                        });
                    callback();
                });
            }, () => {

                res.send(offensesByYear);
            });
            // });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // -----------------------------------End------------------------------------------
    // -----------------------------------Start------------------------------------------
    // Function      : get-break-time
    // Params        :
    // Returns       :
    // Author        : MANU
    // Date          : 12-4-2018
    // Last Modified : 12-4-2018,
    // Desc

    router.post('/getDayBreaks', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;

            cmp_break.findAll({
                where: { cmp_id: cmp_id },
                include: [
                    {
                        model: cmp_break_assoc,
                        where: {
                            day_no: req.body.day,
                            week_no: req.body.week
                        }
                    }
                ]
            }).then(cmp_break => {
                // console.log(cmp_breaks);
                res.json(cmp_break);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-break-time
    // Params        :
    // Returns       :
    // Author        : MANU
    // Date          : 12-4-2018
    // Last Modified : 12-4-2018,
    // Desc

    router.post('/getDayDetails', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            //   var cmp_id = 1;
            cmp_off_day_assoc.findAll({
                where: {
                    day_no: req.body.day,
                    week_no: req.body.week,
                    cmp_id: cmp_id
                }
            }).then(resOff => {
                if (resOff.length > 0) {
                    res.json(resOff)
                } else {
                    WorkingTimeAssoc.findAll({
                        where: {
                            day_no: req.body.day,
                            week_no: req.body.week
                        },
                        include: [{
                            model: WorkingTime,
                            where: {
                                cmp_id: cmp_id
                            }
                        }]
                    }).then(resTime => {
                        if (resTime.length > 0) {
                            temp = [];
                            temp.push(resTime[0].tbl_cmp_work_time);
                            res.json(temp)
                        }
                        else {
                            WorkingTime.findAll({
                                where: {
                                    is_default: true,
                                    cmp_id: cmp_id
                                }
                            }).then(resDefTime => {
                                res.json(resDefTime);
                            })
                        }
                    }).catch(err => {
                        res.json({ status: 0, message: "Error occured!" })
                    })
                }
            })

            // cmp_break.findAll({
            //     where: { cmp_id: 1 },
            //     include: [
            //         {
            //             model: cmp_break_assoc,
            //             where: {
            //                 day_no: req.body.day,
            //                 week_no: req.body.week
            //             }
            //         }
            //     ]
            // }).then(cmp_break => {
            //     // console.log(cmp_breaks);
            //     res.json(cmp_break);
            // });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-break-time
    // Params        :
    // Returns       :
    // Author        : MANU
    // Date          : 12-4-2018
    // Last Modified : 12-4-2018,
    // Desc

    router.post('/saveDayBreak', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            //   console.log(req.body.title)
            if (req.body.title == '' || req.body.day == '' || req.body.week == '') {
                res.json({
                    status: 0,
                    message: "Title empty!"
                })
            } else {
                Break.build({
                    title: req.body.title,
                    cmp_id: cmp_id,
                    start_time: req.body.startTime.hour + ":" + req.body.startTime.minute,
                    end_time: req.body.endTime.hour + ":" + req.body.endTime.minute,
                    is_default: false
                }).save().then(resSave => {
                    BreakAssoc.build({
                        day_no: req.body.day,
                        week_no: req.body.week,
                        break_id: resSave.id
                    }).save().then(resSaved => {
                        // console.log(newPlan);
                        var id = decoded.id;
                        // var role = req.body.id
                        var user_id;
                        Users.find({
                            where: {
                                login_id: id
                            }
                        }).then(resUser => {
                            user_id = resUser.id;
                            saveLog("Day break saved!", user_id)
                        })
                        res.json({
                            status: 1,
                            message: "Successfully saved!"
                        })
                    }).catch(err => {
                        res.json({
                            status: 0,
                            message: "An error occured! Try again!"
                        })
                    })

                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "An error occured! Try again!"
                    })
                })
            }
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get-break-time
    // Params        :
    // Returns       :
    // Author        : MANU
    // Date          : 12-4-2018
    // Last Modified : 12-4-2018,
    // Desc

    router.post('/deleteExtraBreak/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            //   var cmp_id = 1;
            // console.log(req.params.id)
            BreakAssoc.destroy({
                where: {
                    break_id: parseInt(req.params.id),
                    // cmp_id: cmp_id
                }
            }).then(resDel => {
                Break.destroy({
                    where: {
                        id: req.params.id,
                        cmp_id: cmp_id
                    }
                }).then(resDel2 => {
                    // console.log(newPlan);
                    var id = decoded.id;
                    // var role = req.body.id
                    var user_id;
                    Users.find({
                        where: {
                            login_id: id
                        }
                    }).then(resUser => {
                        user_id = resUser.id;
                        saveLog("Day break deleted!", user_id)
                    })
                    res.json({
                        status: 1,
                        message: "Break deleted Successfully!"
                    })
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "An error occured! Try again!"
                    })
                })

            }).catch(err => {
                res.json({
                    status: 0,
                    message: "An error occured! Try again!"
                })
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });

    // ----------------------------------End-----------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : saveDayBreak
    // Params        :
    // Returns       :
    // Author        : MANU
    // Date          : 12-4-2018
    // Last Modified : 12-4-2018,
    // Desc
    router.post('/saveDayWorkTime', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            console.log(req.body)
            if (req.body.holiday == true) {
                WorkingTimeAssoc.findAll({
                    where: {
                        day_no: req.body.day,
                        week_no: req.body.week
                    },
                    include: [{
                        model: WorkingTime,
                        wher: {
                            cmp_id: cmp_id
                        }
                    }]
                }).then(resFind => {
                    // res.json(resFind);
                    if (resFind.length > 0) {
                        WorkingTimeAssoc.destroy({
                            where: {
                                id: resFind[0].id
                            }
                        }).then(resDestroy => {
                            // res.json(resDestroy);
                            WorkingTime.destroy({
                                where: {
                                    id: resFind[0].cmp_work_time_id
                                }
                            }).then(resDes => {
                                cmp_off_day_assoc.findAll({
                                    where: {
                                        day_no: req.body.day,
                                        week_no: req.body.week,
                                        cmp_id: cmp_id
                                    }
                                }).then(resOff => {
                                    if (resOff.length == 0) {
                                        cmp_off_day_assoc.build({
                                            day_no: req.body.day,
                                            week_no: req.body.week,
                                            cmp_id: cmp_id
                                        }).save().then(resx => {
                                            // console.log(newPlan);
                                            var id = decoded.id;
                                            // var role = req.body.id
                                            var user_id;
                                            Users.find({
                                                where: {
                                                    login_id: id
                                                }
                                            }).then(resUser => {
                                                user_id = resUser.id;
                                                saveLog("Day work time saved!", user_id)
                                            })
                                            res.json({
                                                status: 1,
                                                message: "Successfully saved!"
                                            })
                                        }).catch(err => {
                                            console.log(err)
                                            res.json({
                                                status: 0,
                                                message: "An error occured! Try again!"
                                            })
                                        })
                                    } else {
                                        res.json({
                                            status: 0,
                                            message: "Already assigned as off day!"
                                        })
                                    }
                                }).catch(err => {
                                    console.log(err)
                                    res.json(err)
                                })
                            }).catch(err => {
                                console.log(err)
                                res.json(err)
                            })
                        }).catch(err => {
                            console.log(err)
                            res.json(err)
                        })
                    } else {
                        cmp_off_day_assoc.findAll({
                            where: {
                                day_no: req.body.day,
                                week_no: req.body.week,
                                cmp_id: cmp_id
                            }
                        }).then(resOff => {
                            if (resOff.length > 0) {
                                // console.log(newPlan);
                                var id = decoded.id;
                                // var role = req.body.id
                                var user_id;
                                Users.find({
                                    where: {
                                        login_id: id
                                    }
                                }).then(resUser => {
                                    user_id = resUser.id;
                                    saveLog("Assigned off day!", user_id)
                                })
                                res.json({
                                    status: 0,
                                    message: "Already assigned as off day!"
                                })
                            } else {
                                cmp_off_day_assoc.build({
                                    day_no: req.body.day,
                                    week_no: req.body.week,
                                    cmp_id: cmp_id
                                }).save().then(resx => {
                                    // console.log(newPlan);
                                    var id = decoded.id;
                                    // var role = req.body.id
                                    var user_id;
                                    Users.find({
                                        where: {
                                            login_id: id
                                        }
                                    }).then(resUser => {
                                        user_id = resUser.id;
                                        saveLog("Assigned off day!", user_id)
                                    })
                                    res.json({
                                        status: 1,
                                        message: "Successfully saved!"
                                    })
                                }).catch(err => {
                                    console.log(err)
                                    res.json({
                                        status: 0,
                                        message: "An error occured! Try again!"
                                    })
                                })
                            }
                        })

                    }

                }).catch(err => {
                    console.log(err)
                    res.json(err)
                })
            } else {
                if (compareTime(req.body.startTime.hour + ":" + req.body.startTime.minute, req.body.endTime.hour + ":" + req.body.endTime.minute)) {
                    console.log("gfhgvhjh")
                    cmp_off_day_assoc.findAll({
                        where: {
                            day_no: req.body.day,
                            week_no: req.body.week,
                            cmp_id: cmp_id
                        }
                    }).then(resOff => {
                        if (resOff.length > 0) {
                            cmp_off_day_assoc.destroy({
                                where: {
                                    id: resOff[0].id
                                }
                            }).then(resDel => {
                                WorkingTimeAssoc.findAll({
                                    where: {
                                        day_no: req.body.day,
                                        week_no: req.body.week
                                    },
                                    include: [{
                                        model: WorkingTime,
                                        wher: {
                                            cmp_id: cmp_id
                                        }
                                    }]
                                }).then(resWrk => {
                                    if (resWrk.length > 0) {
                                        WorkingTime.update({
                                            start_time: req.body.startTime.hour + ":" + req.body.startTime.minute,
                                            end_time: req.body.endTime.hour + ":" + req.body.endTime.minute,
                                        }, {
                                                where: {
                                                    id: resWrk[0].cmp_work_time_id
                                                }
                                            }).then(resUpdate => {
                                                if (resUpdate[0] > 0) {
                                                    // console.log(newPlan);
                                                    var id = decoded.id;
                                                    // var role = req.body.id
                                                    var user_id;
                                                    Users.find({
                                                        where: {
                                                            login_id: id
                                                        }
                                                    }).then(resUser => {
                                                        user_id = resUser.id;
                                                        saveLog("Day work time saved!", user_id)
                                                    })
                                                    res.json({
                                                        status: 1,
                                                        message: "Successfully saved!"
                                                    })
                                                }
                                                else {
                                                    res.json({
                                                        status: 1,
                                                        message: "Error occured!"
                                                    })
                                                }
                                            })
                                    } else {
                                        WorkingTime.build({
                                            title: req.body.startTime.hour + ":" + req.body.startTime.minute + '-' + req.body.endTime.hour + ":" + req.body.endTime.minute,
                                            cmp_id: cmp_id,
                                            start_time: req.body.startTime.hour + ":" + req.body.startTime.minute,
                                            end_time: req.body.endTime.hour + ":" + req.body.endTime.minute,
                                            is_default: false
                                        }).save().then(resSave => {
                                            WorkingTimeAssoc.build({
                                                day_no: req.body.day,
                                                week_no: req.body.week,
                                                cmp_work_time_id: resSave.id
                                            }).save().then(resSaved => {
                                                // console.log(newPlan);
                                                var id = decoded.id;
                                                // var role = req.body.id
                                                var user_id;
                                                Users.find({
                                                    where: {
                                                        login_id: id
                                                    }
                                                }).then(resUser => {
                                                    user_id = resUser.id;
                                                    saveLog("Day working time saved!", user_id)
                                                })
                                                res.json({
                                                    status: 1,
                                                    message: "Successfully saved!"
                                                })
                                            }).catch(err => {
                                                // console.log(err);
                                                res.json({
                                                    status: 0,
                                                    message: "An error occured! Try again!"
                                                })
                                            })

                                        }).catch(err => {
                                            console.log(err);
                                            res.json({
                                                status: 0,
                                                message: "An error occured! Try again!"
                                            })
                                        })
                                    }
                                })
                            })
                        } else {
                            WorkingTimeAssoc.findAll({
                                where: {
                                    day_no: req.body.day,
                                    week_no: req.body.week
                                },
                                include: [{
                                    model: WorkingTime,
                                    wher: {
                                        cmp_id: cmp_id
                                    }
                                }]
                            }).then(resWrk => {
                                if (resWrk.length > 0) {
                                    WorkingTime.update({
                                        start_time: req.body.startTime.hour + ":" + req.body.startTime.minute,
                                        end_time: req.body.endTime.hour + ":" + req.body.endTime.minute,
                                    }, {
                                            where: {
                                                id: resWrk[0].cmp_work_time_id
                                            }
                                        }).then(resUpdate => {
                                            if (resUpdate[0] > 0) {
                                                res.json({
                                                    status: 1,
                                                    message: "Successfully saved!"
                                                })
                                            }
                                            else {
                                                res.json({
                                                    status: 1,
                                                    message: "Error occured!"
                                                })
                                            }
                                        })
                                } else {
                                    WorkingTime.build({
                                        title: req.body.startTime.hour + ":" + req.body.startTime.minute + '-' + req.body.endTime.hour + ":" + req.body.endTime.minute,
                                        cmp_id: cmp_id,
                                        start_time: req.body.startTime.hour + ":" + req.body.startTime.minute,
                                        end_time: req.body.endTime.hour + ":" + req.body.endTime.minute,
                                        is_default: false
                                    }).save().then(resSave => {
                                        WorkingTimeAssoc.build({
                                            day_no: req.body.day,
                                            week_no: req.body.week,
                                            cmp_work_time_id: resSave.id
                                        }).save().then(resSaved => {
                                            // console.log(newPlan);
                                            var id = decoded.id;
                                            // var role = req.body.id
                                            var user_id;
                                            Users.find({
                                                where: {
                                                    login_id: id
                                                }
                                            }).then(resUser => {
                                                user_id = resUser.id;
                                                saveLog("Day time saved!", user_id)
                                            })
                                            res.json({
                                                status: 1,
                                                message: "Successfully saved!"
                                            })
                                        }).catch(err => {
                                            // console.log(err);
                                            res.json({
                                                status: 0,
                                                message: "An error occured! Try again!"
                                            })
                                        })

                                    }).catch(err => {
                                        console.log(err);
                                        res.json({
                                            status: 0,
                                            message: "An error occured! Try again!"
                                        })
                                    })
                                }
                            })
                        }
                    })

                } else {
                    res.json({
                        satus: 0,
                        message: "Start time is greater than end time!"
                    })
                }
            }
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
 //  ---------------------------------Start-------------------------------------------
    // Function      : get task request
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 03-04-2018
    // Last Modified : 03-04-2018,
    // Desc          : get task and details

    router.get('/getAccessRightsforRole', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var cmp_id = 1;
            var role_id = decoded.role_id;
            AccessRightsAssoc.findAll({
                // where:{
                //     role_id: role_id,
                //     // cmp_id: cmp_id
                // }
            }).then(resRights => {
                res.json(resRights)
            })
        }
        })
    // ----------------------------------End-----------------------------------
    
    // ---------------------------------Start-------------------------------------------
    // Function      : getdataforProjectVsStatusGraph
    // Params        : projects
    // Returns       : 
    // Author        : Rinsha
    // Date          :  19-04-2018
    // Last Modified : 
    // Desc          : 
    router.post('/getdataforProjectVsStatusGraph', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        var data = [];
        projects = req.body.project;
        async.eachOfSeries(projects, function (project, key, callback) {
            Modules.findAll({
                where: { project_id: project.id },
                include: [
                    {
                        model: Project
                    },
                    {
                        model: Tasks,
                        include: [
                            {
                                model: task_status_assoc,

                                include: [
                                    {
                                        model: task_statuses,
                                    }
                                ],
                            }
                        ],
                    },
                ]
            }).then(myTasks => {
                data.push(myTasks);
                callback();
            });
        }, () => {

            res.send(data);
        });
    });
    // -----------------------------------End------------------------------------------

    function compareTime(startTime, endTime) {
        console.log(startTime + '\n' + endTime)

        if (Date.parse('01/01/2011 ' + endTime) > Date.parse('01/01/2011 ' + startTime)) {
            return true;
        } else {

            return false;
        }
    }
    function saveLog(action, userId) {
        Log.build({
            action: action,
            user_profile_id: userId
        }).save().then(resLog => {
            return true;
        }).catch(err => {
            return false;
        })
    }
    module.exports = router;
    return router;
}
module.exports = returnRouter;


