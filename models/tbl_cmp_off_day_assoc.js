'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_cmp_off_day_assoc = sequelize.define('tbl_cmp_off_day_assoc', {
    day_no: DataTypes.INTEGER,
    week_no: DataTypes.INTEGER
  }, {});
  tbl_cmp_off_day_assoc.associate = function (models) {
    // associations can be defined here
    tbl_cmp_off_day_assoc.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
    });

  };
  return tbl_cmp_off_day_assoc;
};