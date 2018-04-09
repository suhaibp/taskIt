var express = require('express');
var router = express.Router();
async = require("async");
const Sequelize = require('sequelize');
var express = require('express');
var router = express.Router();

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
const Config = require('../config/database');
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
var User_profile = models.tbl_user_profile;


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

              console.log("login");
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
                      console.log("match");
                      if (login.block_status == true) {
                          console.log("Blocked");
                          return res.json({ success: false, msg: 'Account blocked' });
                          // console.log("Account blocked");
                      }
                      else if (login.delete_status == true) {
                          console.log("Deleted");
                          return res.json({ success: false, msg: 'Account deleted' });
                          // console.log("Account deleted");
                      }

                      else if (login.role_id == 1 || login.role_id == 2) {
                          console.log("role id 1");
                          console.log(login.role_id);
                          if (login.cmp_status == "Not Verified" || login.is_verified == false) {
                              console.log("Not verified");
                              return res.json({ success: false, msg: 'Company not verified' });
                          }

                          if (login.is_profile_completed == false) {
                              Company.findOne({
                                  where: {
                                      login_id: login.id
                                  }
                              }).then(company2 => {
                                  console.log("Profile not compled");
                                  return res.json({ success: false, msg: 'Profile not completed', profile_complete: false, cmp_id: company2.id });
                              });
                          }
                          else {
                              console.log("jwt tocken");
                              // console.log("else condition");
                              const token = jwt.sign(login.toJSON(), Config.secret, { expiresIn: 60400 }); // sec 1 week
                              User_profile.update({
                                  login_id: login.id
                              }, {
                                      where: {
                                          email: login.email
                                      }
                                  }).then(data1 => {
                                      console.log("login id updated");
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
                                              console.log("data inserted");
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
                                                  console.log("user data");
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
                      // else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
                      // else if (login.block_status == false && login.delete_status == false && login.is_verified == true && login.is_profile_completed == true && login.cmp_status != "Not Verified" ){
                    
                  }
                  //    -------------------------------------- not matches ------------------------------------------

                  else {
                      console.log("not match");
                      //    -------------------------------------- to save into login_attempt table ------------------------------------------
                      console.log("Password");
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
        developer = [];
        User_profile.findAll({
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

        User_profile.findAll({
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
            message: "Successfully Deleted!"
          })
        }).catch( err =>{
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
      // console.log(req.body.date.getDate());
      
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

