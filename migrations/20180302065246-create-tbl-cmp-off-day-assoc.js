'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_cmp_off_day_assocs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      day_no: {
        type: Sequelize.INTEGER
      },
      week_no: {
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
    return queryInterface.dropTable('tbl_cmp_off_day_assocs');
  }
};