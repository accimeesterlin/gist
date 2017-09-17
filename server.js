var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var path = require('path');
app.use(express.static(__dirname + '/public'));


//Models
var models = require("./app/models");

//Routes 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

app.listen(8080, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


//For Handlebars

app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: "main",
    layoutsDir: "public/views/layouts"
}));

require('./controllers/gift_controller.js')(app);
// var authRoute = require('./app/routes/auth.js')(app);
// require('./controllers/usercontroller.js');



