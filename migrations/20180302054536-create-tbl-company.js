'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cmp_name: {
        type: Sequelize.STRING
      },
      cmp_code: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.STRING
      },
      why_choosen: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      login_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_logins',
          key: 'id',
          as: 'login_id',
        },
      },
      cmp_size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_company_sizes',
          key: 'id',
          as: 'cmp_size_id',
        },
      },
      industry_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_industries',
          key: 'id',
          as: 'industry_id',
        },
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_plans',
          key: 'id',
          as: 'plan_id',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_companies');
  }
};