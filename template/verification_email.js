const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mean.symptots@gmail.com", // generated ethereal user
        pass: "Symptots@2017"  // generated ethereal password
    }
});
module.exports.sendUsercredentialMail = function(email, f_name, password){
    nodemailer.createTestAccount((err, account) => {
        
            // create reusable transporter object using the default SMTP transport
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: 'mean.symptots@gmail.com', // sender address
                to: email, // list of receivers
                subject: 'Please log in to your account', // Subject line
                text: '', 
                html: '<b><h3>Hi '+f_name+', </h3><br/>Welcome to Taskit. Click on the following link to start using your account. We also recommend that you save this information as you may need it to login.<a href="http://localhost:3000/company-login/">Click Login</a><br/><br/>Username:'+email+' <br/>Password:'+password+' <br/> Thank You!</b>' // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            });
    });
}
