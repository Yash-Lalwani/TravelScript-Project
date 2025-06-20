// Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const port = 8080;
const MongoURL = "mongodb://127.0.0.1:27017/TravelScript";

// Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB connection
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MongoURL);
}

// Root Route
app.get("/", (req, res) => {
  res.send("root route is working well");
});


// Listener
app.listen(port, () => {
  console.log(`server is connected to port ${port}`);
});
