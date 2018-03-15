'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_cmp_break = sequelize.define('tbl_cmp_break', {
    title: DataTypes.STRING
  }, {});
  tbl_cmp_break.associate = function(models) {
    // associations can be defined here
    tbl_cmp_break.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
      });
      tbl_cmp_break.hasMany(models.tbl_cmp_break_assoc, {
        foreignKey: 'break_id',
      });


  };
  return tbl_cmp_break;
};