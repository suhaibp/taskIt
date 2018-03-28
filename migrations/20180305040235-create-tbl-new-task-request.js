'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_new_task_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      planned_hours: {
        type: Sequelize.DOUBLE
      },
      buffer_hours: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.TEXT
      },
      priority: {
        type: Sequelize.STRING
      },
      planned_start_date: {
        type: Sequelize.DATE
      },
      planned_end_date: {
        type: Sequelize.DATE
      },
      attachment: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.TEXT
      },
      request_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      project_module_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_modules',
          key: 'id',
          as: 'project_module_id',
        },
      },
      assigned_to_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'assigned_to_id',
        },
      },
      complexity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_complexity_percentages',
          key: 'id',
          as: 'complexity_id',
        },
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_teams',
          key: 'id',
          as: 'team_id',
        },
      }

    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_new_task_requests');
  }
};