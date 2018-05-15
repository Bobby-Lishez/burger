//import the ORM
var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res){
            cb(res);
        });
    }
};
//Export the database functions for the controller
module.exports = burger;