'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tbl_emp_leaves',
      
      'end_date',
      {
        type:  Sequelize.DATE,
        allowNull: true
        
      }
    ).then(function () {
      return queryInterface.addColumn(
        'tbl_emp_leaves',
        
        'start_available_hrs',
        {
          type:  Sequelize.DOUBLE,
          allowNull: true
        },
  
      ).then(function () {

        return queryInterface.addColumn(
          'tbl_emp_leaves',
          
          'end_available_hrs',
          {
            type:  Sequelize.DOUBLE,
            allowNull: true
          },
    
        ).then(function () {
        });



      });



    });
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
