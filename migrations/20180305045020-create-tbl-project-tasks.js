'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_project_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      task_name: {
        type: Sequelize.STRING
      },
      planned_hour: {
        type: Sequelize.DOUBLE
      },
      buffer_hour: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.TEXT
      },
      priority: {
        type: Sequelize.STRING
      },
      task_type: {
        type: Sequelize.STRING
      },
      planned_start_date_time: {
        type: Sequelize.DATE
      },
      planned_end_date_time: {
        type: Sequelize.DATE
      },
      attachment: {
        type: Sequelize.STRING
      },
      actual_hour: {
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
      // progress_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'tbl_progress_percentages',
      //     key: 'id',
      //     as: 'progress_id',
      //   },
      // },
      project_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_teams',
          key: 'id',
          as: 'project_team_id',
        },
      },
      
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_project_tasks');
  }
};