'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      
        return queryInterface.addColumn('tbl_projects',
          'actual_end_date',
          {
            type: Sequelize.DATE,
            allowNull: true
  
          }
      );
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
