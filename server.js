
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
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   },
   () => console.log('connected to db')
   );
// setting up mongo db
// mongoose.connect(process.env.mongoDB_uri || "mongodb://localhost/workout",{
//     useNewUrlParser: true,
//     useFindAndModify: false
// });

// mongoose.connect(mongoDB_uri, {
//     useNewUrlParser: true,
//     useFindAndModify: false
// })

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//  Starts the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });