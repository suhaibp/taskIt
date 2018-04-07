var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
const Op = Sequelize.Op
var moment = require('moment');
moment().format();
async = require("async");
var dateFormat = require('dateformat');
var moment = require('moment');
moment().format();
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
const datesBetween = require('dates-between');
var Log = models.tbl_log;
var Login = models.tbl_login;
// var Leave = models.tbl_emp_leave;
var Employeeleave = models.tbl_emp_leave;
var cmp_off_day = models.tbl_cmp_off_day_assoc;
var cmp_work_time = models.tbl_cmp_work_time;
var public_holiday = models.tbl_public_holiday;
var Role = models.tbl_role;
var Company = models.tbl_company;
var User = models.tbl_user_profile;
var Time_extension = models.tbl_time_extension_request;
var New_task = models.tbl_new_task_request;
var Project_tasks = models.tbl_project_tasks;
var Project = models.tbl_project;
var Project_Module = models.tbl_project_modules;
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      :singleuserlog
    // Params        :
    // Returns       :
    // Author        : sudha
    // Date          : 16-03-2018
    // Last Modified :
    // Desc          : user all activity log list
    router.get('/singleuserlog', function(req, res) {
  var login_id=35;
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
     User.findOne({
      attributes: ['id'],
        where: {login_id: login_id},
      }).then(userlog => {
       var user_id =userlog.id;
        Log.findAll({
        order: [['id', 'DESC']],
        where: {user_profile_id: user_id},
      }).then(userlog => {
        res.json(userlog);
      });
    });
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
        console.log(req.body);
        if (config.use_env_variable) {
            var sequelize = new Sequelize(process.env[config.use_env_variable]);
          } else {
            var sequelize = new Sequelize(config.database, config.username, config.password, config);
          }
        Log.findAll({
            order: [['id', 'DESC']],
            where: {  createdAt: {
        $between: [req.body.startDate, req.body.endDate]
    }},
          }).then(userlog => {
           console.log(userlog);
            res.json(userlog);
          });
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
    router.get('/singleuserallleave', function(req, res) {
      var login_id=39;
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
         User.findOne({
          attributes: ['id'],
            where: {login_id: login_id},
          }).then(userlog => {
           var user_id =userlog.id;
           Employeeleave.findAll({
              order: [['id', 'DESC']],
              where: {user_profile_id: user_id,delete_status:false},
            }).then(userleave => {
              res.json(userleave);
            });
          });
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
               return res.json({ success: true, msg: 'Delete  leave Successfully' });
           }
       });
   });
   // ----------------------------------End-----------------------------------------------
   // ---------------------------------Start-------------------------------------------
    // Function      : adduserleave
    // Params        : data
    // Returns       :
    // Author        : sudha
    // Date          : 15-03-2018
    // Last Modified : 28-03-2018
    // Desc          : adduserleave
    router.post('/adduserleave', (req, res, next) => {
      console.log(req.body);
      var login_id=39;
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
      if (!isErr && time_format >= req.body.enddate ) {
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
      if (!isErr && req.body.endavlhr == '' || req.body.endavlhr == null ) {
          errMsg = "* Failed, Please select end available hour!";
          isErr = true;
      }
      User.findOne({
        attributes: ['id','cmp_id'],
          where: {login_id: login_id},
        }).then(userlog => {
         var user_id =userlog.id;
         var cmp_id =userlog.cmp_id;
      //  console.log(userlog.cmp_id)
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
      if (!isErr){
      async.series([
          function (callback) {
              if (!isErr &&  req.body.startavlhr.hour == null) {
                  errMsg = "* Failed, Please select start available hour!";
                  isErr = true;
              }
              if (!isErr &&  req.body.startavlhr.minute == null) {
                  errMsg = "* Failed, Please select start available minute!";
                  isErr = true;
              }
              if (!isErr &&  req.body.endavlhr.hour == null) {
                  errMsg = "* Failed, Please select end available hour!";
                  isErr = true;
              }
              if (!isErr &&  req.body.endavlhr.minute == null) {
                  errMsg = "* Failed, Please select end available minute!";
                  isErr = true;
              }
              public_holiday.findAll({
                  attributes: ['title','date'],
                  required:true,
                 where: {cmp_id:cmp_id},
                  }).then(holiday => {
                     // console.log(holiday.title);
                      holiday.forEach((element) => {
                        var startdate =  dateFormat(req.body.startdate, "isoDate");
                        var enddate =  dateFormat(req.body.enddate, "isoDate");
                       console.log("jk"+startdate);
                       console.log(element.date);
                      if (!isErr && startdate == element.date && enddate == element.date) {
                          errMsg = "*"+element.date+""+element.title+""+"Holiday! ";
                          isErr = true;
                      }
                  }); callback();
              });
           }, function (callback) {
              var d = new Date(req.body.startdate);
              var date = d.getDate(req.body.startdate);
              var day = d.getDay(req.body.startdate);//start 1
              var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
              var weekno = weekOfMonth+1;
                  //console.log(day);
                  // console.log(weekno);
                  //  console.log( parseInt(weekOfMonth));
   cmp_off_day.findOne({
     required:true,
     where: {[Op.and]:[{day_no:parseInt(day),week_no:parseInt(weekno),cmp_id:cmp_id}]},
      include: [{
              model: cmp_work_time,
              required:true,
             }]
  }).then(work_time => {
      if(work_time){
             // console.log(work_time.tbl_cmp_work_time.start_time)
             // console.log(work_time.tbl_cmp_work_time.end_time)
                  // parse time using 24-hour clock and use UTC to prevent DST issues
                  var start = moment.utc('"'+work_time.tbl_cmp_work_time.start_time+'"', "HH:mm:ss");
                  var end = moment.utc('"'+work_time.tbl_cmp_work_time.end_time+'"', "HH:mm:ss");
                  // account for crossing over to midnight the next day
                  if (end.isBefore(start)) end.add(1, 'day');
                  // calculate the duration
                  var d = moment.duration(end.diff(start));
                  // subtract the lunch break
                  // d.subtract(30, 'minutes');
                  // format a string result
                  var s = moment.utc(+d).format('H');
                      console.log("s"+s);
                      console.log(req.body.startavlhr.hour);
              //  res.json(work_time);
                      if(!isErr && (parseFloat(s) < parseFloat(req.body.startavlhr.hour))){
                          errMsg = "* Failed,working hour exceed available hour !";
                          isErr = true;
                          }
                          callback();
                          //else{  }
          }else{
            // console.log(cmp_id);
              cmp_work_time.findOne({
                 required:true,
                 where: {[Op.and]:[{is_default:true,cmp_id:cmp_id}]},
              }).then(work_time1 => {
                //  console.log("w"+work_time1);
                //  console.log(work_time1.end_time)
                      // parse time using 24-hour clock and use UTC to prevent DST issues
                      var start = moment.utc('"'+work_time1.start_time+'"', "HH:mm:ss");
                      var end = moment.utc('"'+work_time1.end_time+'"', "HH:mm:ss");
                      // account for crossing over to midnight the next day
                      if (end.isBefore(start)) end.add(1, 'day');
                      // calculate the duration
                      var d1 = moment.duration(end.diff(start));
                      // subtract the lunch break
                      // d.subtract(30, 'minutes');
                      // format a string result
                      var s1 = moment.utc(+d1).format('H');
                          console.log("e"+s1);
                          console.log(req.body.endavlhr.hour);
                  //  res.json(work_time);
                          if(!isErr && (parseFloat(s1) < parseFloat(req.body.endavlhr.hour))){
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
              required:true,
            // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
              where: {[Op.and]:[{cmp_id:cmp_id,user_profile_id:user_id,delete_status:false}],
              [Op.or]:[{start_date:req.body.startdate,end_date:req.body.enddate}]}
          }).then(leave => {
              // console.log(user);
              //return res.json(user);
              if (!isErr && (leave.length > 0)) {
                  errMsg = " Already Exists";
                  isErr = true;
                  res.json({ success: false, msg: errMsg });
              }else{
                  var hh = req.body.startavlhr.hour;
                  var mm = req.body.startavlhr.minute;
                  var ss = req.body.startavlhr.second;
                  if (hh < 10) {hh = "0"+hh;}
                  if (mm < 10) {mm = "0"+mm;}
                  if (ss < 10) {ss = "0"+ss;}
                  // This formats your string to HH:MM:SS
                  var startavailablehour = hh+":"+mm+":"+ss;
                 console.log("q"+startavailablehour);
                  var hh1 = req.body.endavlhr.hour;
                  var mm1 = req.body.endavlhr.minute;
                  var ss1 = req.body.endavlhr.second;
                  if (hh1 < 10) {hh = "0"+hh1;}
                  if (mm1 < 10) {mm = "0"+mm1;}
                  if (ss1 < 10) {ss = "0"+ss1;}
                  // This formats your string to HH:MM:SS
                  var endavlhravailablehour = hh+":"+mm+":"+ss;
                  console.log("d"+endavlhravailablehour);
                  var a2 = startavailablehour.split(':'); // split it at the colons
                  // minutes are worth 60 seconds. Hours are worth 60 minutes.
                  var seconds3 = (+a2[0]) * 60 * 60 + (+a2[1]) * 60 + (+a2[2]);
                  var a3 = endavlhravailablehour.split(':'); // split it at the colons
                  // minutes are worth 60 seconds. Hours are worth 60 minutes.
                  var seconds4 = (+a3[0]) * 60 * 60 + (+a3[1]) * 60 + (+a3[2]);
                 var leavehr = total_seconds - (seconds3 + seconds4);
                 var leavehrs = moment.duration(leavehr, "seconds").format("hh:mm:ss");
                 console.log(leavehrs);
                  const addleave = Employeeleave.build({
                      start_date: req.body.startdate,
                      end_date: req.body.enddate,
                      cmp_id: cmp_id,
                      user_profile_id:user_id,
                      start_available_hrs: startavailablehour,
                      end_available_hrs: endavlhravailablehour,
                      leave_hrs: leavehrs,
                      delete_status: false,
                      request_status: "Pending",
                      is_admin_viewed:false,
                      is_user_viewed:false
                  })
                  addleave.save().then(function (leave) {
                      callback();
                  })
              }
          });
      }else{
          callback();
      }
  }
      ],
      function (err) {
          if (!isErr){
            io.sockets.emit("Leaveaddeduser", {
                //user_id : req.params.id
            });
              res.json({ success: true, msg: "Leave added Successfully" });
          }else{
              res.json({ success: false, msg: errMsg });
          }
      });
  }else{
      res.json({ success: false, msg: errMsg });
  }
});
});
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
        if (config.use_env_variable) {
         var sequelize = new Sequelize(process.env[config.use_env_variable]);
     } else {
         var sequelize = new Sequelize(config.database, config.username, config.password, config);
     }
     Employeeleave.findOne({
         where: {id: req.params.id},
     }).then(singleleave => {
         return res.json(singleleave);
     });
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
      var login_id=39;
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
      if (!isErr && time_format >= req.body.end_date ) {
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
      if (!isErr && req.body.endavlhr == '' || req.body.endavlhr == null ) {
          errMsg = "* Failed, Please select end available hour!";
          isErr = true;
      }
      User.findOne({
        attributes: ['id','cmp_id'],
          where: {login_id: login_id},
        }).then(userlog => {
         var user_id =userlog.id;
         var cmp_id =userlog.cmp_id;
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
      //  console.log(userlog.cmp_id)
      if (!isErr){
          async.series([
              function (callback) {
                  public_holiday.findAll({
                      attributes: ['title','date'],
                      required:true,
                     where: {cmp_id:cmp_id},
                      }).then(holiday => {
                         // console.log(holiday.title);
                          holiday.forEach((element) => {
                            var startdate =  dateFormat(req.body.start_date, "isoDate");
                            var enddate =  dateFormat(req.body.end_date, "isoDate");
                          //  console.log("jk"+startdate);
                          //  console.log(element.date);
                          if (!isErr && startdate == element.date && enddate == element.date) {
                              errMsg = "*"+element.date+""+element.title+""+"Holiday! ";
                              isErr = true;
                          }
                      }); callback();
                  });
               }, function (callback) {
                  var d = new Date(req.body.start_date);
                  var date = d.getDate(req.body.start_date);
                  var day = d.getDay(req.body.start_date);//start 1
                  var weekOfMonth = Math.ceil((date - 1 - day) / 7);//start 0
                  var weekno = weekOfMonth+1;
                      //console.log(day);
                      // console.log(weekno);
                      //  console.log( parseInt(weekOfMonth));
       cmp_off_day.findOne({
         required:true,
         where: {[Op.and]:[{day_no:parseInt(day),week_no:parseInt(weekno),cmp_id:cmp_id}]},
          include: [{
                  model: cmp_work_time,
                  required:true,
                 }]
      }).then(work_time => {
          if(work_time){
                 // console.log(work_time.tbl_cmp_work_time.start_time)
                 // console.log(work_time.tbl_cmp_work_time.end_time)
                      // parse time using 24-hour clock and use UTC to prevent DST issues
                      var start = moment.utc('"'+work_time.tbl_cmp_work_time.start_time+'"', "HH:mm:ss");
                      var end = moment.utc('"'+work_time.tbl_cmp_work_time.end_time+'"', "HH:mm:ss");
                      // account for crossing over to midnight the next day
                      if (end.isBefore(start)) end.add(1, 'day');
                      // calculate the duration
                      var d = moment.duration(end.diff(start));
                      // subtract the lunch break
                      // d.subtract(30, 'minutes');
                      // format a string result
                      var s = moment.utc(+d).format('H');
                          console.log("s"+s);
                          console.log(req.body.startavlhr.hour);
                  //  res.json(work_time);
                          if(!isErr && (parseFloat(s) < parseInt(req.body.startavlhr.hour))){
                              errMsg = "* Failed,working hour exceed available hour !";
                              isErr = true;
                              }
                              callback();
                              //else{  }
              }else{
                  cmp_work_time.findOne({
                     required:true,
                     where: {[Op.and]:[{is_default:true,cmp_id:cmp_id}]},
                  }).then(work_time1 => {
                    //  console.log(work_time1.start_time)
                    //  console.log(work_time1.end_time)
                          // parse time using 24-hour clock and use UTC to prevent DST issues
                          var start = moment.utc('"'+work_time1.start_time+'"', "HH:mm:ss");
                          var end = moment.utc('"'+work_time1.end_time+'"', "HH:mm:ss");
                          // account for crossing over to midnight the next day
                          if (end.isBefore(start)) end.add(1, 'day');
                          // calculate the duration
                          var d1 = moment.duration(end.diff(start));
                          // subtract the lunch break
                          // d.subtract(30, 'minutes');
                          // format a string result
                          var s1 = moment.utc(+d1).format('H');
                              console.log("e"+s1);
                              console.log(req.body.endavlhr.hour);
                      //  res.json(work_time);
                              if(!isErr && (parseFloat(s1) < parseInt(req.body.endavlhr.hour))){
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
                required:true,
              // where: {[Op.and]:[{start_date:req.body.startdate,end_date:req.body.enddate,cmp_id:cmp_id,user_profile_id:req.body.emp_id}]}
                where: {[Op.and]:[{cmp_id:cmp_id,user_profile_id:user_id,delete_status:false}],
                [Op.or]:[{start_date:req.body.start_date,end_date:req.body.end_date}]}
            }).then(leave => {
                // console.log(user);
                //return res.json(user);
                if (!isErr && leave && (leave.id != req.body.id)) {
                // if (!isErr && (leave.length > 0)) {
                    errMsg = " Already Exists";
                    isErr = true;
                    res.json({ success: false, msg: errMsg });
                }else{
              var hh = parseInt(req.body.startavlhr.hour);
              var mm =  parseInt(req.body.startavlhr.minute);
              var ss =  parseInt(req.body.startavlhr.second);
              if (hh < 10) {hh = "0"+hh;}
              if (mm < 10) {mm = "0"+mm;}
              if (ss < 10) {ss = "0"+ss;}
              // This formats your string to HH:MM:SS
              var startavailablehour = hh+":"+mm+":"+ss;
             console.log("q"+startavailablehour);
              var hh1 =  parseInt(req.body.endavlhr.hour);
              var mm1 =  parseInt(req.body.endavlhr.minute);
              var ss1 =  parseInt(req.body.endavlhr.second);
              if (hh1 < 10) {hh = "0"+hh1;}
              if (mm1 < 10) {mm = "0"+mm1;}
              if (ss1 < 10) {ss = "0"+ss1;}
              // This formats your string to HH:MM:SS
              var endavlhravailablehour = hh+":"+mm+":"+ss;
              console.log("d"+endavlhravailablehour);
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
                              user_profile_id: user_id,
                              start_available_hrs: startavailablehour,
                              end_available_hrs: endavlhravailablehour,
                              leave_hrs: leavehrs,
                              delete_status: false,
                              request_status: "Pending",
                              is_admin_viewed:false,
                              is_user_viewed:false
                          }, {
                                  where: {
                                      id: req.body.id
                                  }
                              }).then(updateempleave => {
                          callback();
                      })
                    }
                });
          }else{
              callback();
          }
      }
          ],
          function (err) {
              if (!isErr){
                io.sockets.emit("Leaveaddeduser", {
                    //user_id : req.params.id
                });
                  res.json({ success: true, msg: "Leave added Successfully" });
              }else{
                  res.json({ success: false, msg: errMsg });
              }
          });
      }else{
          res.json({ success: false, msg: errMsg });
      }
    });
});
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
    router.get('/allmytimeextrequest', function(req, res) {
      var login_id=123;
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
         User.findOne({
          attributes: ['id'],
            where: {login_id: login_id},
          }).then(userlog => {
           var user_id =userlog.id;
           Time_extension.findAll({
              order: [['id', 'DESC']],
              required:true,
              include: {
                model: Project_tasks,
                where: {assigned_to_id: user_id},
                required: true,
            }
            }).then(Time_extension => {
                res.json(Time_extension);
            });
          });
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
    router.get('/allmynewtaskrequest', function(req, res) {
      var login_id=37;
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
         User.findOne({
        //   attributes: ['id'],
            where: {login_id: login_id},
          }).then(userlog => {
           var user_id =userlog.id;
              New_task.findAll({
              order: [['id', 'DESC']],
              required:true,
              where: {assigned_to_id: user_id},
            }).then(usermynewtaskrequest => {
              res.json(usermynewtaskrequest);
            });
          });
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
    router.get('/allProjects', function(req, res) {
      var login_id=123;
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
         User.findOne({
          attributes: ['id','cmp_id'],
            where: {login_id: login_id},
          }).then(user => {
           var user_id =user.id;
           var cmp_id =user.cmp_id;
           Project.findAll({
             attributes:['id','project_name'],
              required:true,
           
             where: {cmp_id:cmp_id},

             include:{
                attributes:[],
                model: Project_Module,
                required:true,
                include:{
                    attributes:[],
                    model: Project_tasks,
                    required:true,
                    where: {assigned_to_id :user_id},
                }
             }
            }).then(project => {
              res.json(project);
            });
          });
              });
// ----------------------------------End-------------------------------------------

    module.exports = router;
    return router;
    }
    module.exports = returnRouter;