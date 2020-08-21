
// Dependencies
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// setting up mongo db
const mongoDB_uri = process.env.mongoDB_uri || "mongodb://localhost/workout";

mongoose.connect(mongoDB_uri, {
    useNewUrlParser: true,
    useFindAndModify: false
})

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//  Starts the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });