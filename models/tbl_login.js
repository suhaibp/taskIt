'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var tbl_login = sequelize.define('tbl_login', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    google_id: {
      type: Sequelize.INTEGER
    },
    google_token: {
      type: Sequelize.STRING
    },
    is_verified: {
      type: Sequelize.BOOLEAN
    },
    block_status: {
      type: Sequelize.BOOLEAN
    },
    delete_status: {
      type: Sequelize.BOOLEAN
    },
    profile_image: {
      type: Sequelize.STRING
    },
  }, {});
  tbl_login.associate = function(models) {
    // associations can be defined here
    tbl_login.belongsTo(models.tbl_role, {
      foreignKey: 'role_id'
    });

  };
  return tbl_login;
};