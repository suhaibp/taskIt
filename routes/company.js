var models = require('../models');
var express = require('express');
var router = express.Router();
var generator = require('generate-password');
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const Op = Sequelize.Op
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
const emailTemplate = require('../template/verification_email');
var moment = require('moment');
moment().format();
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
async = require("async");
var dateFormat = require('dateformat');
const datesBetween = require('dates-between');
var Log = models.tbl_log;
var Login = models.tbl_login;
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
var public_holiday = models.tbl_public_holiday;
var Project_modules = models.tbl_project_modules;
// var project = models.tbl_project;
var Plan = models.tbl_plan;
var Company = models.tbl_company;
var Time_extension_request = models.tbl_time_extension_request;
var Time_extension_request_notifications = models.tbl_time_extension_req_notification;
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
        var cmp_id = 1;
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
                // where: {delete_status: false}
            }]
        }).then(user => {
            //console.log(projects);
            return res.json(user);
        });
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
        var cmp_id = 1;
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
                where: { delete_status: true }
            }]
        }).then(user => {
            //console.log(projects);
            return res.json(user);
        });
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
        var cmp_id = 1;
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
        var cmp_id = 1;
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
        console.log(req.params.id);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
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
        console.log(req.params.id);
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
    router.put('/deleteuser/:id', function (req, res) {
        console.log("id del" + req.params.id);
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Designation.findAll({
            where: { delete_status: false }
        }).then(designation => {
            //console.log(projects);
            return res.json(designation);
        });
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Prevexp.findAll({
        }).then(prevexp => {
            return res.json(prevexp);
        });
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Team.findAll({
        }).then(team => {
            return res.json(team);
        });
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
        // console.log(dataString);
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        //   console.log(dataString);
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
        console.log(req.body);
        var team = req.body.team;
        var cmp_id = 1;
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
            var no_members=parseInt(companyPlan.tbl_plan.no_members);
       
            User.count({
                where: { [Op.and]: [{cmp_id: cmp_id }] }
                // where: { cmp_id: cmp_id,delete_status:false },
              })
              .then(count => {
              var count1=count;
              if (count1 >=no_members) {
                 errMsg = "Cant Add, Maximum number of plan reached";
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
        if (!isErr && req.body.user_group == 4 && (req.body.team == null ||req.body.team == '')) {
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
                where: { [Op.and]: [{ email: email, delete_status: false,cmp_id:cmp_id }] }
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
        // console.log(req.body.id);
        // res.json({email:1})
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
        console.log(req.body.imgFile);
        // res.json({email:1})
        var teams = req.body.team;
        var cmp_id = 1;
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
        if (!isErr && req.body.role_id == 4 && (req.body.team == null ||req.body.team == '')) {
            errMsg = "* Failed, Please Select Team member!";
            isErr = true;
        }
        if (!isErr) {
            if (req.body.editPhotoSrc) {
                if(req.body.photoSrc!=''){
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
            res.json({ success: true, msg: "User Updated Successfully" });
        } else {
            res.json({ success: false, msg: errMsg });
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : allprojectcategory
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 12-03-2018
    // Last Modified : 
    // Desc          : allprojectcategory
    router.get('/allprojectcategory', function (req, res) {
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Project_category.findAll({
            order: [['id', 'DESC']],
            where: { delete_status: false }
        }).then(category => {
            return res.json(category);
        });
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
                            return res.json({ success: true, msg: 'Delete Category Successfully' });
                        }
                    });
            }
        });
    });
    // ----------------------------------End-----------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : add Category
    // Params        : data
    // Returns       : 
    // Author        : sudha
    // Date          : 12-01-2018
    // Last Modified : 
    // Desc          : addCategory
    router.post('/addCategory', (req, res, next) => {
        console.log(req.body);
        var cmp_id = 1;
        var isErr = false;
        errMsg = '';
        name = myTrim(req.body.name);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (!isErr && req.body.name == '' || req.body.name == null) {
            errMsg = "* Failed, Please Enter Category Name!";
            isErr = true;
        }
        if (!isErr) {
            Project_category.findAll({
                where: { [Op.and]: [{ category_name: name, delete_status: false }] }
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
                        res.json({ success: true, msg: "Projecyt Category Created Successfully" });
                    })
                }
            });
        } else {
            res.json({ success: false, msg: errMsg });
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
                            res.json({ success: true, msg: "Project Category updated Successfully" });
                        })
                }
            });
        } else {
            res.json({ success: false, msg: errMsg });
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
        var cmp_id = 1;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Employeeleave.findAll({
            order: [['id', 'DESC']],
            required: true,
            // where: { cmp_id: cmp_id, delete_status: false },
            where: { [Op.and]: [{  cmp_id: cmp_id, delete_status: false,request_status:"Accepted" }] },
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
        var cmp_id = 1;
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
                    return res.json({ success: true, msg: 'Delete Employee leave Successfully' });
                }
            });
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
        console.log(req.body);
        var cmp_id = 1;
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
        const endDate = new Date( req.body.enddate);
         var total_seconds=0;
         async.eachOfSeries(datesBetween(startDate, endDate), (daterng, key, callback) => {   
            // console.log(daterng);
        
            public_holiday.findOne({
        
                where: {date:daterng, cmp_id: cmp_id },
        
            }).then(holiday => {
                if(holiday){
        // console.log(daterng+"holiday")
                    callback();
                }else{
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
                           
                            total_seconds=total_seconds+seconds;
                          
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
                                
                             
                                total_seconds=total_seconds+seconds1;
        
                                callback();
                
                            });
                
                        }
            
                    });
                }
        
            });
          
          
        }, function (err) {
            console.log("tot"+total_seconds );
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
                                [Op.and]: [{ cmp_id: cmp_id, user_profile_id: req.body.emp_id,delete_status:false }],
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
                        res.json({ success: true, msg: "Leave added Successfully" });
                    } else {
                        res.json({ success: false, msg: errMsg });
                    }
                });
        } else {
            res.json({ success: false, msg: errMsg });
        }
    });
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
        console.log(req.body);
        var cmp_id = 1;
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
        const endDate = new Date( req.body.end_date);
         var total_seconds=0;
         async.eachOfSeries(datesBetween(startDate, endDate), (daterng, key, callback) => {   
            // console.log(daterng);
        
            public_holiday.findOne({
        
                where: {date:daterng, cmp_id: cmp_id },
        
            }).then(holiday => {
                if(holiday){
        // console.log(daterng+"holiday")
                    callback();
                }else{
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
                           
                            total_seconds=total_seconds+seconds;
                          
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
                                
                             
                                total_seconds=total_seconds+seconds1;
        
                                callback();
                
                            });
                
                        }
            
                    });
                }
        
            });
          
          
        }, function (err) {
            console.log("tot"+total_seconds );
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
                                [Op.and]: [{ cmp_id: cmp_id, user_profile_id: req.body.user_profile_id,delete_status:false }],
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
                        res.json({ success: true, msg: "Leave updated Successfully" });
                    } else {
                        res.json({ success: false, msg: errMsg });
                    }
                });
        } else {
            res.json({ success: false, msg: errMsg });
        }
    });
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
        console.log(req.body.startDate);
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
        var cmp_id = 1;
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Employeeleave.findAll({
            order: [['id', 'DESC']],
            required: true,
            where: { cmp_id: cmp_id, delete_status: false, request_status: 'Pending', is_admin_viewed:false},
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
        console.log(req.params.id)
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
            Employeeleave.update({
               
                is_admin_viewed:true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data1 => {
                    io.sockets.emit("userstatuschange", {
                    });
                    if(data1){
                        res.json({ success: true, msg: "user status change Successfully" });
                    }else{
                        res.json({ success: false, msg: " user status change Faild" });
                    }
  
                        })
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
        var cmp_id = 1;
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
        // console.log(req.params.id)
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
            var login_id=emppendingleave.tbl_user_profile.login_id;
    User.findOne({
        where: {
            login_id: login_id
        },
        include:
        {
            model: Login,
        },
    }).then(userProfile => {
        var userid=userProfile.id;
        Project.findAll({
            include: [
                {
                    model:  Project_modules,
                    // order: [['id', 'DESC']],
                    required: true,
                    include:
                        {
                            model: Project_task,
                            required: true,
                       
                            where: { assigned_to_id: userid},
        
                        }
                },
            
            ],
            order: [
                [ Project_modules, 'id', 'ASC' ],
                
              ]
            
         
        }).then(myTasks => {
            data = {'leave':emppendingleave,'mytask' : myTasks }
            return res.json(data);
            
        });    
    });    
});
    
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
        console.log(req.body.id);
        console.log(req.body.reject_reason);
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
                request_status:"Rejected"
            }, {
                    where: {
                        id: req.body.id
                    }
                }).then(data1 => {
                    io.sockets.emit("Rejectedleave", {
                        //user_id : req.params.id
                    });
                           res.json({ success: true, msg: "Leave Reject Successfully" });
                        })
                }
           
         else {
            res.json({ success: false, msg: errMsg });
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
       
        var isErr = false;
        errMsg = '';
  
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
            Employeeleave.update({
               
                request_status:"Accepted"
            }, {
                    where: {
                        id: req.body.id
                    }
                }).then(data1 => {
                    if(data1){
                        io.sockets.emit("Acceptedleave", {
                            //user_id : req.params.id
                        });
                        res.json({ success: true, msg: "Leave Accept Successfully" });
                    }else{
                        res.json({ success: false, msg: "Failed" });
                    }
                         
                   })
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
        var cmp_id = 1;
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
                                attributes: ['id','project_name'],
                                required: true,
                                where: {cmp_id:cmp_id}
                            },
                        }
                    ]
                }
            ]
        }).then(emppendingleave => {
            return res.json(emppendingleave);
        });
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
        var projid = parseInt(req.body.projid);
        var reqid = parseInt(req.body.reqid);
        // var projid=36;
        // var reqid =6;
        var cmp_id = 1;
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
            where: { [Op.and]: [{ id: projid ,cmp_id:cmp_id }] },
     
        }).then(project => { 
    
                     Project_modules.findAll({
                    
                        required: true,
                        where: { project_id: projid },
                        include:{
                                model: Project_task,
                                order: [['id', 'planned_start_date_time']],
                                required: true,
                                    include:{
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
                        uniqueArray = names.filter(function(elem, pos) {
                            return names.indexOf(elem) == pos;
                        })
                     
                            Project_modules.findAll({
                                order: [['id', 'ASC']],
                                where: {project_id: projid},
                                include: [
                                    {
                                        model:  Project_task,
                                        required: true,
                                        include:[
                                            {
                                                model: User,
                                                required: true,
                          
                                            }]
                                    },
                                
                                ],
                             
                            }).then(myTasks => {
                       
                         data = {'reqdetails':reqdetails,'project' : project,'teammembers' : uniqueArray,'myTasks':myTasks }
                                   return res.json(data);
                                    
                                });
  
                       });
                        
                    });
                        
                    });    
         
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
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
                    return res.json({ success: true, msg: 'Rejected Successfully' });
                }
            });
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
        // console.log("id del" + req.params.id);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Time_extension_request.update({
            req_status: "Approval"
        }, {
                where: {
                    id: req.params.id
                }
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
                    return res.json({ success: true, msg: 'send to admin Successfully' });
                }
            });
        });
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
        var cmp_id = 1;
       var role_id=1
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if(role_id == 1){
            Time_extension_request_notifications.findAll({
                required: true,
            where: {
              is_pm_viewed: false,
              is_admin_viewed: false,
              is_user_viewed: false
            },
            include: [{
              model:Time_extension_request, as:'xt',
              required: true,
              where: {
                req_status: 'Approval'
              },
              include: [{
                model: Project_task,
                required: true,
                include: [{
                  model:Project_modules,
                  required: true,
                  include: [{
                    model:Project,
                    required: true,
                      where : {
                        cmp_id: cmp_id
                      }
                    
                  }]
                },{
                  model:User,
                  required: true,
                  include: [{
                    model:Login,
                    required: true,
                    where: { [Op.and]: [{ block_status: false, delete_status: false }] }
                  }]
                }]
              }]
            }]
          }).then( resReq => {
            return res.json(resReq);
         
          }).catch(err =>{
            res.json({
            //   status: 0,
              message: "Error occured! Try again!"
            })
          })
        }
        else {
    
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
        console.log(req.params.id)
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Time_extension_request_notifications.update({
               
                is_admin_viewed:true
            }, {
                    where: {
                        id: req.params.id
                    }
                }).then(data1 => {
                    io.sockets.emit("adminviewstatuschange", {
                    });
                    if(data1){
                        res.json({ success: true, msg: "admin status change Successfully" });
                    }else{
                        res.json({ success: false, msg: " admin status change Faild" });
                    }
  
                        })
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
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        Employeeleave.findAll({
            where: { user_profile_id: req.params.id },
        }).then(userleave => {
            // console.log(projects);
            return res.json(userleave);
            // res.json(user)
        });
    });
    // ----------------------------------End------------------------------------------- 

module.exports = router;
return router;
}
module.exports = returnRouter;