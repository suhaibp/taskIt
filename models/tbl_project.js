'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_project = sequelize.define('tbl_project', {
    project_name: DataTypes.STRING
  }, {});
  tbl_project.associate = function (models) {
    // associations can be defined here

    tbl_project.belongsTo(models.tbl_project_category, {
      foreignKey: 'category_id',
    });
    tbl_project.belongsTo(models.tbl_user_profile, {
      foreignKey: 'pm_id',
      as: 'Pmid'
    });
    tbl_project.belongsTo(models.tbl_user_profile, {
      foreignKey: 'assignee_id',
      as: 'Assigneeid'
    });
    tbl_project.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
      as: 'Cmp_id'
    });
    tbl_project.hasMany(models.tbl_project_notification, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_project_modules, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_project_team, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_project_estimation_team, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_lock_period, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_estimation, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_estimation_notification, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_project_member_assoc, {
      foreignKey: 'project_id',
    });
    tbl_project.hasMany(models.tbl_project_approval_notification, {
      foreignKey: 'project_id',
    });
  };
  return tbl_project;
};