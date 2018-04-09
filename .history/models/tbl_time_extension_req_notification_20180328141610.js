'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_time_extension_req_notification = sequelize.define('tbl_time_extension_req_notification', {
    is_team_leader_viewed: DataTypes.BOOLEAN,
    is_admin_viewed: DataTypes.BOOLEAN,
    is_user_viewed: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    req_id: DataTypes.INTEGER
    
  }, {});
  tbl_time_extension_req_notification.associate = function(models) {
    // associations can be defined here
    tbl_time_extension_req_notification.belongsTo(models.tbl_time_extension_request, {
      foreignKey: 'request_id',
      });

  };
  return tbl_time_extension_req_notification;
};