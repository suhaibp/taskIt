'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_new_task_req_notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_team_leader_viewed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_admin_viewed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_user_viewed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      new_task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_new_task_req_notifications',
          key: 'id',
          as: 'new_task_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_new_task_req_notifications');
  }
};