const CartList = require("../views/components/CartList");
const { Basket } = require("../db/models");
const { user } = require("../db/models");
const cartRouter = require("express").Router();

cartRouter.get("/items", async (req, res) => {
  try {
    const sockList = await Basket.findAll({
      raw: true,
      where: {
        userId: req.session.findUser.id,
      },
    });

    res.renderComponent(CartList, { sockList });
  } catch (error) {
    res.json({
      message: "карточ не найдено",
    });
  }
});

module.exports = cartRouter;
