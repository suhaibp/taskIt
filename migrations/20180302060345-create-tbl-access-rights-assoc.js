'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_access_rights_assocs', {
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
      access_rights_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_access_rights',
          key: 'id',
          as: 'access_rights_id',
        },
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_roles',
          key: 'id',
          as: 'role_id',
        },
      },
      cmp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_companies',
          key: 'id',
          as: 'cmp_id',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_access_rights_assocs');
  }
};