
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
const emailTemplate = require('../template/verification_email');
var Login = models.tbl_login;
var Role = models.tbl_role;
var User_profile = models.tbl_user_profile;
var Company = models.tbl_company;
var Login_attempt = models.tbl_login_attempt;
var generator = require('generate-password');
var ip = require("ip");
const request = require('request');
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

                comparePassword(password, login.password, (err, isMatch) => {
                    if (err) {
                        throw err;
                    }
                    //    -------------------------------------- if  match ------------------------------------------
                    if (isMatch) {
                        // console.log("matches");
                        if (login.block_status == true) {

                            return res.json({ success: false, msg: 'Account blocked' });
                            // console.log("Account blocked");
                        }
                        else if (login.delete_status == true) {
                            return res.json({ success: false, msg: 'Account deleted' });
                            // console.log("Account deleted");
                        }
                        
                        else if(login.role_id == 1 || login.role_id == 2){
                            console.log(login.role_id);
                            if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                                return res.json({ success: false, msg: 'Company not verified' });
                        }
                      
                         if (login.is_profile_completed == false) {
                            Company.findOne({
                                where: {
                                    login_id: login.id
                                }
                            }).then(company2 => {
                                return res.json({ success: false, msg: 'Profile not completed', profile_complete: false, cmp_id: company2.id });
                            });
                        }
                    }
                        // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
                        // else if (login.block_status == false && login.delete_status == false && login.is_verified == true && login.is_profile_completed == true && login.cmp_status != "Not Verified" ){
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
                                    // console.log("login id updated");
                                    const loginAttempt = Login_attempt.build({
                                        ip: ip.address(),
                                        date_time: new Date(),
                                        is_success: true
                                    })
                                    loginAttempt.save().then(function (newloginAttempt) {
                                        Company.findOne({
                                            where: {
                                                login_id: login.id
                                            }
                                        }).then(company2 => {
                                            // console.log("data inserted");
                                            if (login.role_id == 3 || login.role_id == 4) {

                                                Login.update({
                                                    is_verified: true
                                                }, {
                                                        where: {
                                                            email: login.email
                                                        }
                                                    }).then(updatedData => {


                                                        // console.log("user data");
                                                        return res.json({
                                                            success: true,
                                                            msg: 'login succesfully',
                                                            token: 'JWT ' + token,
                                                            cmp_id: company2.id,
                                                            login: {
                                                                id: login.id,
                                                                role_id: login.role_id,
                                                                status: login.cmp_status
                                                            }
                                                        });


                                                    });
                                            } else {
                                                // console.log("user data");
                                                return res.json({
                                                    success: true,
                                                    msg: 'login succesfully',
                                                    token: 'JWT ' + token,
                                                   cmp_id: company2.id,
                                                    login: {
                                                        id: login.id,
                                                        role_id: login.role_id,
                                                        status: login.cmp_status
                                                    }
                                                });
                                            }
                                        })

                                    });

                                });
                        }
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
                                            emailTemplate.sendResetPasswordMail(req.body.email, company.cmp_name, password);
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



    module.exports = router;

    return router;
}
module.exports = returnRouter;