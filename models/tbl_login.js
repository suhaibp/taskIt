'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_login = sequelize.define('tbl_login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.TEXT,
    google_token: DataTypes.TEXT,
    fb_id: DataTypes.TEXT,
    fb_token: DataTypes.TEXT,
    is_verified: DataTypes.BOOLEAN,
    is_profile_completed: DataTypes.BOOLEAN,
    block_status: DataTypes.BOOLEAN,
    delete_status: DataTypes.BOOLEAN,
    profile_image: DataTypes.STRING,
    cmp_status: DataTypes.STRING
  }, {});
  tbl_login.associate = function (models) {
    // associations can be defined here
    tbl_login.belongsTo(models.tbl_role, {
      foreignKey: 'role_id',
    });
    tbl_login.hasMany(models.tbl_company, {
      foreignKey: 'login_id',
    });
    tbl_login.hasMany(models.tbl_user_profile, {
      foreignKey: 'login_id',
    });
    tbl_login.belongsTo(models.tbl_company, {
      foreignKey: 'cmp_id',
      });

  };


  return tbl_login;

  module.exports.getCompanyById = function (id, callback) {
    Company.findById(id, callback);
  }

  module.exports.comparePassword = function (candPass, hash, callback) {
    bcrypt.compare(candPass, hash, (err, isMatch) => {
      if (err) throw err;
      callback(null, isMatch);
    })
  }
};