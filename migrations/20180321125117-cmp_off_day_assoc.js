'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tbl_cmp_off_day_assocs', //tbl_logins
      'cmp_work_time_id', //cmp_id
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cmp_work_times", //tbl_companies
          key: "id" //id
        }
      }
    )

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
