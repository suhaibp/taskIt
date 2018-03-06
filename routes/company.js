var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var Plans = models.tbl_plan;

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
    module.exports = router;
    return router;
}
module.exports = returnRouter;