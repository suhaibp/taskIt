'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_project_notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_viewed: {
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
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_notif_types',
          key: 'id',
          as: 'type_id',
        },
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_projects',
          key: 'id',
          as: 'project_id',
        },
      },
      user_profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'user_profile_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_project_notifications');
  }
};