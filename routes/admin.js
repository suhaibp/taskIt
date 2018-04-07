var models = require('../models');
var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
const Op = Sequelize.Op
var Login = models.tbl_login;
var Role = models.tbl_role;
var Company = models.tbl_company;
var User = models.tbl_user_profile;
var returnRouter = function (io) {
    // ---------------------------------Start-------------------------------------------
    // Function      : Allcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all companies
router.get('/allcompanies', function(req, res) {
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
Company.findAll({
  order: [['id', 'DESC']],
  include: [{
    
    model: Login,
    required: true
    //where: {id: Sequelize.col('login.role_id')}
  
   }]
}).then(company => {
  //console.log(projects);
  res.json(company);
});
  });
  // ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
    // Function      : Allactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all activecompanies
router.get('/allactivecompanies', function(req, res) {
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
 
            Company.findAll({
              order: [['id', 'DESC']],
              include: [{
                
                model: Login,
                required: true,
                where: {[Op.and]:[{block_status:false,delete_status:false}]}
           
              
              }]
            }).then(company => {
              return res.json(company);
                
            });
 
  });
  // ----------------------------------End-------------------------------------------
        // ---------------------------------Start-------------------------------------------
    // Function      : Alldeletedcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all deletedcompanies
router.get('/alldeletedcompanies', function(req, res) {
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
                Company.findAll({
                  order: [['id', 'DESC']],
                  include: [{
                    
                    model: Login,
                    required: true,
                    where: {delete_status:true}
                  
                  }]
                }).then(company => {
                  return res.json(company);
                    
                });
 
  });
  // ----------------------------------End-------------------------------------------
        // ---------------------------------Start-------------------------------------------
    // Function      : Allblockedcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all blockedcompanies
router.get('/allblockedcompanies', function(req, res) {
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
                      Company.findAll({
                        order: [['id', 'DESC']],
                        include: [{
                          
                          model: Login,
                          required: true,
                          where: {[Op.and]:[{delete_status:false,block_status:true}]}
                    
                        
                        }]
                      }).then(company => {
                        return res.json(company);
                          
                      });
  });
  // ----------------------------------End-------------------------------------------
      // ---------------------------------Start-------------------------------------------
    // Function      : Allsubcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all subcompanies
    router.get('/allsubcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
                          Company.findAll({
                            order: [['id', 'DESC']],
                            include: [{
                              
                              model: Login,
                              required: true,
                              where: {cmp_status:'Subscribed'}
                            
                            }]
                          }).then(company => {
                            return res.json(company);
                              
                          });
     
      });
    
      // ----------------------------------End-------------------------------------------
            // ---------------------------------Start-------------------------------------------
    // Function      : All active subcompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : all  active subcompanies
    router.get('/allsubactivecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
  
                          Company.findAll({
                            order: [['id', 'DESC']],
                            include: [{
                              
                              model: Login,
                              required: true,
                              where: {[Op.and]:[{cmp_status:'Subscribed',delete_status:false,block_status:false}]}
                      
                            
                            }]
                          }).then(company => {
                            return res.json(company);
                              
                          });
     
      });
    
      // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
    // Function      : All subscribed companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allsubblockcompanies
    router.get('/allsubblockcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
                    Company.findAll({
                      order: [['id', 'DESC']],
                      include: [{
                        
                        model: Login,
                        required: true,
                        where: {[Op.and]:[{cmp_status:'Subscribed',delete_status:false,block_status:true}]}
                      
                      }]
                    }).then(company => {
                      return res.json(company);
                        
                    });
     
      });
    
 // ----------------------------------End-------------------------------------------      
  // ---------------------------------Start-------------------------------------------
    // Function      : All subscribed  delete companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allsubdeletecompanies
    router.get('/allsubdeletecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
                          Company.findAll({
                            order: [['id', 'DESC']],
                            include: [{
                              
                              model: Login,
                              required: true,
                              where: {[Op.and]:[{cmp_status:'Subscribed',delete_status:true}]}
                            
                            }]
                          }).then(company => {
                            return res.json(company);
                              
                          });
     
      });
    
   // ----------------------------------End-------------------------------------------   
   // ---------------------------------Start-------------------------------------------
    // Function      : All trail companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all trailcompanies
    router.get('/alltrialcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
             
                          Company.findAll({
                            order: [['id', 'DESC']],
                            include: [{
                              
                              model: Login,
                              required: true,
                              where: {cmp_status:'Trail'}
                            
                            }]
                          }).then(company => {
                            return res.json(company);
                              
                          });
     
      });
    
      // ----------------------------------End-------------------------------------------
     // ---------------------------------Start-------------------------------------------
    // Function      : All trail active companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : alltrialactivecompanies
    router.get('/alltrialactivecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
                Company.findAll({
                  order: [['id', 'DESC']],
                  include: [{
                    
                    model: Login,
                    required: true,
                    where: {[Op.and]:[{cmp_status:'Trail',delete_status:false,block_status:false}]}
                  
                  }]
                }).then(company => {
                  return res.json(company);
                    
                });
     
      });
    
      // ----------------------------------End-------------------------------------------    
     // ---------------------------------Start-------------------------------------------
    // Function      : All trail block companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : alltrialblockcompanies
    router.get('/alltrialblockcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
   
                            Company.findAll({
                              order: [['id', 'DESC']],
                              include: [{
                                
                                model: Login,
                                required: true,
                                where: {[Op.and]:[{cmp_status:'Trail',delete_status:false,block_status:true}]}
                              
                              }]
                            }).then(company => {
                              return res.json(company);
                                
                            });
     
      });
    
      // ----------------------------------End-------------------------------------------      
      
       // ---------------------------------Start-------------------------------------------
    // Function      : All trail delete companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : alltrialdeletecompanies
    router.get('/alltrialdeletecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
 
                      Company.findAll({
                        order: [['id', 'DESC']],
                        include: [{
                          
                          model: Login,
                          required: true,
                          where: {[Op.and]:[{cmp_status:'Trail',delete_status:true}]}
                        
                        }]
                      }).then(company => {
                        return res.json(company);
                          
                      });
     
      });
    
      // ----------------------------------End-------------------------------------------     
 // ---------------------------------Start-------------------------------------------
    // Function      : Allexpired companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all expired companies
    router.get('/allexpiredcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
                        Company.findAll({
                          order: [['id', 'DESC']],
                          include: [{
                            
                            model: Login,
                            required: true,
                            where: {cmp_status:'Expired'}
                          
                          }]
                        }).then(company => {
                          return res.json(company);
                            
                        });
     
      });
    
      // ----------------------------------End-------------------------------------------
           // ---------------------------------Start-------------------------------------------
    // Function      : All expired active companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allexpiredactivecompanies
    router.get('/allexpiredactivecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
 
                  Company.findAll({
                    order: [['id', 'DESC']],
                    include: [{
                      
                      model: Login,
                      required: true,
                      where: {[Op.and]:[{cmp_status:'Expired',delete_status:false,block_status:false}]}
                    
                    }]
                  }).then(company => {
                    return res.json(company);
                      
                  });
  
      });
    
      // ----------------------------------End-------------------------------------------    
     // ---------------------------------Start-------------------------------------------
    // Function      : All expired block companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allexpiredblockcompanies
    router.get('/allexpiredblockcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
  
                Company.findAll({
                  order: [['id', 'DESC']],
                  include: [{
                    
                    model: Login,
                    required: true,
                    where: {[Op.and]:[{cmp_status:'Expired',delete_status:false,block_status:true}]}
                  
                  }]
                }).then(company => {
                  return res.json(company);
                    
                });
     
      });
    
      // ----------------------------------End-------------------------------------------      
      
       // ---------------------------------Start-------------------------------------------
    // Function      : All expired delete companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allexpireddeletecompanies
    router.get('/allexpireddeletecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
                Company.findAll({
                  order: [['id', 'DESC']],
                  include: [{
                    
                    model: Login,
                    required: true,
                    where: {[Op.and]:[{cmp_status:'Expired',delete_status:true}]}
                  
                  }]
                }).then(company => {
                  return res.json(company);
                    
                });
                
      });
    
      // ----------------------------------End-------------------------------------------   
            // ---------------------------------Start-------------------------------------------
    // Function      : All not verified companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-03-2018
    // Last Modified : 
    // Desc          : all not verified companies
    router.get('/allnotverficompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
                Company.findAll({
                  order: [['id', 'DESC']],
                  include: [{
                    
                    model: Login,
                    required: true,
                    where: {cmp_status:'Not Verified'}
                  
                  }]
                }).then(company => {
                  return res.json(company);
                    
                });
    
      });
    
  // ----------------------------------End-------------------------------------------
             // ---------------------------------Start-------------------------------------------
    // Function      : All Not Verified active companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allnotverfiactivecompanies
    router.get('/allnotverfiactivecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
                    Company.findAll({
                      order: [['id', 'DESC']],
                      include: [{
                        
                        model: Login,
                        required: true,
                        where: {[Op.and]:[{cmp_status:'Not Verified',delete_status:false,block_status:false}]}
 
                      }]
                    }).then(company => {
                      return res.json(company);
                        
                    });
     
      });
    
      // ----------------------------------End-------------------------------------------    
     // ---------------------------------Start-------------------------------------------
    // Function      : All Not Verified block companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allnotverfiblockcompanies
    router.get('/allnotverfiblockcompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
      Company.findAll({
        order: [['id', 'DESC']],
        include: [{
          
          model: Login,
          required: true,
          where: {[Op.and]:[{cmp_status:'Not Verified',delete_status:false,block_status:true}]}
        
        }]
      }).then(company => {
        return res.json(company);
          
      });
     
      });
    
      // ----------------------------------End-------------------------------------------      
      
       // ---------------------------------Start-------------------------------------------
    // Function      : All Not Verified  delete companies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : allnotverfideletecompanies
    router.get('/allnotverfideletecompanies', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
      
                         Company.findAll({
                          order: [['id', 'DESC']],
                          include: [{
                            
                            model: Login,
                            required: true,
                            where: {[Op.and]:[{cmp_status:'Not Verified',delete_status:true}]}
                          
                          }]
                        }).then(company => {
                          return res.json(company);
                            
                        });
      });
    
      // ----------------------------------End-------------------------------------------   
 // ---------------------------------Start-------------------------------------------
    // Function      : block company
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : block company
router.put('/blockcompany/:id', function(req, res) {
  console.log(req.params.id);
  
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
 
        Login.update({
          block_status: true
      }, {
              where: {
                  id: req.params.id
              }
          }).then(company => {
        if (!company) {
          return res.json({ success: false, msg: 'Faild to block company' });
      } else {
          io.sockets.emit("blockcompany", {
              //user_id : req.params.id
          });
        
          return res.json({ success: true, msg: 'Blocked Successfully' });
      }
});
 
  });
  // ----------------------------------End-------------------------------------------
  // ---------------------------------Start-------------------------------------------
    // Function      : unblock company
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : unblock company
router.put('/unblockcompany/:id', function(req, res) {
  console.log(req.params.id);
  
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
        Login.update({
          block_status: false
      }, {
              where: {
                  id: req.params.id
              }
          }).then(company => {
        if (!company) {
          return res.json({ success: false, msg: 'Faild to unblock company' });
      } else {
          io.sockets.emit("blockcompany", {
              //user_id : req.params.id
          });
          return res.json({ success: true, msg: 'UnBlocked Successfully' });
      }
});
 
  });
  // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : delete company
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : delete company
router.put('/deletecompany/:id', function(req, res) {
  console.log(req.params.id);
  
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
 
         Login.update({
          delete_status: true
      }, {
              where: {
                  id: req.params.id
              }
          }).then(company => {
         if (!company) {
          return res.json({ success: false, msg: 'Faild to delete company' });
      } else {
          io.sockets.emit("deletecompany", {
              //user_id : req.params.id
          });
          return res.json({ success: true, msg: 'Deleted successfully' });
      }
});
 
  });
  // ----------------------------------End-----------------------------------------------
     // ---------------------------------Start-------------------------------------------
    // Function      : adminnotification
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : adminnotification
    router.get('/adminnotification', function(req, res) {
      if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
      } else {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
      }
   
         Company.findAll({
         
            order: [['id', 'DESC']],
            where: {is_admin_viewed: false},
            include: [{
               
                model: Login,
           
                required: true,
                where: {is_verified:true},
               }]
           
        }).then(company => {
          return res.json(company);
        })
      });
    
 // ----------------------------------End-------------------------------------------  
// ---------------------------------Start-------------------------------------------
    // Function      : viewstatusadmin
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 06-03-2018
    // Last Modified : 
    // Desc          : viewstatusadmin
router.put('/viewstatusadmin/:id', function(req, res) {
  console.log("a"+req.params.id);
  
  if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
  }
  
        Company.update({
          is_admin_viewed: true
      }, {
              where: {
                  id: req.params.id
              }
          }).then(company => {
        if (!company) {
          return res.json({ success: false, msg: 'Faild to viewstatus company' });
        } else {
          io.sockets.emit("viewstatusadmin", {
              //user_id : req.params.id
          });
          return res.json({ success: true, msg: 'viewstatus Successfully' });
        }
     });
 
  });
  // ----------------------------------End-------------------------------------------
 
  module.exports = router;
  return router;
  }
  module.exports = returnRouter;