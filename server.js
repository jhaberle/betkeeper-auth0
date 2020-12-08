const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and views
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/betslips", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

  })
  .catch((error) => {
    console.log("Error connecting to Mongoose ->", error);
  });

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error staying connected to Mongoose -> ", err);
});

// Start the API server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
