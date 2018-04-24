'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tbl_time_extension_requests', //tbl_logins
      'task_id', //cmp_id
      {
        type: Sequelize.INTEGER,
        references: {
          model: "tbl_project_tasks", //tbl_companies
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
