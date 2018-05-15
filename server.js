//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var path = require("path");
var routes = require("./controllers/burgerscontroller");

var PORT = process.env.PORT || 8080;

//initialization
var app = express();
//Serve static content for the app from the public directory
app.use(express.static(path.join(__dirname, '/public')));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//parse application/json
app.use(bodyParser.json());
//initialize handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//initialize routes
app.use(routes);

//listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})