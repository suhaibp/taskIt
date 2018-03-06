'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_time_extension_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      additional_hours: {
        type: Sequelize.DOUBLE
      },
      remarks: {
        type: Sequelize.TEXT
      },
      req_status: {
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
      task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_time_extension_requests',
          key: 'id',
          as: 'task_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_time_extension_requests');
  }
};