
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
var new_task_requests = models.tbl_new_task_request;
var new_task_req_notifications = models.tbl_new_task_req_notification;
var new_task_requests = models.tbl_new_task_request;
var time_extension_request = models.tbl_time_extension_request;
var time_extension_req_notification = models.tbl_time_extension_req_notification;
//--------Yasir Poongadan ------
var Projects_member_assoc = models.tbl_project_member_assoc;
//------------------------------
var ip = require("ip");
'use strict';
const emailTemplate = require('../template/verification_email');
var Login = models.tbl_login;
var Role = models.tbl_role;
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
var Estimation = models.tbl_estimation;
var Estimation_team = models.tbl_project_estimation_team;
var Complexity_percentage = models.tbl_complexity_percentage;
var Project_modules = models.tbl_project_modules;
var Project_tasks = models.tbl_project_tasks;
var task_status_assoc = models.tbl_task_status_assoc;
var task_statuses = models.tbl_task_status;
var progress_percentage = models.tbl_progress_percentage

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
        array = [];
        array2 = [];
        loginid = 132;
        User_profile.findOne({
            where: {
                login_id: loginid
            }
        }).then(userProfile => {
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
        array = [];
        array2 = [];
        loginid = 132;
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
        // else {
        //     return res.status(401).send('Invalid User');
        // }

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
        progress_percentage.findAll({
        }).then(progress_percentage => {
            res.send(progress_percentage);
        });
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : /get-progress-percentage
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc  

    router.get('/get-task-time', function (req, res) {
        progress_percentage.findAll({
        }).then(progress_percentage => {
            res.send(progress_percentage);
        });
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
        const startTask = task_status_assoc.build({
            date_time: Date.now(),
            task_id: req.params.id,
            status_id: 3,
        });
        startTask.save().then(function (ResstartTask) {
            res.send({ success: true, msg: 'start suucessfully' });
        });
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
    router.post('/done-a-task/:id', function (req, res) {
        const DoneTask = task_status_assoc.build({
            date_time: Date.now(),
            task_id: req.params.id,
            status_id: 5,
            progress_id: 20
        });
        DoneTask.save().then(function (DoneTask1) {
            res.send({ success: true, msg: 'done successfully' });
        });
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
        console.log(req.body);
        const pauseTask = task_status_assoc.build({
            date_time: Date.now(),
            task_id: req.body.id,
            status_id: 2,
            reason: req.body.reason
        });
        pauseTask.save().then(function (pauseTask1) {
            res.send({ success: true, msg: 'puased successfully' });
        });
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
        // console.log(req.body);
        const completeTask = task_status_assoc.build({
            date_time: Date.now(),
            task_id: req.body.id,
            status_id: 3,
            progress_id: req.body.percentage

        });
        completeTask.save().then(function (completeTask1) {
            res.send({ success: true, msg: 'complete successfully' });
        });
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
        const holdaTask = task_status_assoc.build({
            date_time: Date.now(),
            task_id: req.body.id,
            status_id: 4,
            progress_id: req.body.percentage,
            reason: req.body.reason
        });
        holdaTask.save().then(function (holdaTask1) {
            res.send({ success: true, msg: 'Hold successfully' });
        });
    });

    // ---------------------------------End-------------------------------------------

    // ---------------------------------Start-------------------------------------------
    // Function      : /getUserProfile
    // Params        : user details
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-03-2018
    // Last Modified : 29-03-2018, Jooshifa
    // Desc         
    router.get('/get-user-Profile', function (req, res) {
        // if (req.headers && req.headers.authorization) {
        //     var authorization = req.headers.authorization.substring(4), decoded;
        //     decoded = jwt.verify(authorization, Config.secret);
        // loginid = decoded.id
        loginid = 23;

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

        // else {
        //     return res.status(401).send('Invalid User');
        // }
    });
    // ---------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : decodeBase64Image
    // Params        : base64encoded image
    // Returns       : image type, extension, data
    // Author        : Jooshifa
    // Date          : 30-03-2018
    // Last Modified : 
    // Desc          : for decoding base64encoded image

    function decodeBase64Image(dataString) {
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (matches == null || matches == '' || matches == []) {

        }
        else {
            var response = {};
            // console.log(matches);
            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            ext = matches[1].split("/");
            response.ext = ext[1];
            response.data = new Buffer(matches[2], 'base64');
            return response;
        }
    }
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : new-task-request
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 30-03-2018
    // Last Modified : 30-03-2018, Jooshifa
    // Desc          : 

    router.post('/new-task-request', function (req, res) {
        // console.log("hreeee");
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

    });
    //  ---------------------------------End-------------------------------------------

    //  ---------------------------------Start-------------------------------------------
    // Function      : new-task-request
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 30-03-2018
    // Last Modified : 30-03-2018, Jooshifa
    // Desc          : 
    router.post('/time-extention-request', function (req, res) {
        // console.log("hreeee");
        if (req.body.timerequired == '') {
            res.send({ success: false, msg: 'Please fill the required time' });
            console.log("firs");
        }
        else {
            var time_extension_request = models.tbl_time_extension_request;
            var time_extension_req_notification = models.tbl_time_extension_req_notification;
            const timeExtention = time_extension_request.build({
                additional_hours: req.body.timerequired,
                req_status: "Pending",
                task_id: req.body.id
            });
            timeExtention.save().then(function (newRequest) {
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
    });

    //  ---------------------------------End-------------------------------------------
    module.exports = router;
    return router;
}
module.exports = returnRouter;
