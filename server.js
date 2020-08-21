
// Dependencies
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


// Setting up Express App
const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// setting up mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
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