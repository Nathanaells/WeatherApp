if (process.env.NODE.ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

module.exports = app;
