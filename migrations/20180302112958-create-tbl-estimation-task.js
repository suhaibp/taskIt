'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_estimation_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      planned_hour: {
        type: Sequelize.DOUBLE
      },
      buffer_hour: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      estimation_module_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_estimation_modules',
          key: 'id',
          as: 'estimation_module_id',
        },
      },
      estimation_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_estimation_teams',
          key: 'id',
          as: 'estimation_team_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_estimation_tasks');
  }
};