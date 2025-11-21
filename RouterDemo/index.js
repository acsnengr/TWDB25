const express = require("express");
const app = express();
const shelterroutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

// app.use((req, res, next) => {
//   if (req.query.isAdmin === "true") {
//     next();
//   }
//   res.status(403).send("Forbidden: Admins only");
// });

app.use("/dogs", dogRoutes);
app.use("/shelters", shelterroutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
