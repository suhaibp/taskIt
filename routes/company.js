
async = require("async");
const Sequelize = require('sequelize');
var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
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
const Config = require('../config/database');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
var User_profile = models.tbl_user_profile;
var Emp_leave = models.tbl_emp_leave;
var Public_holiday = models.tbl_public_holiday;
var cmp_work_time_assocs = models.tbl_cmp_work_time_assoc;
var cmp_work_times = models.tbl_cmp_work_time;
var cmp_off_day_assoc = models.tbl_cmp_off_day_assoc;
var cmp_break = models.tbl_cmp_break;
var cmp_break_assoc = models.tbl_cmp_break_assoc;
//--------Yasir Poongadan ------
var Projects_member_assoc = models.tbl_project_member_assoc;
//------------------------------
var ip = require("ip");
'use strict';
const emailTemplate = require('../template/verification_email');
var Login = models.tbl_login;
var Role = models.tbl_role;
var User_profile = models.tbl_user_profile;
var Company = models.tbl_company;
var Login_attempt = models.tbl_login_attempt;
var generator = require('generate-password');
var ip = require("ip");
const request = require('request');
var Users = models.tbl_user_profile;
var Industries = models.tbl_industry;
var CompanySize = models.tbl_company_size;
var Plan = models.tbl_plan;
var Team_assoc = models.tbl_team_assoc;
var Projects = models.tbl_project;
var Estimation_tasks = models.tbl_estimation_task;
var Estimation_modules = models.tbl_estimation_module;
var Estimation = models.tbl_estimation
var Estimation_team = models.tbl_project_estimation_team
var Complexity_percentage = models.tbl_complexity_percentage
'use strict';
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 06-3-2018
    // Last Modified : 06-3-2018, Jooshifa
    // Desc          : company and user direct login with username and password with google captcha

    // esfasfasd
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

    //  ---------------------------------Start-------------------------------------------
    // Function      : super_admin_pie_graph
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 06-03-2018
    // Last Modified : 06-03-2018, 
    // Desc          : get piegraph data


    router.post('/register_company', function (req, res) {
        console.log(req.body);
        try {
            req.body.forEach(element => {
                if (element.ans == '') {
                    res.json({ status: 0, message: "Please try again!" });
                    res.end();
                }
            });
            Login.findAll(
                { where: { id: req.body[0].ans } }

            ).then(login => {
                //console.log(projects);
                res.json(login);

            });

        } catch (err) {
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
                                        is_profile_completed: false,
                                        cmp_id: null,
                                        google_id: null,
                                        google_token: null,
                                        password: hash
                                    })
                                    console.log(newLogin);
                                    newLogin.save().then(resLogin => {
                                        // res.json(resLogin.length)                          

                                        // if(resLogin.length>0){
                                        // res.json(resLogin)                          
                                        console.log("hh")
                                        Plan.find({
                                            where: { is_defualt: true }
                                        }).then(resPlan => {
                                            // res.json(req.body);
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

                                            console.log(newCompany);
                                            newCompany.save().then(() => {
                                                emailTemplate.sendVerificationMail(req.body[0].ans, req.body[1].ans, req.body[9].ans);

                                                res.json({ status: 1, message: "Registered! Check your Email!" })
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
    // Function      : register_company2
    // Params        : 
    // Returns       : 
    // Author        : Manu Prasad
    // Date          : 09-03-2018
    // Last Modified : 09-03-2018, 
    // Desc          : company registration

    router.post('/register_company2', function (req, res) {
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

    // ---------------------------------Start-------------------------------------------
    // Function      : expiredsocket
    // Params        : id
    // Returns       : a socket emit "expiredcompany"
    // Author        : Jooshifa
    // Date          : 28-03-2018

    // Last Modified : 28-03-2018, Jooshifa
    // Desc          :  we get the id from scheduler app. Here we can emit the socket

    router.get('/expiredsocket/:id', (req, res) => {
        // console.log("clo"+req.params.id);
        io.sockets.emit("expiredcompany", {
            expiredSocketId: req.params.id
        });
    });
    // ----------------------------------End-------------------------------------------
    module.exports = router;
    return router;
}
module.exports = returnRouter;
