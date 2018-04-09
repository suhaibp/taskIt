const express = require("express");
const app = express();
const port = 3000;

const http = require("http");
const socketIo = require("socket.io");

const server = http.Server(app);
const io = socketIo(server);

const path = require("path");
const company = require("./routes/company")(io);
const user = require("./routes/user")(io);
const admin = require("./routes/admin")(io);
// const company = require("./routes/company")(io);

const bodyParser = require("body-parser");
const passport = require('passport');
var session = require('express-session');
const cors = require('cors');
const config = require("./config/config");


app.use(cors());
app.use(bodyParser.json());
app.use('/admin', admin);
app.use('/user', user);
//app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { secure: true } }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(express.static(path.join(__dirname, "public")));
app.use('/company', company);
// console.log("server");
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', passport.authenticate('facebook'),
    function (req, res) {

        return res.redirect("/compay-aditninfo/" + req.user.id);
    });
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google'),

    function (req, res) {
        // console.log(req);
        return res.redirect("/compay-aditninfo/" + req.user.id);
    });



app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', (req, res) => {
    res.send("Invalid end point");
});


server.listen(port, () => {
    console.log("Server Started On Port " + port);

});