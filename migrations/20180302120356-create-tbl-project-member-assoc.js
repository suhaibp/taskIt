'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_project_member_assocs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      user_profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'user_profile_id',
        },
      },
      project_team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_teams',
          key: 'id',
          as: 'project_team_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_project_member_assocs');
  }
};