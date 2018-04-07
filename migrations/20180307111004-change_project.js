'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'tbl_projects',
      'project_type',
      {
        type: Sequelize.STRING,
        allowNull: true

      }).then(function () {
        return queryInterface.addColumn('tbl_projects',
          'project_code',
          {
            type: Sequelize.STRING,
            allowNull: true

          }).then(function () {
            return queryInterface.addColumn('tbl_projects',
              'status',
              {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: 'Drafted'
              }).then(function () {
                return queryInterface.addColumn('tbl_projects',
                  'priority',
                  {
                    type: Sequelize.STRING,
                    allowNull: true

                  }).then(function () {
                    return queryInterface.addColumn('tbl_projects', 
                      'description',
                      {
                        type: Sequelize.STRING,
                        allowNull: true

                      }).then(function () {
                        return queryInterface.addColumn('tbl_projects',
                          'requirement_summary',
                          {
                            type: Sequelize.STRING,
                            allowNull: true

                          }).then(function () {
                            return queryInterface.addColumn('tbl_projects',
                              'requirement_attatchment',
                              {
                                type: Sequelize.STRING,
                                allowNull: true

                              }).then(function () {
                                return queryInterface.addColumn('tbl_projects',
                                  'is_estimation_completed',
                                  {
                                    type: Sequelize.BOOLEAN,
                                    allowNull: true,
                                    defaultValue: false
                                  }).then(function () {
                                    return queryInterface.addColumn('tbl_projects',
                                      'is_pm_viewed',
                                      {
                                        type: Sequelize.BOOLEAN,
                                        allowNull: true,
                                        defaultValue: false
                                      }).then(function () {
                                        return queryInterface.addColumn('tbl_projects',
                                          'is_admin_viewed',
                                          {
                                            type: Sequelize.BOOLEAN,
                                            allowNull: true,
                                            defaultValue: false
                                          }).then(function () {
                                            return queryInterface.addColumn('tbl_projects',
                                              'is_approved',
                                              {
                                                type: Sequelize.BOOLEAN,
                                                allowNull: true,
                                                defaultValue: false
                                              }).then(function () {
                                                return queryInterface.addColumn('tbl_projects',
                                                  'planned_start_date',
                                                  {
                                                    type: Sequelize.DATE,
                                                    allowNull: true
                                                  }).then(function () {
                                                    return queryInterface.addColumn('tbl_projects',
                                                      'planned_end_date',
                                                      {
                                                        type: Sequelize.DATE,
                                                        allowNull: true

                                                      }).then(function () {
                                                        return queryInterface.addColumn('tbl_projects',
                                                          'is_estimation_resubmitted',
                                                          {
                                                            type: Sequelize.BOOLEAN,
                                                            allowNull: true,
                                                            defaultValue: false
                                                          }).then(function () {
                                                            return queryInterface.addColumn('tbl_projects',
                                                              'project_cost',
                                                              {
                                                                type: Sequelize.FLOAT,
                                                                allowNull: true

                                                              }).then(function () {
                                                                return queryInterface.addColumn('tbl_projects',
                                                                  'total_estimated_hour',
                                                                  {
                                                                    type: Sequelize.FLOAT,
                                                                    allowNull: true

                                                                  }
                                                              )
                                                              })
                                                          })
                                                      })
                                                  })
                                              })
                                          })
                                      })
                                  })
                              })
                          })
                      })
                  })
              })
          })
      })
    },




      down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.dropTable('users');
        */
      }
  };
