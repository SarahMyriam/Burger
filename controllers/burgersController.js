//import Express and burger.js
const express = require("express");
const burger = require('../models/burger');



var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    console.log('burger home page');
    res.redirect('/burgers');
});


// About page route.
router.get('/burgers', function (req, res) {
    burger.getAll(
        function (burgerData) {
            console.log("hi");
            //create the response page with the burger data
            res.render("index", {
                //for each burger, we want the parameters to have access to the burger
                burger_data: burgerData,
            });
        }
    )
});
router.post("/api/burgers", function(req,res){
    burger.insertOne()
});
router.put("/api/burgers/:id", function(req,res){

});
router.delete("/api/burgers/:id", function(req,res){

});

module.exports = router;