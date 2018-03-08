'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'tbl_logins', 
      'cmp_id', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "tbl_companies",
          key: "id" 
        }
      }
    )
    return queryInterface.addColumn(
      'tbl_companies',
      'verification_code',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
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
