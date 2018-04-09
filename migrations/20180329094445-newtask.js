'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'tbl_new_task_requests',
        
        'task_name',
        {
          type:  Sequelize.STRING,
          allowNull: true
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
