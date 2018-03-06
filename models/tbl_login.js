'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var tbl_login = sequelize.define('tbl_login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.INTEGER,
    google_token: DataTypes.STRING,
    fb_id: DataTypes.INTEGER,
    fb_token: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    block_status: DataTypes.BOOLEAN,
    delete_status: DataTypes.BOOLEAN,
    profile_image: DataTypes.STRING,
    cmp_status: DataTypes.STRING
  }, {});
  tbl_login.associate = function(models) {
// associations can be defined here
    tbl_login.belongsTo(models.tbl_role, {
      foreignKey: 'role_id',
      });

      tbl_login.hasMany(models.tbl_company, {
        foreignKey: 'login_id',
      });
      tbl_login.hasMany(models.tbl_user_profile, {
        foreignKey: 'login_id',
      });
  };
  return tbl_login;
};