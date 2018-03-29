'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var tbl_log = sequelize.define('tbl_log', {
    action: DataTypes.TEXT
  }, {});
  tbl_log.associate = function (models) {
    // associations can be defined here
    tbl_log.belongsTo(models.tbl_user_profile, {
      foreignKey: 'user_profile_id',
    });


  };
  return tbl_log;
};