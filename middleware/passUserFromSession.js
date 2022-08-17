const passUserFromSession = (req, res, next) => {
  if (req.session && req.session.findUser) {
    res.locals.findUser = req.session.findUser;
  }
  next();
};

module.exports = passUserFromSession;
