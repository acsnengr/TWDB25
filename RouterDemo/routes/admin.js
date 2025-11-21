const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin === "true") {
    next();
  }
  res.status(403).send("Forbidden: Admins only");
});

router.get("/topsecret", (req, res) => {
  res.send("Welcome to the admin top secret area!");
});

router.get("/deleteAll", (req, res) => {
  res.send("All data has been deleted!");
});

module.exports = router;
