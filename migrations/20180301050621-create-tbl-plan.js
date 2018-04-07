'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plan_name: {
        type: Sequelize.STRING
      },
      plan_price: {
        type: Sequelize.INTEGER
      },
      is_best_value: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_defualt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      no_projects: {
        type: Sequelize.INTEGER
      },
      no_members: {
        type: Sequelize.INTEGER
      },
      no_tasks: {
        type: Sequelize.INTEGER
      },
      no_modules: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_plans');
  }
};