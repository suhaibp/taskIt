'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_name: {
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

      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_project_categories',
          key: 'id',
          as: 'category_id',
        },
      },

      pm_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'pm_id',
        },
      },

      assignee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_user_profiles',
          key: 'id',
          as: 'assignee_id',
        },
      },

      cmp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_companies',
          key: 'id',
          as: 'cmp_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_projects');
  }
};