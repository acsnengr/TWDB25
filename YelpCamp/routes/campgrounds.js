const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");

//index route
router.get("/", catchAsync(campgrounds.index));

//new campground form
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//create campground
router.post(
  "/",
  isLoggedIn,
  validateCampground,
  catchAsync(campgrounds.createNewCamp)
);

//show campground
router.get("/:id", catchAsync(campgrounds.renderCampground));

//edit campground form
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

//update campground
router.put(
  "/:id",
  isLoggedIn,
  isAuthor,
  validateCampground,
  catchAsync(campgrounds.editCamp)
);

//delete campground
router.delete(
  "/:id",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.destroyCamp)
);

//export router
module.exports = router;
