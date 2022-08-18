const genRouter = require("express").Router();

const { Basket } = require("../db/models");

genRouter.post("/", async (req, res) => {
  console.log(req.session.findUser.id);
  try {
    const { title, color, src, price } = req.body;

    const newSock = await Basket.create({
      title,
      color,
      src,
      price,
      userId: req.session.findUser.id,
      favorite: false,
    });
  } catch (error) {
    res.json({
      message: "Не получилось создать носок",
    });
  }
});

module.exports = genRouter;
