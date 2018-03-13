const express = require("express");
const app = express();
const port = 3000;

const http = require("http");
const socketIo = require("socket.io");

const server = http.Server(app);
const io = socketIo(server);

const path = require("path");
const company = require("./routes/company")(io);
//const users = require("./routes/user");
const admin = require("./routes/admin")(io);
// const company = require("./routes/company")(io);

const bodyParser = require("body-parser");
const passport = require('passport');
var session = require('express-session');
const cors = require('cors');
const config = require("./config/config");


app.use(cors());
app.use(bodyParser.json());
app.use('/admin',admin);
app.use('/company',company);
//app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { secure: true } }));
app.use(passport.initialize());
app.use(passport.session());

// require('./config/passport')(passport);

app.use(express.static(path.join(__dirname,"public")));
// app.use('/company',company);
app.use('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/', (req,res)=>{
    res.send("Invalid end point");
});


server.listen(port,() => {
    console.log("Server Started On Port " + port);

});