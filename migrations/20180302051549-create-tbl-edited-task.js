'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_edited_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      module_id: {
        type: Sequelize.INTEGER
      },
      task_name: {
        type: Sequelize.STRING
      },
      assigned_to_id: {
        type: Sequelize.INTEGER
      },
      complexity_id: {
        type: Sequelize.INTEGER
      },
      planned_hour: {
        type: Sequelize.DOUBLE
      },
      description: {
        type: Sequelize.TEXT
      },
      start_date_time: {
        type: Sequelize.DATE
      },
      end_date_time: {
        type: Sequelize.DATE
      },
      priority: {
        type: Sequelize.STRING
      },
      task_type: {
        type: Sequelize.STRING
      },
      status_id: {
        type: Sequelize.INTEGER
      },
      progress_id: {
        type: Sequelize.INTEGER
      },
      actual_start_datetime: {
        type: Sequelize.DATE
      },
      actual_end_datetime: {
        type: Sequelize.DATE
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_edited_tasks');
  }
};