'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_estimation_notification = sequelize.define('tbl_estimation_notification', {
    is_completed: DataTypes.BOOLEAN
  }, {});
  tbl_estimation_notification.associate = function(models) {
    // associations can be defined here
    tbl_estimation_notification.belongsTo(models.tbl_project, {
      foreignKey: 'project_id',
    });
    tbl_estimation_notification.belongsTo(models.tbl_estimation, {
      foreignKey: 'estimation_id',
    });
    tbl_estimation_notification.belongsTo(models.tbl_user_profile, {
      foreignKey: 'from_id',
      as: 'Fromid',
    });
    tbl_estimation_notification.belongsTo(models.tbl_user_profile, {
      foreignKey: 'to_id',
      as: 'Toid',
    });
  };
  return tbl_estimation_notification;
};