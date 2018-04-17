'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_task_time_assoc = sequelize.define('tbl_task_time_assoc', {}, {});
  tbl_task_time_assoc.associate = function(models) {
    tbl_task_time_assoc.belongsTo(models.tbl_project_tasks, {
      foreignKey: 'task_id',
    });
    // associations can be defined here
  };
  return tbl_task_time_assoc;
};