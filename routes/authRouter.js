const authRouter = require("express").Router();
const { user } = require("../db/models");
const bcrypt = require("bcryptjs");

authRouter.post("/login", async (req, res) => {
  // let findUser;
  try {
    const findUser = await user.findOne({
      raw: true,
      where: {
        email: req.body.email,
      },
    });
    if (findUser) {
      const isSame = await bcrypt.compare(req.body.pass, findUser.password);

      if (isSame) {
        req.session.findUser = {
          email: findUser.email,
          name: findUser.name,
        };

        res.json({
          message: "Сессия запущена бро",
        });
      } else {
        res.json({
          message: "Пошел в жопу",
        });
      }
    }
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});

authRouter.get("/", (req, res) => {
  req.session.destroy();
  res.clearCookie();
  res.redirect("/");
});

module.exports = authRouter;
