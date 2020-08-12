
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
let mongoDB_uri =  "mongodb://user1:password1@ds125912.mlab.com:25912/heroku_r9bff03r";
// mongoose.connect(mongoDB_uri, {
//     useNewUrlParser: true,
//     useFindAndModify: false
// })
mongoose.connect(mongoDB_uri);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//  Starts the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });