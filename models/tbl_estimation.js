'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_estimation = sequelize.define('tbl_estimation', {
    date_time: DataTypes.DATE,
    is_resubmitted: DataTypes.BOOLEAN,
    is_accepted: DataTypes.BOOLEAN,
    estimation_hour: DataTypes.DOUBLE
  }, {});
  tbl_estimation.associate = function(models) {
    // associations can be defined here
    tbl_estimation.belongsTo(models.tbl_project, {
      foreignKey: 'project_id',
    });
    tbl_estimation.belongsTo(models.tbl_project_estimation_team, {
      foreignKey: 'estimation_team_id',
    });
    tbl_estimation.hasMany(models.tbl_estimation_module, {
      foreignKey: 'estimation_id',
    });
    tbl_estimation.hasMany(models.tbl_estimation_notification, {
      foreignKey: 'estimation_id',
    });
    tbl_estimation.hasMany(models.tbl_estimation_notification, {
      foreignKey: 'estimation_id',
    });
  };
  return tbl_estimation;
};