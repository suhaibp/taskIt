'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_task_status_assocs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.TEXT
      },
      date_time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_tasks',
          key: 'id',
          as: 'task_id',
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_task_statuses',
          key: 'id',
          as: 'status_id',
        },
      },
      progress_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_progress_percentages',
          key: 'id',
          as: 'progress_id',
        },
      },
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_tasks',
          key: 'id',
          as: 'task_id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_task_status_assocs');
  }
};