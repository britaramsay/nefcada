var express = require("express"),
    bodyParser = require("body-parser"),
    exphbs = require("express-handlebars"),
    PORT = process.env.PORT || 8080,
    app = express(),
    routes = require("./controllers/controller.js");

// Serve static content for the app from the "public" folder.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
