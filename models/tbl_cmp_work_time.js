'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_cmp_work_time = sequelize.define('tbl_cmp_work_time', {
    title: DataTypes.STRING
  }, {});
  tbl_cmp_work_time.associate = function(models) {
    // associations can be defined here
    tbl_cmp_work_time.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
      });
      tbl_cmp_work_time.hasMany(models.tbl_cmp_work_time_assoc, {
        foreignKey: 'cmp_work_time_id',
      });

    
  };
  return tbl_cmp_work_time;
};