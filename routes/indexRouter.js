const { user } = require("../db/models");
const bcrypt = require("bcryptjs");
const indexRouter = require("express").Router();
const Main = require("../views/components/Main");

indexRouter.get("/", (req, res) => {
  try {
    res.renderComponent(Main);
  } catch (error) {
    res.json({
      message: "error",
    });
  }
});

indexRouter.post("/", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const { name, email, password } = req.body;
    const findUser = await user.findOne({
      where: {
        email,
      },
    });
    console.log(findUser, "ya tutaaaaaaaaa ");
    if (!findUser) {
      const newUser = await user.create({
        name,
        email,
        password: hash,
      });
      console.log("tut user", newUser);
      req.session.findUser = { name, email, id: newUser.id };
      res.json({
        message: "Создан новый чел",
      });
    } else {
      res.json({
        message: "Уже есть такой",
      });
    }
  } catch (error) {
    res.json({
      message: "Не вышло дружок",
    });
  }
});

module.exports = indexRouter;
