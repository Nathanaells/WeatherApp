const express = require("express");
const router = express.Router();
const { Weather, UserWeather } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const globalData = await Weather.findAll();
    const userData = await UserWeather.findAll();
    res.status(200).json({ global: globalData, user: userData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
