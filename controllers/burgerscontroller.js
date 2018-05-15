//dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {burgers: data};
        res.render("index", hbsObject);
    });
});

//create a new burger
router.post("/api/burgers", function(req, res) {
    burger.create("name", req.body.name, function(result) {
        res.json({id: result.insertId });
    });
});

//devour a burger
router.put("/api/burgers/:id", function(req, res) {
var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Export routes to server.js
module.exports = router;