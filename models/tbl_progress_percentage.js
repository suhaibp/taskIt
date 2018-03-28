'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_progress_percentage = sequelize.define('tbl_progress_percentage', {
    percentage: DataTypes.STRING
  }, {});
  tbl_progress_percentage.associate = function(models) {
    // associations can be defined here
    tbl_progress_percentage.hasMany(models.tbl_project_tasks, {
      foreignKey: 'progress_id',
    });

  };
  return tbl_progress_percentage;
};