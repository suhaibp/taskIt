'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_estimation_notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_completed: {
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
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_projects',
          key: 'id',
          as: 'project_id',
        },
      },
      estimation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_estimations',
          key: 'id',
          as: 'estimation_id',
        },
      },
      from_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'from_id',
        },
      },
      to_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'to_id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_estimation_notifications');
  }
};