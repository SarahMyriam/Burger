const express = require("express");
//connected orm to the server
const orm = require('./config/orm.js');

const PORT = process.env.PORT || 8000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
  orm.selectAll(
    function (error, results){
      console.log(results);
    }
  )

  orm.insertOne({
    burger_name: "hamburger",
    devoured: false
  },
    function (error, results){
      console.log(results);
    }
  )

  orm.updateOne({
    burger_name: "bacon cheese burger",
    devoured: true 
  },
  4,
  function(error , results){
    console.log(results);
  }
  );

});


