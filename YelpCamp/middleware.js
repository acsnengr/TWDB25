module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You are not signed in");
    return res.redirect("/login");
  }
  // NOTE: Do not FORGET to put RETURN if there
  // is NO "else" after if
  // if not you will get "HEADER ERROR
  next();
};

module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};
