// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

   // GET route for getting all of the burgers
   app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function(dbBurger) {
      // console.log(dbBurger);

      // We have access to the Burgers as an argument inside of the callback function
      res.render("index", {burgers: dbBurger})
    });

  });


  // POST route for saving a new Burger
  app.post("/api/burgers", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a name and
    // devoured property
    db.Burger.create(
      {
        name: req.body.name,
        devoured: req.body.devoured,
        customer_name: req.body.customer_name
      }
      ).then(function(dbBurger) {
      // We have access to the new Burger as an argument inside of the callback function
      res.json(dbBurger);
    });

  });

  // DELETE route for deleting Burgers. We can get the id of the Burger to be deleted
  // from req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the burgers we want to destroy
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });

  });

  // PUT route for updating Burgers. We can get the updated Burger data from req.body
  app.put("/api/burgers/:id", function(req, res) {
    console.log("BACKEND " +req.body);

    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the burgers we want to update
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(function(dbBurger) {
        res.json(dbBurger);
      });

  });
};
