const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const { storeReturnTo } = require("../middleware");
const users = require("../controllers/users");

//route to get registration form
router.get("/register", users.renderRegisterForm);

//route to register
router.post("/register", catchAsync(users.createUser));

//route to get login form
router.get("/login", users.renderLoginForm);

//post route to logout
router.post(
  "/login",
  storeReturnTo,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  users.redirectLogin
);

//redirect route for logout
router.get("/logout", users.redirectLogout);

module.exports = router;
