'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_role = sequelize.define('tbl_role', {
    role: DataTypes.STRING,
    is_visible: DataTypes.BOOLEAN
  }, {});
  tbl_role.associate = function(models) {
    // associations can be defined here
    tbl_role.hasMany(models.tbl_login, {
      foreignKey: 'role_id',
    });

  };
  return tbl_role;
};