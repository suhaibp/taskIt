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
var Estimation_team_members = models.tbl_project_estimation_team_members;
var Project_estimation_notification = models.tbl_estimation_notification;
var Estimation = models.tbl_estimation;
var Estimation_modules = models.tbl_estimation_module;
var Estimation_tasks = models.tbl_estimation_task;

var ip = require("ip");


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
                    plan_id: req.params.id
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
                                else{
                                    isError = false;
                                }
                            }
                            else{
                                isError = false;
                            }
                            if(isError == false) {
                                cmp_code = cmp.cmp_code;
                                var currentTime = new Date()
                                var month = currentTime.getMonth() + 1;
                                var day = currentTime.getDate();
                                var year = currentTime.getFullYear();
                                cDate = month + "/" + day + "/" + year;
                                const project = Project.build({
                                    project_name: req.body.project_name,
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
    // Desc          : company and user direct login with username and password

    // esfasfasd
    // router.post('/authenticate', (req, res) => {
    //     array = [];
    //     comparePassword = function (candPass, hash, callback) {
    //         bcrypt.compare(candPass, hash, (err, isMatch) => {
    //             if (err) throw err;
    //             callback(null, isMatch);
    //         })
    //     }
    //     const email = req.body.email;
    //     const password = req.body.password;
    //     if (config.use_env_variable) {
    //         var sequelize = new Sequelize(process.env[config.use_env_variable]);
    //     } else {
    //         var sequelize = new Sequelize(config.database, config.username, config.password, config);
    //     }

    //     Login.findOne({
    //         where: {
    //             email: req.body.email
    //         }
    //     }).then(login => {
    //         // res.json(login);

    //         if (login == null || login == [] || login == '') {


    //             const loginAttempt = Login_attempt.build({
    //                 ip: ip.address(),
    //                 date_time: new Date(),
    //                 is_success: false
    //             })

    //             loginAttempt.save().then(function (newloginAttempt) {
    //                 Login_attempt.findOne({
    //                     order: [['id', 'DESC']],
    //                     where: {
    //                         ip: ip.address(),
    //                         is_success: true
    //                     }
    //                 }).then(loginAttempt => {

    //                     Login_attempt.findAll({
    //                         where: {
    //                             ip: ip.address(),
    //                             is_success: false,
    //                             id: {
    //                                 [Op.gt]: loginAttempt.id
    //                             }
    //                         }
    //                     }).then(loginAttemptFalse => {
    //                         loginAttemptFalse.forEach(allFalseAttempt => {
    //                             array.push({ id: allFalseAttempt.id });

    //                         })
    //                         if (array.length >= 3) {
    //                             return res.json({ caseno: 1, success: false, msg: 'User Not found' });
    //                             // console.log("wrong attempt")
    //                         }
    //                         else {
    //                             return res.json({ success: false, msg: 'User Not found' });
    //                         }

    //                     });
    //                 });

    //             });


    //         }

    //         // comparePassword(password,login.password, (err, isMatch) => {
    //         comparePassword(password, login.password, (err, isMatch) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             if (isMatch) {

    //                 if (login.block_status == true) {

    //                     return res.json({ success: false, msg: 'Account blocked' });
    //                 }
    //                 if (login.delete_status == true) {
    //                     return res.json({ success: false, msg: 'Account deleted' });
    //                 }
    //                 if (login.cmp_status == "Not Verified" || login.is_verified == false) {
    //                     return res.json({ success: false, msg: 'Company not verified' });
    //                 }
    //                 // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
    //                 else if (login.block_status == false && login.delete_status == false && login.is_verified == true) {

    //                     const token = jwt.sign(login.toJSON(), Config.secret, {
    //                         expiresIn: 60400 // sec 1 week
    //                     });
    //                     User_profile.update({
    //                         login_id: login.id
    //                     }, {
    //                             where: {
    //                                 email: login.email
    //                             }
    //                         }).then(data1 => {
    //                             const loginAttempt = Login_attempt.build({

    //                                 // ip: ip.address() + "ip",
    //                                 ip: ip.address(),
    //                                 date_time: new Date(),
    //                                 is_success: true
    //                             })
    //                             loginAttempt.save().then(function (newloginAttempt) {
    //                                 // console.log(newPlan);
    //                                 // res.json({ success: true, msg: "Plan Created Successfully" });
    //                             })

    //                             return res.json({
    //                                 success: true,
    //                                 msg: 'login succesfully',
    //                                 token: 'JWT ' + token,
    //                                 cmp_id: login.cmp_id,
    //                                 login: {
    //                                     id: login.id,
    //                                     role_id: login.role_id,
    //                                     status: login.cmp_status
    //                                 }
    //                             });

    //                         });

    //                 }
    //             } else {
    //                 const loginAttempt = Login_attempt.build({
    //                     ip: ip.address(),
    //                     date_time: new Date(),
    //                     is_success: false
    //                 })

    //                 loginAttempt.save().then(function (newloginAttempt) {
    //                     Login_attempt.findOne({
    //                         order: [['id', 'DESC']],
    //                         where: {
    //                             ip: ip.address(),
    //                             is_success: true
    //                         }
    //                     }).then(loginAttempt => {

    //                         Login_attempt.findAll({
    //                             where: {
    //                                 ip: ip.address(),
    //                                 is_success: false,
    //                                 id: {
    //                                     [Op.gt]: loginAttempt.id
    //                                 }
    //                             }
    //                         }).then(loginAttemptFalse => {
    //                             if (loginAttemptFalse.id != null || loginAttemptFalse.id == '' || loginAttemptFalse.id != []) {
    //                                 loginAttemptFalse.forEach(allFalseAttempt => {
    //                                     array.push({ id: allFalseAttempt.id });

    //                                 })

    //                                 if (array.length >= 3) {
    //                                     return res.json({ caseno: 1, success: false, msg: 'Wrong Password' });

    //                                     if (
    //                                         req.body.captcha === undefined ||
    //                                         req.body.captcha === '' ||
    //                                         req.body.captcha === null
    //                                     ) {
    //                                         return res.json({ "success": false, "msg": "Please select captcha" });
    //                                     }

    //                                     // Secret Key
    //                                     const secretKey = '6LdpvDEUAAAAAHszsgB_nnal29BIKDsxwAqEbZzU';
    //                                     // Verify URL
    //                                     const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

    //                                     // Make Request To VerifyURL
    //                                     request(verifyUrl, (err, response, body) => {
    //                                         body = JSON.parse(body);
    //                                         console.log(body);

    //                                         // If Not Successful
    //                                         if (body.success !== undefined && !body.success) {
    //                                             return res.json({ "success": false, "msg": "Failed captcha verification" });
    //                                         }

    //                                         //If Successful
    //                                         return res.json({ "success": true, "msg": "Captcha passed" });
    //                                     });





    //                                     // console.log("wrong attempt")
    //                                 }
    //                             }
    //                             else {
    //                                 return res.json({ success: false, msg: 'Wrong Password' });
    //                             }

    //                         });
    //                     });

    //                 });
    //             }
    //         });
    //         // console.log(login);

    //     });

    // });

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
            // console.log(decoded);
        } else {
            res.json('');
        }
    });

    // ----------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 06-3-2018
    // Last Modified : 06-3-2018, Jooshifa
    // Desc          : company and user direct login with username and password

    // esfasfasd
    router.post('/authenticate', (req, res) => {
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

        Login.findOne({
            where: {
                email: req.body.email
            }
        }).then(login => {
            // res.json(login);

            if (login == null || login == [] || login == '') {
                return res.json({ success: false, msg: 'User Not found' });
            }

            // comparePassword(password,login.password, (err, isMatch) => {
            comparePassword(password, login.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                // if (isMatch) {

                if (login.block_status == true) {

                    return res.json({ success: false, msg: 'Account blocked' });
                }
                if (login.delete_status == true) {
                    return res.json({ success: false, msg: 'Account deleted' });
                }
                // if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                //     return res.json({ success: false, msg: 'Company not verified' });
                // }
                // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
                else if (login.block_status == false && login.delete_status == false && login.is_verified == true) {

                    const token = jwt.sign(login.toJSON(), Config.secret, {
                        expiresIn: 60400 // sec 1 week
                    });
                    User_profile.update({
                        login_id: login.id
                    }, {
                            where: {
                                email: login.email
                            }
                        }).then(data1 => {
                            const loginAttempt = Login_attempt.build({

                                // ip: ip.address() + "ip",
                                ip: ip.address(),
                                date_time: new Date(),
                                is_success: true
                            })
                            loginAttempt.save().then(function (newloginAttempt) {
                                // console.log(newPlan);
                                // res.json({ success: true, msg: "Plan Created Successfully" });
                            })

                            return res.json({
                                success: true,
                                msg: 'login succesfully',
                                token: 'JWT ' + token,
                                cmp_id: login.cmp_id,
                                login: {
                                    id: login.id,
                                    role_id: login.role_id,
                                    status: login.cmp_status
                                }
                            });

                        });

                }
                // } else {
                // const loginAttempt = Login_attempt.build({
                //     ip: ip.address(),
                //     date_time: new Date(),
                //     is_success: false
                // })
                // loginAttempt.save().then(function (newloginAttempt) {
                // })
                //     return res.json({ success: false, msg: 'Wrong Password' });

                // }
            });
            // console.log(login);

        });

    });
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
        Project.findById(req.params.id).then(project => {
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
        console.log(req.body.pm_id);
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

    module.exports = router;

    return router;
}
module.exports = returnRouter;