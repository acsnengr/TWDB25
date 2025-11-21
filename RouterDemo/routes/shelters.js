const express = require("express");
const router = express.Router();

// router.get("/shelters", (req, res) => {
//   res.send("List of animal shelters");
// });

// router.post("/shelters", (req, res) => {
//   res.send("Creating a new shelter");
// });

// router.get("/shelters/:id", (req, res) => {
//   res.send("Viewing one shelter");
// });

// router.get("/shelters/:id/edit", (req, res) => {
//   res.send("Editing one shelter");
// });

router.get("", (req, res) => {
  res.send("List of animal shelters");
});

router.post("", (req, res) => {
  res.send("Creating a new shelter");
});

router.get("/:id", (req, res) => {
  res.send("Viewing one shelter");
});

router.get("/:id/edit", (req, res) => {
  res.send("Editing one shelter");
});

module.exports = router;
