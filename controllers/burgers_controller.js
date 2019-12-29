var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

    router.post("/api/burgers", function(req, res) {
        burger.create([
          "name"
        ], [
          req.body.name
        ], function(result) {
          // Send back the ID of the new quote
          res.json({ id: result.insertId });
        });
      });

      router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        console.log("condition", condition);
      
        console.log("req.body.hasEaten " + req.body.hasEaten)
        burger.update({
          hasEaten: req.body.hasEaten
        }, condition, function(result) {
          console.log("burgers_controller " + result.changedRows);
          if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });

      router.delete("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
      
        burger.delete(condition, function(result) {
          if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
      });
      
      // Export routes for server.js to use.
      module.exports = router;