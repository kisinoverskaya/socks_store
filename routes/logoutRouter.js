const logoutRouter = require("express").Router();

logoutRouter.get("/", (req, res) => {
  req.session.destroy();
  res.clearCookie();
  res.redirect("/");
});

module.exports = logoutRouter;
