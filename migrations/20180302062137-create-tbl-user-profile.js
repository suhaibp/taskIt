'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_user_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      f_name: {
        type: Sequelize.STRING
      },
      l_name: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.STRING
      },
      join_date: {
        type: Sequelize.DATE
      },
      gender: {
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
      login_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_logins',
          key: 'id',
          as: 'login_id',
        },
      },
      designation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_designations',
          key: 'id',
          as: 'designation_id',
        },
      },
      prev_exp_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tbl_prev_exps',
          key: 'id',
          as: 'prev_exp_id',
        },
      },
<<<<<<< HEAD
     
=======
>>>>>>> 7f5750c38bdba7bca7f7f663d1ad1b40ed2b6e8c
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_user_profiles');
  }
};