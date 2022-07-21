const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Djabrail:4815162342@cluster0.wkvhjdw.mongodb.net/newsBD",
  () => {
    app.listen("3000", () => {
      console.log("worked");
    });
  }
);
