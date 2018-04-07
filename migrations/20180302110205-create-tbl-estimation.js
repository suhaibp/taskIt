'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_estimations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
      },
      is_resubmitted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_accepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      estimation_hour: {
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
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_projects',
          key: 'id',
          as: 'project_id',
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
    return queryInterface.dropTable('tbl_estimations');
  }
};