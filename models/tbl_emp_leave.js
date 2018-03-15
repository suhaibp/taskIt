'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_emp_leave = sequelize.define('tbl_emp_leave', {
    start_date: DataTypes.DATE
  }, {});
  tbl_emp_leave.associate = function (models) {
    // associations can be defined here
    tbl_emp_leave.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
    });
    tbl_emp_leave.belongsTo(models.tbl_user_profile, {
      foreignKey: 'user_profile_id',
    });

  };
  return tbl_emp_leave;
};