async = require("async");
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
var Team = models.tbl_team;
var Experience = models.tbl_prev_exp;
var TimeExtensionRequestNotification = models.tbl_time_extension_req_notification;
var NewTaskRequestNotification = models.tbl_new_task_req_notification;
var NewTaskRequest = models.tbl_new_task_request;
var TimeExtensionRequest = models.tbl_time_extension_request;
var ProjectTask = models.tbl_project_tasks;
var Projects = models.tbl_project;
var Industries = models.tbl_industry;
var CompanySize = models.tbl_company_size;
var Teams = models.tbl_team;
var TeamAssoc = models.tbl_team_assoc;
var Plan = models.tbl_plan;
var AccessRights = models.tbl_access_rights;
var AccessRightsAssoc = models.tbl_access_rights_assoc;
var AccessRightsMain = models.tbl_main_access_right;
var Emp_leave = models.tbl_emp_leave;
var Public_holiday = models.tbl_public_holiday;
var cmp_work_time_assocs = models.tbl_cmp_work_time_assoc;
var cmp_work_times = models.tbl_cmp_work_time;
var cmp_off_day_assoc = models.tbl_cmp_off_day_assoc;
var cmp_break = models.tbl_cmp_break;
var cmp_break_assoc = models.tbl_cmp_break_assoc;
var new_task_requests = models.tbl_new_task_request;
var new_task_req_notifications = models.tbl_new_task_req_notification;
var time_extension_request = models.tbl_time_extension_request;
var time_extension_req_notification = models.tbl_time_extension_req_notification;
var Projects_member_assoc = models.tbl_project_member_assoc;
var ip = require("ip");
const emailTemplate = require('../template/verification_email');
var generator = require('generate-password');
const request = require('request');
var Estimation_team = models.tbl_project_estimation_team;
var Complexity_percentage = models.tbl_complexity_percentage;
var Project_modules = models.tbl_project_modules;
var Project_Module = models.tbl_project_modules;
var Project_tasks = models.tbl_project_tasks;
var task_status_assoc = models.tbl_task_status_assoc;
var task_statuses = models.tbl_task_status;
var progress_percentage = models.tbl_progress_percentage
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
var moment = require('moment');
moment().format();
var dateFormat = require('dateformat');
var momentDurationFormatSetup = require("moment-duration-format");
const datesBetween = require('dates-between');
var Log = models.tbl_log;
var Employeeleave = models.tbl_emp_leave;
var cmp_off_day = models.tbl_cmp_off_day_assoc;
var cmp_work_time = models.tbl_cmp_work_time;
var User = models.tbl_user_profile;
var Time_extension = models.tbl_time_extension_request;
var New_task = models.tbl_new_task_request;
var Task_status_assocs = models.tbl_task_status_assoc;
var Task_status = models.tbl_task_status;
var Progress_percentages = models.tbl_progress_percentage;
var Task_time_assoc = models.tbl_task_time_assoc;
'use strict';
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-my-tasks
    // Params        : task, projects,modules
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc          : 
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     decoded = jwt.verify(authorization, Config.secret);
    // loginid = decoded.id
    router.get('/get-my-tasks', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            loginid = decoded.id
            array = [];
            array2 = [];
            //loginid = 123;
            User_profile.findOne({
                where: {
                    login_id: loginid
                }
            }).then(userProfile => {
                console.log(userProfile);
                Project_modules.findAll({
                    include: [
                        {
                            model: Projects,
                            // where: { project_id: req.params.id },
                        },
                        {
                            model: Project_tasks,
                            where: { assigned_to_id: userProfile.id },
                            include: [
                                {
                                    model: Complexity_percentage,
                                },
                                {
                                    model: Task_time_assoc,
                                },
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
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // else {
    //     return res.status(401).send('Invalid User');
    // }
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-all-task-in-module
    // Params        : task, projects,modules
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc          : 
    // if (req.headers && req.headers.authorization) {
    //     var authorization = req.headers.authorization.substring(4), decoded;
    //     decoded = jwt.verify(authorization, Config.secret);
    // loginid = decoded.id
    router.get('/get-all-task-in-module', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            loginid = decoded.id
            array = [];
            array2 = [];
            // loginid = 132;
            User_profile.findOne({
                where: {
                    login_id: loginid
                }
            }).then(userProfile => {
                Project_tasks.findAll({
                    where: {
                        assigned_to_id: userProfile.id
                    },
                }).then(Project_tasks => {
                    res.send(Project_tasks);
                });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-progress-percentage
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc  
    router.get('/get-progress-percentage', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            progress_percentage.findAll({
            }).then(progress_percentage => {
                res.send(progress_percentage);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-task-time
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc  
    router.get('/get-task-time', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            progress_percentage.findAll({
            }).then(progress_percentage => {
                res.send(progress_percentage);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /start-a-task
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.post('/start-a-task/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                const startTask = task_status_assoc.build({
                    date_time: Date.now(),
                    task_id: req.params.id,
                    status_id: 3,
                });
                startTask.save().then(function (ResstartTask) {
                    saveLog("Task started!", user_id)
                    res.send({ success: true, msg: 'start suucessfully' });
                });
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /done-a-task
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.post('/done-a-task/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                const DoneTask = task_status_assoc.build({
                    date_time: Date.now(),
                    task_id: req.params.id,
                    status_id: 5,
                    progress_id: 20
                });
                DoneTask.save().then(function (DoneTask1) {
                    saveLog("Task " + req.params.id + " completed", user_id);
                    res.send({ success: true, msg: 'done successfully' });
                });
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /pause-a-task
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.post('/pause-a-task', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                const pauseTask = task_status_assoc.build({
                    date_time: Date.now(),
                    task_id: req.body.id,
                    status_id: 2,
                    reason: req.body.reason
                });
                pauseTask.save().then(function (pauseTask1) {
                    saveLog("Task " + req.body.id + " paused!", user_id);
                    res.send({ success: true, msg: 'puased successfully' });
                });
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /complete-a-task
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.post('/complete-a-task', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                const completeTask = task_status_assoc.build({
                    date_time: Date.now(),
                    task_id: req.body.id,
                    status_id: 3,
                    progress_id: req.body.percentage
                });
                completeTask.save().then(function (completeTask1) {
                    saveLog("Task " + req.body.id + " completed !", user_id);
                    res.send({ success: true, msg: 'complete successfully' });
                });
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /hold-a-task
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.post('/hold-a-task', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                const holdaTask = task_status_assoc.build({
                    date_time: Date.now(),
                    task_id: req.body.id,
                    status_id: 4,
                    progress_id: req.body.percentage,
                    reason: req.body.reason
                });
                holdaTask.save().then(function (holdaTask1) {
                    saveLog("Task " + req.body.id + " holded !", user_id);
                    res.send({ success: true, msg: 'Hold successfully' });
                });
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-user-Profile
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.get('/get-user-Profile', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            loginid = decoded.id
            // loginid = 23;
            User_profile.findAll({
                where: { login_id: loginid },
                include: [
                    {
                        model: Team_assoc,
                    },
                ]
            }).then(userProfile => {
                res.send(userProfile);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : new-task-request
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 30-03-2018
    // Last Modified : 30-03-2018, Jooshifa
    // Desc          : 
    router.post('/new-task-request', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            var startDate = new Date(req.body.start_date);
            var endDate = new Date(req.body.end_date);
            start_time = req.body.start_time;
            end_time = req.body.end_time;
            startDate.setHours(start_time.hour, start_time.minute, start_time.second);
            endDate.setHours(end_time.hour, end_time.minute, end_time.second);
            if (req.body.task_name == '' || req.body.planned_hour == 0 || req.body.assigned_person == '' || req.body.priority == '' || req.body.start_date == '' || req.body.start_time == '' || req.body.end_date == '' || req.body.end_time == '') {
                res.send({ success: false, msg: 'Please fill all required fields' });
                console.log("firs");
            }
            if (startDate >= endDate) {
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
                const newtaskReq = new_task_requests.build({
                    planned_hours: req.body.planned_hour,
                    buffer_hours: req.body.buffer_hour,
                    description: req.body.description,
                    priority: req.body.priority,
                    planned_start_date: req.body.start_date,
                    planned_end_date: req.body.end_date,
                    request_status: "Pending",
                    project_module_id: req.body.module_id,
                    assigned_to_id: req.body.assigned_id,
                    complexity_id: req.body.complexity,
                    team_id: req.body.team,
                    task_name: req.body.task_name
                });
                newtaskReq.save().then(function (newRequest) {
                    const newTaskNotif = new_task_req_notifications.build({
                        is_pm_viewed: false,
                        is_admin_viewed: false,
                        is_user_viewed: false,
                        new_task_id: newRequest.id
                    });
                    newTaskNotif.save().then(function (newRequestNotification) {
                        io.sockets.emit("newtaskrequest", {
                            expiredSocketId: newRequestNotification.id
                        });
                        res.send({ success: true, msg: "Request Send successfully" });
                    });
                });
            }
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : time-extention-request
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 30-03-2018
    // Last Modified : 30-03-2018, Jooshifa
    // Desc          : 
    router.post('/time-extention-request', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.timerequired == '') {
                res.send({ success: false, msg: 'Please fill the required time' });
            }
            else {
                const timeExtention1 = time_extension_request.build({
                    additional_hours: req.body.timerequired,
                    req_status: "Pending",
                    task_id: req.body.id
                });
                timeExtention1.save().then(function (newRequest) {
                    const TimeExtNotif = time_extension_req_notification.build({
                        is_pm_viewed: false,
                        is_admin_viewed: false,
                        is_user_viewed: false,
                        request_id: newRequest.id
                    });
                    TimeExtNotif.save().then(function (newRequestNotification) {
                        io.sockets.emit("timeextention", {
                            expiredSocketId: newRequestNotification.id
                        });
                        res.send({ success: true, msg: "Request Send successfully" });
                    });
                });
            }
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    //  ---------------------------------End-------------------------------------------
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
            })
        }
        else {
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
            // var cmp_id = 1;
            // res.json(req.body);
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
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
                        temp = [];
                        resProjects.forEach(element => {
                            temp2 = []
                            element.tbl_project_modules.forEach(ele => {
                                // console.log(ele.module_name)
                                time = 0;
                                temp3 = [];
                                ele.tbl_project_tasks.forEach(elem => {
                                    time = time + elem.planned_hour + elem.buffer_hour;
                                    temp3.push(elem)
                                });
                                temp2.push({ id: ele.id, module_name: ele.module_name, project_id: ele.project_id, tbl_project_tasks: temp3, total_hour: time })
                                // temp.push(ele)
                            });
                            temp.push({ id: element.id, planned_end_date: element.planned_end_date, planned_start_date: element.planned_start_date, project_name: element.project_name, tbl_project_member_assocs: element.tbl_project_member_assocs, project_code: element.project_code, status: element.status, tbl_project_modules: temp2 })
                        });
                        res.json(temp);
                        // res.json(resProjects);
                    }
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            })
        }
        else {
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
            // var cmp_id = 1;
            // res.json(req.body);
            // var user_id = 74;
            var proId = req.body.id
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
            })
        }
        else {
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
    router.post('/getNotifications', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var id = decoded.id;
            var role = req.body.id
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
            })
        }
        else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :singleuserlog
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified :
    // Desc          : user all activity log list
    router.get('/singleuserlog', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            // var id = decoded.id;
            var login_id = decoded.id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id'],
                where: { login_id: login_id },
            }).then(userlog => {
                var user_id = userlog.id;
                Log.findAll({
                    order: [['id', 'DESC']],
                    where: { user_profile_id: user_id },
                }).then(userlog => {
                    res.json(userlog);
                });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : datefilterforlog
    // Params        : data
    // Returns       :
    // Author        : sudha
    // Date          : 16-01-2018
    // Last Modified :
    // Desc          :date filter for log
    router.post('/datefilterforlog', (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            Log.findAll({
                order: [['id', 'DESC']],
                where: {
                    createdAt: {
                        $between: [req.body.startDate, req.body.endDate]
                    }
                },
            }).then(userlog => {
                console.log(userlog);
                res.json(userlog);
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :singleuserallleave
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified :
    // Desc          : single user all leave request
    router.get('/singleuserallleave', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            // var login_id = 39;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id'],
                where: { login_id: login_id },
            }).then(userlog => {
                var user_id = userlog.id;
                Employeeleave.findAll({
                    order: [['id', 'DESC']],
                    where: { user_profile_id: user_id, delete_status: false },
                }).then(userleave => {
                    res.json(userleave);
                });
            });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteuserleave
    // Params        : id
    // Returns       :
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified :
    // Desc          : deleteuserleave
    router.put('/deleteuserleave/:id', function (req, res) {
        // console.log("id del"+req.params.id);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            // var cmp_id = decoded.cmp_id;
            // var login_id = decoded.id;
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
                }).then(user => {
                    if (!user) {
                        return res.json({ success: false, msg: 'Faild to delete  leave' });
                    } else {
                        io.sockets.emit("deleteLeaveuser", {
                            //user_id : req.params.id
                        });
                        // saveLog("Employee leave deleted!",)
                        return res.json({ success: true, msg: 'Delete  leave Successfully' });
                    }
                });
        }
        else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : adduserleave
    // Params        : data
    // Returns       :
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 28-03-2018,20-04-2018
    // Desc          : adduserleave
    router.post('/adduserleave', (req, res, next) => {
        console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            var role = req.body.id
            var user_id;
            Users.find({
                where: {
                    login_id: login_id
                }
            }).then(resUser => {
                user_id = resUser.id;
                // var login_id = 39;
                // var cmp_id = 1;
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
                User.findOne({
                    attributes: ['id', 'cmp_id'],
                    where: { login_id: login_id },
                }).then(userlog => {
                    var user_id = userlog.id;
                    var cmp_id = userlog.cmp_id;
                    //  console.log(userlog.cmp_id)
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
                                var d = new Date(daterng);
                                var date = d.getDate(daterng);
                                var day = d.getDay(daterng);//start 1
                                var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                                cmp_off_day.findOne({
                                    where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                    // where: { date: daterng, cmp_id: cmp_id },
                                }).then(offday => {
                                    if (offday) {
                                        // console.log(daterng+"holiday")
                                        callback();
                                    } else {
                                        // console.log(daterng+"not holiday")
                                        var d = new Date(daterng);
                                        var date = d.getDate(daterng);
                                        var day = d.getDay(daterng);//start 1
                                        var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                                        cmp_work_time_assocs.findOne({
                                            required: true,
                                            // where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                            where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno) }] },
                                            include: [{
                                                model: cmp_work_time,
                                                required: true,
                                                where: { cmp_id: cmp_id },
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
                                                    if (work_time1) {
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
                                                    }
                                                    callback();
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }, function (err) {
                        // console.log("tot" + total_seconds);
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
                                    Public_holiday.findAll({
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
                                            if (!isErr && (startdate == element.date || enddate == element.date)) {
                                                errMsg = "*" + element.date + "" + element.title + "" + "Holiday! ";
                                                isErr = true;
                                            }
                                        }); callback();
                                    });
                                }, function (callback) {
                                    var d = new Date(req.body.startdate);
                                    var date = d.getDate(req.body.startdate);
                                    var day = d.getDay(req.body.startdate);//start 1
                                    var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                                    cmp_work_time_assocs.findOne({
                                        required: true,
                                        // where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                        where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno) }] },
                                        include: [{
                                            model: cmp_work_time,
                                            required: true,
                                            where: { cmp_id: cmp_id },
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
                                            // console.log(cmp_id);
                                            cmp_work_time.findOne({
                                                required: true,
                                                where: { [Op.and]: [{ is_default: true, cmp_id: cmp_id }] },
                                            }).then(work_time1 => {
                                                if (work_time1) {
                                                    //  console.log("w"+work_time1);
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
                                                }
                                                callback();
                                            });
                                        }
                                    });
                                }, function (callback) {
                                    if (!isErr) {
                                        Employeeleave.findAll({
                                            required: true,
                                            // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
                                            where: {
                                                // [Op.or]: [
                                                //     {start_date: req.body.startdate, end_date: req.body.enddate},{[Op.and]: [{ cmp_id: cmp_id, user_profile_id: user_id, delete_status: false }]}
                                                //   ]
                                                [Op.and]: [{ cmp_id: cmp_id, user_profile_id: user_id, delete_status: false }],
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
                                                var leaveh = total_seconds - (seconds3 + seconds4);
                                                var leavehr = Math.abs(leaveh);//only positive value
                                                var leavehrs = moment.duration(leavehr, "seconds").format("hh:mm:ss");
                                                //    var p= Math.abs(78)
                                                // console.log(leavehrs);
                                                const addleave = Employeeleave.build({
                                                    start_date: req.body.startdate,
                                                    end_date: req.body.enddate,
                                                    cmp_id: cmp_id,
                                                    user_profile_id: user_id,
                                                    start_available_hrs: startavailablehour,
                                                    end_available_hrs: endavlhravailablehour,
                                                    leave_hrs: leavehrs,
                                                    delete_status: false,
                                                    request_status: "Pending",
                                                    is_admin_viewed: false,
                                                    is_user_viewed: false
                                                })
                                                addleave.save().then(function (leave) {
                                                    saveLog("Added Leave!", user_id);
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
            })
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : singleuserleave
    // Params        : id
    // Returns       :
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified :
    // Desc          : singleuserleave
    router.get('/singleuserleave/:id', (req, res, next) => {
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
            }).then(singleleave => {
                return res.json(singleleave);
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : updateuserleave
    // Params        : data
    // Returns       :
    // Author        : sudha
    // Date          : 28-03-2018
    // Last Modified : 03-04-2018
    // Desc          : updateuserleave
    router.post('/updateuserleave', (req, res, next) => {
        console.log(req.body);
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            var role = req.body.id
            // var login_id = 39;
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
            User.findOne({
                attributes: ['id', 'cmp_id'],
                where: { login_id: login_id },
            }).then(userlog => {
                var user_id = userlog.id;
                var cmp_id = userlog.cmp_id;
                const startDate = new Date(req.body.start_date);
                const endDate = new Date(req.body.end_date);
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
                            var d = new Date(daterng);
                            var date = d.getDate(daterng);
                            var day = d.getDay(daterng);//start 1
                            var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                            cmp_off_day.findOne({
                                where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                // where: { date: daterng, cmp_id: cmp_id },
                            }).then(offday => {
                                if (offday) {
                                    // console.log(daterng+"holiday")
                                    callback();
                                } else {
                                    // console.log(daterng+"not holiday")
                                    var d = new Date(daterng);
                                    var date = d.getDate(daterng);
                                    var day = d.getDay(daterng);//start 1
                                    var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                                    cmp_work_time_assocs.findOne({
                                        required: true,
                                        // where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                        where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno) }] },
                                        include: [{
                                            model: cmp_work_time,
                                            required: true,
                                            where: { cmp_id: cmp_id },
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
                                                if (work_time1) {
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
                                                }
                                                callback();
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }, function (err) {
                    console.log("tot" + total_seconds);
                    // });
                    //  console.log(userlog.cmp_id)
                    if (!isErr) {
                        async.series([
                            function (callback) {
                                Public_holiday.findAll({
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
                                var weekno = Math.ceil((date + (7 - day)) / 7);//start 0
                                cmp_work_time_assocs.findOne({
                                    required: true,
                                    // where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno), cmp_id: cmp_id }] },
                                    where: { [Op.and]: [{ day_no: parseInt(day), week_no: parseInt(weekno) }] },
                                    include: [{
                                        model: cmp_work_time,
                                        required: true,
                                        where: { cmp_id: cmp_id },
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
                                            if (work_time1) {
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
                                                //else{ 
                                            }
                                            callback();
                                        });
                                    }
                                });
                            }, function (callback) {
                                if (!isErr) {
                                    Employeeleave.findOne({
                                        required: true,
                                        // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
                                        where: {
                                            [Op.and]: [{ cmp_id: cmp_id, user_profile_id: user_id, delete_status: false }],
                                            [Op.or]: [{ start_date: req.body.start_date, end_date: req.body.end_date }]
                                        }
                                    }).then(leave => {
                                        // console.log(user);
                                        //return res.json(user);
                                        if (!isErr && leave && (leave.id != req.body.id)) {
                                            // if (!isErr && (leave.length > 0)) {
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
                                            var leaveh = total_seconds - (seconds3 + seconds4);
                                            var leavehr = Math.abs(leaveh);
                                            var leavehrs = moment.duration(leavehr, "seconds").format("hh:mm:ss");
                                            //    console.log("1"+seconds3);
                                            //    console.log("1"+seconds3);
                                            //    console.log("@"+seconds4);
                                            console.log(leavehrs);
                                            Employeeleave.update({
                                                start_date: req.body.start_date,
                                                end_date: req.body.end_date,
                                                cmp_id: cmp_id,
                                                user_profile_id: user_id,
                                                start_available_hrs: startavailablehour,
                                                end_available_hrs: endavlhravailablehour,
                                                leave_hrs: leavehrs,
                                                delete_status: false,
                                                request_status: "Pending",
                                                is_admin_viewed: false,
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
                                    res.json({ success: true, msg: "Leave update Successfully" });
                                } else {
                                    res.json({ success: false, msg: errMsg });
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
    // ----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :allmytimeextrequest
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 29-03-2018
    // Desc          : all my time extension request
    router.get('/allmytimeextrequest', function (req, res) {
        // var login_id = 123;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            // var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id'],
                where: { login_id: login_id },
            }).then(userlog => {
                var user_id = userlog.id;
                Time_extension.findAll({
                    order: [['id', 'DESC']],
                    required: true,
                    include: {
                        model: Project_tasks,
                        where: { assigned_to_id: user_id },
                        required: true,
                    }
                }).then(Time_extension => {
                    res.json(Time_extension);
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :mytaskrequest
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 19-03-2018
    // Last Modified : 29-03-2018
    // Desc          : my task  request
    router.get('/allmynewtaskrequest', function (req, res) {
        // var login_id = 37;
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                //   attributes: ['id'],
                where: { login_id: login_id },
            }).then(userlog => {
                var user_id = userlog.id;
                New_task.findAll({
                    order: [['id', 'DESC']],
                    required: true,
                    where: { assigned_to_id: user_id },
                }).then(usermynewtaskrequest => {
                    res.json(usermynewtaskrequest);
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :userallprojects
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 21-03-2018
    // Last Modified :
    // Desc          : user all projects
    router.get('/allProjects', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            // var login_id=123;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id', 'cmp_id'],
                where: { login_id: login_id },
            }).then(user => {
                var user_id = user.id;
                var cmp_id = user.cmp_id;
                Project.findAll({
                    attributes: ['id', 'project_name', 'planned_start_date', 'planned_end_date'],
                    required: true,
                    where: { cmp_id: cmp_id },
                    include: {
                        attributes: [],
                        model: Project_Module,
                        required: true,
                        include: {
                            attributes: [],
                            model: Project_tasks,
                            required: true,
                            where: { assigned_to_id: user_id },
                        }
                    }
                }).then(project => {
                    res.json(project);
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :projectspercentage
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 10-04-2018
    // Last Modified :
    // Desc          : user all projects percentage
    router.get('/projectspercentage/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            // var login_id=123;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id', 'cmp_id'],
                where: { login_id: login_id },
            }).then(user => {
                var user_id = user.id;
                var cmp_id = user.cmp_id;
                Project.findOne({
                    //    attributes:['id','project_name','planned_start_date','planned_end_date'],
                    required: true,
                    where: { id: req.params.id },
                    include: {
                        //   attributes:[],
                        model: Project_Module,
                        required: true,
                        include: {
                            //   attributes:[],
                            model: Project_tasks,
                            required: true,
                            where: { assigned_to_id: user_id },
                            include: [
                                // {
                                //     model: Complexity_percentage,
                                // },
                                {
                                    model: Task_status_assocs,
                                    // include: [
                                    //     {
                                    //         model: Task_status,
                                    //     },
                                    //     // {
                                    //     //     model: Progress_percentages,
                                    //     //     //  required:true,
                                    //     // }
                                    // ],
                                }
                            ],
                        }
                    }
                }).then(project => {
                    res.json(project);
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      :projectdetails
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 10-04-2018
    // Last Modified :
    // Desc          : user all projects
    router.get('/projectdetails/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            // var login_id=123;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id', 'cmp_id'],
                where: { login_id: login_id },
            }).then(user => {
                var user_id = user.id;
                var cmp_id = user.cmp_id;
                Project.findOne({
                    attributes: ['id', 'project_name', 'planned_start_date', 'planned_end_date'],
                    required: true,
                    where: { id: req.params.id },
                }).then(project => {
                    Project_Module.findAll({
                        // attributes: [[sequelize.fn('COUNT', sequelize.col('Project_tasks.id')), 'no_module_name']],
                        // attributes:[],
                        // attributes: { 
                        //     include: [[Sequelize.fn("COUNT", Sequelize.col("Project_tasks.id")), "sensorCount"]] 
                        // },
                        // attributes: [ [sequelize.fn('count', sequelize.col('id')), 'cnt']],
                        // group: ['task_id'],
                        include: [
                            {
                                model: Project,
                                attributes: [],
                                required: true,
                                where: { id: req.params.id },
                            },
                            {
                                model: Project_tasks,
                                required: true,
                                where: { assigned_to_id: user_id },
                                include: [
                                    {
                                        model: Task_status_assocs,
                                        // required:true,
                                        include: [
                                            {
                                                model: Task_status,
                                                // required:true,
                                            }
                                        ],
                                    }
                                ],
                            },
                        ]
                    }).then(myTasks => {
                        res.json({ 'singleproject': project, 'myTasks': myTasks });
                    });
                });
                // res.json({ 'project': project });res.json({ 'project': project ,'counttask':counttask});
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    //  });
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
            // var cmp_id = 1;
            // res.json(req.body);
            var id = decoded.id;
            var role = req.body.id
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                // var user_id = 74;
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
            })
        } else {
            return res.status(401).send('Invalid User');
        }
    })
    //  ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get pm by id
    // Params        : login id
    // Returns       : user info
    // Author        : Rinsha
    // Date          : 13-03-2018
    // Last Modified : 13-03-2018, Rinsha
    // Desc          : getPmByLoginid
    router.get('/getPmByLoginid/:id', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            // cmp_id = decoded.cmp_id;
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
        } else {
            return res.status(401).send('Invalid User');
        }
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
            var id = decoded.id;
            // var role = req.body.id
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
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
                                        });
                                    });
                                    const notification = Project_estimation_notification.build({
                                        estimation_id: est.id,
                                        project_id: req.body.project_id,
                                        from_id: decoded.id,
                                        to_id: this.pm_id
                                    });
                                    notification.save().then(function (notif) {
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
                                saveLog("Estimation added for project " + project_id + " !", user_id)
                            });
                            io.sockets.emit("approveEstimation", {
                            });
                            res.json({ success: true, msg: "Success" });
                        }
                    });
                });
            })
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
        // console.log(req.body)
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
        } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
        }
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            decoded = jwt.verify(authorization, Config.secret);
            if (req.body.f_name == '' || req.body.l_name == '' || req.body.gender == '' || req.body.contact_no == '') {
                res.json({ success: false, msg: "All fields are required!" });
            }
            else if (validateNo(req.body.contact_no) == false) {
                res.json({ success: false, msg: "Enter a valid phone number" });
            }
            else if (req.body.password != '' && validatePassword(req.body.password) == false) {
                res.json({ success: false, msg: "Password contain atleast 6 characters and should contain one number,one character and one special character" });
            }
            else if (req.body.password != '' && req.body.password != req.body.c_password) {
                res.json({ success: false, msg: "Password does'nt match!" });
            }
            else {
                User_profile.find({
                    where: {
                        login_id: decoded.id
                    },
                    include: {
                        model: Login
                    }
                }).then(currentUser => {
                    if (req.body.imgSrc != '../assets/images/dp.jpg' && req.body.imgSrc != '../assets/profile_upload/' + currentUser.tbl_login.profile_image) {
                        // console.log("new");
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
                    else if (req.body.imgSrc == '../assets/profile_upload/' + currentUser.tbl_login.profile_image) {
                        // console.log("old")
                        profile_image = currentUser.tbl_login.profile_image;
                    }
                    else if (req.body.imgSrc == '../assets/images/dp.jpg') {
                        // console.log("no image");
                        profile_image = '';
                    }
                    if (req.body.password == '') {
                        password = currentUser.tbl_login.password;
                    }
                    else {
                        // password = req.body.password;
                        var password = '';
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(req.body.password, salt, (err, hash) => {
                                if (err) throw err;
                                password = hash;
                            })
                        });
                    }
                    // console.log(password)
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
                                if (password != '') {
                                    Login.update({
                                        password: password,
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
                                                saveLog("User profile updated!", currentUser.id)
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
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var id = decoded.id;
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                // var user_id = 74;
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
            var role = req.body.id
            var user_id;
            Users.find({
                where: {
                    login_id: id
                }
            }).then(resUser => {
                user_id = resUser.id;
                // var cmp_id = 1;
                // res.json(req.body);
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
                        temp = [];
                        resProjects.forEach(element => {
                            temp2 = []
                            element.tbl_project_modules.forEach(ele => {
                                // console.log(ele.module_name)
                                time = 0;
                                temp3 = [];
                                ele.tbl_project_tasks.forEach(elem => {
                                    time = time + elem.planned_hour + elem.buffer_hour;
                                    temp3.push(elem)
                                });
                                temp2.push({ id: ele.id, module_name: ele.module_name, project_id: ele.project_id, tbl_project_tasks: temp3, total_hour: time })
                                // temp.push(ele)
                            });
                            temp.push({ id: element.id, planned_end_date: element.planned_end_date, planned_start_date: element.planned_start_date, project_name: element.project_name, tbl_project_member_assocs: element.tbl_project_member_assocs, project_code: element.project_code, status: element.status, tbl_project_modules: temp2 })
                        });
                        res.json(temp);
                        // res.json(resProjects);
                    }
                }).catch(err => {
                    res.json({
                        status: 0,
                        message: "Error occured! Try again!"
                    })
                })
            })
        } else {
            return res.status(401).send('Invalid User');
        }
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
                            required: true,
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
                        model: TimeExtensionRequest, as: 'xt',
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
    function saveLog(action, userId) {
        Log.build({
            action: action,
            user_profile_id: userId
        }).save().then(resLog => {
            return true;
        }).catchI(err => {
            return false;
        })
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Get logged in entity
    // Params        : 
    // Returns       : Get logged in entity
    // Author        : Rinsha
    // Date          : 20-04-2018
    // Last Modified : 20-04-2018, Rinsha
    // Desc          :   
    router.get('/getLoggedinUser', (req, res, next) => {
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
    // Function      :allprojectsvsstatus
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 10-04-2018
    // Last Modified :
    // Desc          : user all projects vs status
    router.get('/allprojectsvsstatus', function (req, res) {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.substring(4), decoded;
            //     try {
            decoded = jwt.verify(authorization, Config.secret);
            var cmp_id = decoded.cmp_id;
            var login_id = decoded.id;
            // var login_id=123;
            if (config.use_env_variable) {
                var sequelize = new Sequelize(process.env[config.use_env_variable]);
            } else {
                var sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
            User.findOne({
                attributes: ['id', 'cmp_id'],
                where: { login_id: login_id },
            }).then(user => {
                var user_id = user.id;
                var cmp_id = user.cmp_id;
                Project.findAll({
                    //    attributes:['id','project_name','planned_start_date','planned_end_date'],
                    required: true,
                    where: { cmp_id: cmp_id },
                    include: {
                        //   attributes:[],
                        model: Project_Module,
                        required: true,
                        include: {
                            //   attributes:[],
                            model: Project_tasks,
                            required: true,
                            where: { assigned_to_id: user_id },
                            include: [
                                // {
                                //     model: Complexity_percentage,  
                                // },
                                {
                                    model: Task_status_assocs,
                                    //  required:true,
                                    include: [
                                        {
                                            model: Task_status,
                                            // required:true,
                                        },
                                        // {
                                        //     model: Progress_percentages,
                                        //   //  required:true,
                                        // }
                                    ],
                                }
                            ],
                        }
                    }
                }).then(project => {
                    res.json(project);
                });
            });
        } else {
            return res.status(401).send('Invalid User');
        }
    });
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getAccessRightsforRole
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
                where: {
                    role_id: role_id,
                    cmp_id: cmp_id
                }
            }).then(resRights => {
                res.json(resRights)
            })
        }
    })
    // ----------------------------------End-----------------------------------
    module.exports = router;
    return router;
}
module.exports = returnRouter;