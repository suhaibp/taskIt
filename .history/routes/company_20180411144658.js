
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
var ip = require("ip");
'use strict';

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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            cmp_id = decoded.id;
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
                            res.json({ success: true, msg: "Success" });
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
    // Function      : get all projects
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 07-03-2018
    // Last Modified : 07-03-2018, Rinsha
    // Desc          : getAllProjects 
    router.get('/getAllProject', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
                                    project_code: cmp_code + "PR/" + ('0' + projectLength).slice(-3) + "/" + cDate,
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
            // console.log(login);
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
                                    // console.log(array.length);
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

                // console.log("else if");

                comparePassword(password, login.password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    }
                    //    -------------------------------------- if  match ------------------------------------------
                    if (isMatch) {
                        if (login.block_status == true) {

                            return res.json({ success: false, msg: 'Account blocked' });
                            // console.log("Account blocked");
                        }
                        else if (login.delete_status == true) {

                            return res.json({ success: false, msg: 'Account deleted' });
                            // console.log("Account deleted");
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
                                // console.log("else condition");
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
                                            // console.log(array.length);
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
    // Date          : 07-03-201
    // Last Modified : 07-03-2018, Jooshifa
    // Desc          : 

    router.get('/getLoggedinCompany', (req, res, next) => {
        // const token = jwt.sign(login.toJSON(), Config.secret, { expiresIn: 60400 });
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4),
                decoded;

            decoded = jwt.verify(authorization, Config.secret);
            res.json(decoded);
            // console.log(decoded);
        } else {
            res.json('');
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
    router.post('/forgotPassword', function (req, res) {
        // console.log(req.body);
        if (req.body.email == 'undefined' || req.body.email == '' || req.body.email == null || req.body.email == []) {
            return res.json({ success: false, msg: 'Email is required' });
        }
        Login.findOne({
            where: {
                email: req.body.email
            }
        }).then(login => {
            if (!login || login == 'undefined' || login == '' || login == null || login == []) {
                console.log("Email not found! Plase enter a valid email");
                return res.json({ success: false, msg: 'Email not found! Plase enter a valid email' });
            }
            else if (login.block_status == true) {
                // console.log("Account blocked");
                return res.json({ success: false, msg: 'Account blocked' });
            }
            else if (login.delete_status == true) {
                // console.log("Account deleted");
                return res.json({ success: false, msg: 'Account deleted' });
            }
            else if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                // console.log("Company not verified'");
                return res.json({ success: false, msg: 'Company not verified' });
            }
            // else if (login.is_profile_completed == false) {
            //     console.log("Profile not completed'");
            //     return res.json({ success: false, msg: 'Profile not completed' });
            // }
            else if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
                // console.log("captcah not exist");
                return res.json({ "success": false, "msg": "Please select captcha" });
            }
            else {
                const secretKey = '6LdWoEsUAAAAACxK3AVq8ynsUfBvbN_gESW8AXms';
                const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;
                request(verifyUrl, (err, response, body) => {
                    body = JSON.parse(body);
                    if (body.success !== undefined && !body.success) {
                        // console.log("captchs not success");
                        return res.json({ "success": false, "msg": "Failed captcha verification" });
                    }
                    else if (body.success) {
                        // console.log("captchs ");
                        var password = generator.generate({
                            length: 10,
                            numbers: true

                        });
                        // console.log("assword created" );
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
                                        // console.log(login);
                                        // console/.log("passeord updarted");
                                        Company.findOne({
                                            where: {
                                                login_id: login.id
                                            }
                                        }).then(company => {
                                            // console.log("routes is oke");
                                            // emailTemplate.sendResetPasswordMail(req.body.email, company.cmp_name, password);
                                            emailTemplate.sendResetPasswordMail(req.body.email, password);
                                            return res.json({ "success": true, "msg": "Reset password successfully.Please check your email" });
                                        });
                                    });
                                // console.log(password + "    password");
                                //    console.log(hash + "   bcrpted password");
                            })
                        })
                        // return res.json({ "success": false, "msg": "Captcha Verified Successfully" });
                    }
                });
                // console.log("Email found");
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
        Login.findOne({
            include: [{
                model: Company, where: { id: req.params.id }
            }]
        }).then(data => {
            // console.log(data.is_profile_completed);
            res.json(data);
        });
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
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

    router.get('/get_cmp_size', function (req, res) {
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

    router.post('/register_company', function (req, res) {
        try {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            req.body.forEach(element => {
                if (element.ans == '') {
                    res.json({ status: 0, message: "Please try again!" });
                    res.end();
                }
            });
            // console.log(validateEmail(req.body[0].ans));
            if (!reg.test(req.body[0].ans.toLowerCase()) || !(/^\d+$/.test(req.body[4].ans))) {
                res.send({ status: 0, message: "Check email and phone number!" });
                res.end();

            }
            else {
                if (typeof req.body.id == 'undefined') {
                    Login.findAll(
                        { where: { email: req.body[0].ans } }

                    ).then(login => {
                        //console.log(projects);
                        if (login.length == 0) {
                            var newPassword;
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(req.body[7].ans, salt, (err, hash) => {
                                    // console.log(hash);
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
                                    // console.log(newLogin);
                                    newLogin.save().then(resLogin => {
                                        console.log(resLogin.id)

                                        // if(resLogin.length>0){
                                        // res.json(resLogin)
                                        // console.log("hh")
                                        Plan.find({
                                            where: { is_defualt: true }
                                        }).then(resPlan => {
                                            console.log(req.body);
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

                                            // console.log(newCompany);
                                            newCompany.save().then((resCmp) => {
                                                console.log("resCmp");
                                                console.log(resCmp);
                                                Login.update({cmp_id:resCmp.id},{where:{id:resLogin.id}}).then(resLog => {
                                                    emailTemplate.sendVerificationMail(req.body[0].ans, req.body[1].ans, req.body[9].ans);

                                                    res.json({ status: 1, message: "Registered! Check your Email!" })
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
        //    console.log(req.body[0].ans + "      company name");
        //    console.log(req.body[1].ans+ "      company code");
        //    console.log(req.body[2].ans + "      company industry");
        //    console.log(req.body[3].ans + "      contact number");
        //    console.log(req.body[4].ans + "      company size");
        //    console.log(req.body[5].ans + "      why choosen");
        //    console.log(req.body[6].ans + "      id");
        // res.json(req.body);
        Company.findOne({
            where: {
                id: req.body[6].ans
            }
        }).then(companyData => {
            // console.log(companyData)

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
                        is_profile_completed: true
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
            raw: true
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
                { model: Projects_member_assoc, required: true },
                { model: Login, where: { [Op.and]: [{ block_status: false, delete_status: false }] }, required: true }

            ],
            raw: true
        }).then(data => {
            console.log(data);
            return res.json(data);
        });
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        // res.json(req.body);
        var teamName;
        var team = [];
        Teams.findAll().then(teams => {
            // console.log(projects);
            teamName = teams.team_name;
            // teams.forEach(element => {
            async.eachOfSeries(teams, function (element, key, callback) {
                TeamAssoc.findAndCountAll({
                    where: { team_id: element.id }
                }).then(resTeam => {
                    team.push({ team_name: element.team_name, count: resTeam.count, team_id: element.id })
                    callback();
                })
            }, () => {
                res.json(team);

            })

            // });
        });

        // }
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
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
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
    });

    // ----------------------------------End-----------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : get-qc-users
    // Params        :
    // Returns       : QC details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          :

    router.get('/get-qc-users', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
        User_profile.findAll({
            // where: { cmp_id: decoded.cmp_id },
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
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
    });
    // ----------------------------------End-----------------------------------
   // ---------------------------------Start-------------------------------------------
    // Function      : get-qc-users
    // Params        :
    // Returns       : QC details
    // Author        : Jooshifa
    // Date          : 14-03-2018
    // Last Modified : 14-03-2018, Jooshifa
    // Desc          :

    router.get('/get-modules-tasks/:id', function (req, res) {
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Projects.findById(req.params.id).then(project => {
            res.json(project);
        });
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
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
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            // console.log(req.body.forward_to);
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
                // console.log("docSrc --------------------------------------------------")
                // console.log(req.body.docSrc);
                var base64 = decodeBase64Image(req.body.docSrc);
                // console.log(base64);
                require("fs").writeFile('../taskit/public/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                    // console.log(err);
                });
                require("fs").writeFile('../taskit/angular/src/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                    // console.log(err);
                });
                // console.log(req.body);
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
        // console.log(req.body)
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (decoded.role_id == 1) {
                cmp_id = decoded.id;
            }
            else {
                cmp_id = decoded.cmp_id;
            }
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            // console.log(req.body);
            if (req.body.project_name == '' || req.body.category_id == '' || req.body.project_type == '' || req.body.priority == '' || req.body.requirement_summary == '' || req.body.description == '') {
                res.json({ success: false, msg: "All fields are required" });
            }
            else {
                if (req.body.docSrc && req.body.docSrc != '') {
                    timestamp = new Date().getTime().toString();
                    docName = req.body.project_id + timestamp + Math.floor(100000 + Math.random() * 900000);
                    var base64 = decodeBase64Image(req.body.docSrc);
                    require("fs").writeFile('../taskit/public/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
                    });
                    require("fs").writeFile('../taskit/angular/src/assets/docs/' + docName + '.' + base64.ext, base64.data, 'base64', function (err) {
                        // console.log(err);
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
                // console.log(req.body);
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Category.findById(req.params.id).then(category => {
            res.json(category);
        });
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
            res.json({ success: true, msg: "Success" });
        });

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
        // console.log(req.params.status);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.params.status == 'all') {
            Project.findAll(
                { order: [['id', 'DESC']] }
            ).then(project => {
                res.json(project);
            });
        }
        else {
            Project.findAll({
                order: [['id', 'DESC']],
                where: {
                    status: req.params.status,
                }
            }).then(project => {
                res.json(project);
            });
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
        // console.log(req.body.pm_id);
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        Role.findAll({
            where: {
                is_visible: true
            }
        }).then(Roles => {
            // console.log(projects);
            res.json(Roles);
            // });
        });

        // }
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
 //  ---------------------------------Start-------------------------------------------
    // Function      : assignMemeber5
    // Params        :
    // Returns       :
    // Author        : Manu Prasad
    // Date          : 15-03-2018
    // Last Modified : 15-03-2018,
    // Desc          : assign team members and head to a team

    router.get('/getAccessRights/:id', function (req, res) {

        var cmp_id = 1;
        var roleId = req.params.id;
        console.log(roleId);
        tmp = [];
        var rights;
        if(roleId == 3){
            AccessRightsMain.findAll({ raw: true,where:{
                for_user:false
            } }).then(mainAccessRights => {
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
                                tmp[key].intermediate ;
                                
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
        }else{
            AccessRightsMain.findAll({ raw: true,where:{
                for_user:true} }).then(mainAccessRights => {
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        console.log(req.body)
        var cmp_id = 1;

        role_id = parseInt(req.params.id);
        console.log(role_id);
        AccessRightsAssoc.destroy({
            where:{
                role_id:role_id,
                cmp_id:cmp_id
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
                                    
                                }).catch(err =>{
                                    // console.log(err);
                                })
                                // console.log(resAssoc.count)
                            }
    
                        });callback();  
                    } 
                },
                    () => {
                        res.json({
                            status: 1,
                            message: "Successfully assigned!"
                        })
                    })
            });
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

    router.get('/getWorkingTimes', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
                        cmp_id: cmp_id
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

    router.post('/saveWorkingTimes', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        console.log(req.body)
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
    router.post('/deleteBreak', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
    router.post('/saveBreak', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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

    router.get('/getWeekHours', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        WorkingTimeAssoc.findAll({
            order: [
                ['day_no', 'ASC']
            ],
            include: [
                {
                    model: WorkingTime, require: true, where: {
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
                tmp[element.week_no] = { id: element.tbl_cmp_work_time.id, title: element.tbl_cmp_work_time.title, start: element.tbl_cmp_work_time.start_time, end: element.tbl_cmp_work_time.end_time };
                tmp2[element.day_no] = tmp;
                //  });
            });
            console.log(tmp2);
            res.json(tmp2)

        });

        // }
    })
    //  ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    router.get('/get-availablity/:id', function (req, res) {
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
        Public_holiday.findAll({

            // where: { cmp_id: decoded.cmp_id },
            where: { cmp_id: 1 },

        }).then(PublicHoliday => {
            res.json(PublicHoliday);
            // console.log(PublicHoliday)
        });
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
        cmp_work_times.findAll({
            // where: { cmp_id: decoded.cmp_id }
            include: [
                {
                    model: cmp_work_time_assocs,
                }
            ]
        }).then(workTime => {
            console.log(workTime);
            res.json(workTime);
        });
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
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
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
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
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
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
        // }
        // else {
        //     return res.status(401).send('Invalid User');
        // }
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        let data = [];
        var cmp_id = 1;
        d = (new Date()).getFullYear();
        y1 = d - 1;
        y2 = d;
        y3 = d + 1
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
    router.post('/getHoliday', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
    router.post('/deleteHoliday', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
    router.post('/saveHoliday', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
        // }

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
    //   //   decoded = jwt.verify(authorization, config.secret);
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        // res.json(req.body);
        var user_id = 74;
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
        // }
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
            // console.log(projects);
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
        Projects.findOne({
            where: {
                id: req.params.id
            }
        }).then(projectData => {
            // console.log(projectData);
            res.send(projectData);
        });
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

    router.get('/getNotifications', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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
                // console.log(resReq.tbl_time_extension_request.tbl_project_task.tbl_project_module)
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

        // }
    })
    //  ---------------------------------End-------------------------------------------
    router.get('/getNotifications2', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        // res.json(req.body);
        var user_id = 74;
        var role = 1
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
        // }
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var role_id = 3
        id = req.body.id;
        closeNotifnewTaskReq(role_id,id);

        // }
    })
function closeNotifnewTaskReq(role_id,id){
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var role_id = 3
        id = req.body.id;
        closeNotifApproval(role_id, id);

        // }
    })
function closeNotifApproval(role_id,id){
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        var role_id = 1
        id = req.body.id;
        if (role_id == 3) {
            NewTaskNotification.findAll({
                // where: {
                //     is_pm_viewed: false,
                //     is_admin_viewed: false,
                //     is_user_viewed: false
                // },
                include: [{
                    model: NewTaskreq,
                    // where: {
                    //     request_status: 'Pending'
                    // },
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
                // let response = {}
                // response['back'] = resBack
                // response['req'] = rex;
                res.send(resBack);
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error in getting notifications!"
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
                    // where: {
                    //     request_status: 'Approval'
                    // },
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
                // let response = {}
                // response['back'] = resBack
                // response['req'] = rex;
                res.send(resBack);
            }).catch(err => {
                res.json({
                    status: 0,
                    message: "Error in getting notifications!"
                })
            })
        }

        // }
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
        var role_id = 3
        id = req.params.id;
        //  console.log("\n\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"+id);
        NewTaskreq.find({
            where: {
                id: id,
                
            }, attributes: ['assigned_to_id', 'id', 'planned_hours', 'buffer_hours', 'description', 'planned_start_date', 'planned_end_date', 'attachment', 'reason', 'project_module_id', 'assigned_to_id', 'complexity_id', 'team_id', 'task_name','request_status'],
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
            if(resBack == null || resBack == 'null'){
            res.json({
                status: 0,
                message: "Request already accepted!"
              }) 
            }
            else{
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
        // }
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var cmp_id = 1;
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

    router.get('/checkRole/', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        var role = 3;
        res.json(role);
        // }
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
        Complexity_percentage.findAll({

        }).then(Complexity_percentage => {
            //console.log(projects);
            res.json(Complexity_percentage);
        });
    });
    // ----------------------------------End-----------------------------------
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
        role = 1;
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
                project_team_id:req.body.team_id,
                assigned_to_id:req.body.assigned_person,
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
                    },{where:{
                        new_task_id:req.body.req_id
                    }}).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status:"Accepted"
                        },{where:{
                            id:req.body.req_id
                        }}).then( reqUpdate =>{

                            io.sockets.emit("newtaskrequestAccepted", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            res.send({ success: true, msg: "Request Approved!" });
                        }).catch(err=>{
                            res.send({ success: false, msg: "Failed! Try again!" });
                            
                        })
                        
                    });
                } else {
                    NewTaskNotification.update({
                        is_pm_viewed: true
                    },{where:{
                        new_task_id:req.body.req_id
                    }}).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status:"Accepted"
                        },{where:{
                            id:req.body.req_id
                        }}).then( reqUpdate =>{

                            io.sockets.emit("newtaskrequestAccepted", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            res.send({ success: true, msg: "Request Approved!" });
                        }).catch(err=>{
                            res.send({ success: false, msg: "Failed! Try again!" });
                            
                        })
                    });
                }

            });
        }
        // }
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
        // console.log("hreeee");
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
                var role = 1
                // });
                if (role == 1) {
                    NewTaskNotification.update({
                        is_admin_viewed: true
                    },{where:{
                        new_task_id:req.params.id
                    }}).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status:"Rejected"
                        },{where:{
                            id:req.params.id
                        }}).then( reqUpdate =>{

                            io.sockets.emit("newtaskrequestRejected", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            res.send({ success: true, msg: "Request rejected!" });
                        }).catch(err=>{
                            res.send({ success: false, msg: "Failed! Try again!" });
                            
                        })
                        
                    });
                } else if(role == 3) {
                    NewTaskNotification.update({
                        is_pm_viewed: true
                    },{where:{
                        new_task_id:req.params.req_id
                    }}).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status:"Rejected"
                        },{where:{
                            id:req.params.req_id
                        }}).then( reqUpdate =>{

                            io.sockets.emit("newtaskrequestRejected", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            res.send({ success: true, msg: "Request rejected!" });
                        }).catch(err=>{
                            res.send({ success: false, msg: "Failed! Try again!" });
                            
                        })
                    });
                }else{
                    res.send({ success: false, msg: "Error occured!" });
                    
                }
        // }
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
        // if (req.headers && req.headers.authorization) {
        //   var authorization = req.headers.authorization.substring(4), decoded;
        //   //     try {
        //   decoded = jwt.verify(authorization, config.secret);
        //   var cmp_id = decoded._id;
      
                // });
                    console.log()
                    NewTaskNotification.update({
                        is_admin_viewed: false,
                        is_pm_viewed: false,
                        is_user_viewed: false,
                    },{where:{
                        new_task_id:req.params.id
                    }}).then(function (newRequestNotification) {
                        NewTaskreq.update({
                            request_status:"Approval"
                        },{where:{
                            id:req.params.id
                        }}).then( reqUpdate =>{

                            io.sockets.emit("newtaskrequestApproval", {
                                // expiredSocketId: newRequestNotification.id
                            });
                            res.send({ success: true, msg: "Send for Approval!" });
                        }).catch(err=>{
                            res.send({ success: false, msg: "Failed! Try again!" });
                            
                        })
                    });
                
        // }
    });
    //  ---------------------------------End-------------------------------------------
    module.exports = router;
    return router;
}
module.exports = returnRouter;


