const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");

//GET: index route && POST: create campground
router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createNewCamp));

//new campground form
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

//GET: show campground && PUT: update campground && DELETE: delete campground
router
  .route("/:id")
  .get(catchAsync(campgrounds.renderCampground))
  .put(
    isLoggedIn,
    isAuthor,
    validateCampground,
    catchAsync(campgrounds.editCamp)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.destroyCamp));

//edit campground form
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

//export router
module.exports = router;
