'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      google_id: {
        type: Sequelize.INTEGER
      },
      google_token: {
        type: Sequelize.STRING
      },
      fb_id: {
        type: Sequelize.INTEGER
      },
      fb_token: {
        type: Sequelize.STRING
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      block_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      delete_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      profile_image: {
        type: Sequelize.STRING
      },
      cmp_status: {
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
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_roles',
          key: 'id',
          as: 'role_id',
        },
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_logins');
  }
<<<<<<< HEAD
};
=======
  
};
>>>>>>> 7f5750c38bdba7bca7f7f663d1ad1b40ed2b6e8c
