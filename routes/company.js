
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
                    return res.json({
                        success: true,
                        msg: 'login succesfully', 
                        token: 'JWT ' + token,
                        login: {
                            id: login.id,
                            role_id: login.role_id,
                            status: login.cmp_status
                        }
                    });
                }
                // } else {

                //     return res.json({ success: false, msg: 'Wrong Password' });
                // }
            });
            // console.log(login);

        });

    });



    // router.post('/authenticate', (req, res) => {
    //     comparePassword = function (candPass, hash, callback) {
    //     bcrypt.compare(candPass, hash, (err, isMatch) => {
    //         if (err) throw err;
    //         callback(null, isMatch);
    //     })
    //   }
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

    //         if( login==null || login== [] || login == '' ){
    //             return res.json({ success: false, msg: 'User Not found' });
    //         }

    //         // comparePassword(password,login.password, (err, isMatch) => {
    //             comparePassword(password,login.password, (err, isMatch) => {
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
    //                     else if (login.block_status == false && login.delete_status == false && login.is_profile_completed == true && login.is_verified == true) {
    //                     const token = jwt.sign(login.toJSON(), Config.secret, {
    //                         expiresIn: 60400 // sec 1 week
    //                     });
    //                     return res.json({
    //                         success: true,
    // msg: 'login succesfully',
    //                         token: 'JWT ' + token,
    //                         login: {
    //                             id: login._id,
    //                             role: login.role,
    //                             status: login.cmp_status
    //                         }
    //                     });
    //                 }
    //             } else {

    //                 return res.json({ success: false, msg: 'Wrong Password' });
    //             }
    //         });
    //         // console.log(login);

    //     });

    // });

    // ----------------------------------End-------------------------------------------
    module.exports = router;

    return router;
}
module.exports = returnRouter;