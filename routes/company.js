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
        cmp_id = 1;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
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
        cmp_id = 1;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Project.findAll({
            where: {
                cmp_id: cmp_id
            }
        }).then(project => {
            res.json(project);
        });
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
        cmp_id = 1;
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
                    role_id: 3,
                    cmp_id: cmp_id,
                    block_status: false,
                    delete_status: false,
                }
            }]
        }).then(pm => {
            res.json(pm);
        });
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
        cmp_id = 1;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Category.findAll({
            where: {
                cmp_id: cmp_id,
                delete_status: false
            }
        }).then(category => {
            res.json(category);
        });
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            // try {
            decoded = jwt.verify(authorization, config.secret);
            cmp_id = 1;
            if(decoded.role_id == 1){
                cmp_id = decoded.id;
            }
            else{
                cmp_id = decoded.id;
            }
            // ASSIGNEE ID = LOGIN-ID;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            if (req.body.project_name == '' || req.body.category_id == '' || req.body.project_type == '' || req.body.priority == '' || req.body.description == '') {
                res.json({ success: false, msg: "All fields are required" });
            }
            else {
                if (req.body.pm_id == 0) {
                    is_pm_viewed = true;
                }
                else {
                    is_pm_viewed = false;
                }
                const project = Project.build({
                    project_name: req.body.project_name,
                    category_id: req.body.category_id,
                    project_code: 123,
                    status: 'Drafted',
                    project_type: req.body.project_type,
                    priority: req.body.priority,
                    description: req.body.description,
                    pm_id: req.body.pm_id,
                    // assignee_id: assignee_id,
                    cmp_id: cmp_id,
                    is_pm_viewed: is_pm_viewed
                })
                project.save().then(function (newPlan) {
                    // console.log(newPlan);
                    if (req.body.pm_id != LOGIN_ID) {
                        io.sockets.emit("addProject", {
                            pm_id: req.body.pm_id
                        });
                    }
                    res.json({ success: true, msg: "Project Created Successfully, Your Project code is " + project.project_code });
                })
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
            console.log(decoded);
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
                if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                    return res.json({ success: false, msg: 'Company not verified' });
                }
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
    module.exports = router;

    return router;
}
module.exports = returnRouter;