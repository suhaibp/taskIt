'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return [ queryInterface.addColumn(
    'tbl_cmp_breaks',
    
    'start_time',
    {
      type: Sequelize.TIME,
        allowNull: true
      
    }
  ),
  queryInterface.addColumn(
    'tbl_cmp_breaks',
    
    'end_time',
    {
      type: Sequelize.TIME,
        allowNull: true
      
    }
  ),
]
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
