
var models = require('../models');
const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env]
const Config = require('../config/database');
const jwt = require("jsonwebtoken");
const passport = require("passport");
var login = require('../models/tbl_login');
const bcrypt = require("bcryptjs");
var Login = models.tbl_login;
var Role = models.tbl_role;
var User_profile = models.tbl_user_profile;
var Company = models.tbl_company;
var Login_attempt = models.tbl_login_attempt;
var ip = require("ip");
'use strict';


var returnRouter = function (io) {
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

        Login.findOne({
            where: {
                email: req.body.email
            }
        }).then(login => {
            // res.json(login);

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

                        Login_attempt.findAll({
                            where: {
                                ip: ip.address(),
                                is_success: false,
                                id: {
                                    [Op.gt]: loginAttempt.id
                                }
                            }
                        }).then(loginAttemptFalse => {
                            loginAttemptFalse.forEach(allFalseAttempt => {
                                array.push({ id: allFalseAttempt.id });

                            })
                            if (array.length >= 3) {
                                return res.json({ caseno: 1, success: false, msg: 'User Not found' });
                                // console.log("wrong attempt")
                            }
                            else {
                                return res.json({ success: false, msg: 'User Not found' });
                            }

                        });
                    });

                });


            }

            // comparePassword(password,login.password, (err, isMatch) => {
            comparePassword(password, login.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                if (isMatch) {

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
                } else {
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

                                    if (array.length >= 3) {
                                        return res.json({ caseno: 1, success: false, msg: 'Wrong Password' });

                                        if (
                                            req.body.captcha === undefined ||
                                            req.body.captcha === '' ||
                                            req.body.captcha === null
                                        ) {
                                            return res.json({ "success": false, "msg": "Please select captcha" });
                                        }

                                        // Secret Key
                                        const secretKey = '6LdpvDEUAAAAAHszsgB_nnal29BIKDsxwAqEbZzU';
                                        // Verify URL
                                        const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

                                        // Make Request To VerifyURL
                                        request(verifyUrl, (err, response, body) => {
                                            body = JSON.parse(body);
                                            console.log(body);

                                            // If Not Successful
                                            if (body.success !== undefined && !body.success) {
                                                return res.json({ "success": false, "msg": "Failed captcha verification" });
                                            }

                                            //If Successful
                                            return res.json({ "success": true, "msg": "Captcha passed" });
                                        });





                                        // console.log("wrong attempt")
                                    }
                                }
                                else {
                                    return res.json({ success: false, msg: 'Wrong Password' });
                                }

                            });
                        });

                    });
                }
            });
            // console.log(login);

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
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Jooshifa
    // Date          : 06-3-2018
    // Last Modified : 06-3-2018, Jooshifa
    // Desc          : company and user direct login with username and password

    // esfasfasd
    // router.post('/authenticate', (req, res) => {
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
    //             return res.json({ success: false, msg: 'User Not found' });
    //         }

    //         // comparePassword(password,login.password, (err, isMatch) => {
    //         comparePassword(password, login.password, (err, isMatch) => {
    //             if (err) {
    //                 throw err;
    //             }
    //             // if (isMatch) {

    //             if (login.block_status == true) {

    //                 return res.json({ success: false, msg: 'Account blocked' });
    //             }
    //             if (login.delete_status == true) {
    //                 return res.json({ success: false, msg: 'Account deleted' });
    //             }
    //             if (login.cmp_status == "Not Verified" || login.is_verified == false) {
    //                 return res.json({ success: false, msg: 'Company not verified' });
    //             }
    //             // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
    //             else if (login.block_status == false && login.delete_status == false && login.is_verified == true) {

    //                 const token = jwt.sign(login.toJSON(), Config.secret, {
    //                     expiresIn: 60400 // sec 1 week
    //                 });
    //                 User_profile.update({
    //                     login_id: login.id
    //                 }, {
    //                         where: {
    //                             email: login.email
    //                         }
    //                     }).then(data1 => {
    //                         const loginAttempt = Login_attempt.build({

    //                             // ip: ip.address() + "ip",
    //                             ip: ip.address(),
    //                             date_time: new Date(),
    //                             is_success: true
    //                         })
    //                         loginAttempt.save().then(function (newloginAttempt) {
    //                             // console.log(newPlan);
    //                             // res.json({ success: true, msg: "Plan Created Successfully" });
    //                         })

    //                         return res.json({
    //                             success: true,
    //                             msg: 'login succesfully',
    //                             token: 'JWT ' + token,
    //                             cmp_id: login.cmp_id,
    //                             login: {
    //                                 id: login.id,
    //                                 role_id: login.role_id,
    //                                 status: login.cmp_status
    //                             }
    //                         });

    //                     });

    //             }
    //             // } else {
    //             // const loginAttempt = Login_attempt.build({
    //             //     ip: ip.address(),
    //             //     date_time: new Date(),
    //             //     is_success: false
    //             // })
    //             // loginAttempt.save().then(function (newloginAttempt) {
    //             // })
    //             //     return res.json({ success: false, msg: 'Wrong Password' });

    //             // }
    //         });
    //         // console.log(login);

    //     });

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
    module.exports = router;

    return router;
}
module.exports = returnRouter;