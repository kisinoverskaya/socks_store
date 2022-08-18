const CartList = require("../views/components/CartList");
const { Basket } = require("../db/models");
const { user } = require("../db/models");
const cartRouter = require("express").Router();

cartRouter.get("/items", async (req, res) => {
  try {
    console.log(req.session.findUser.id);

    const sockList = await Basket.findAll({
      raw: true,
      where: {
        userId: req.session.findUser.id,
      },
    });
    console.log(sockList);

    res.renderComponent(CartList, { sockList });
  } catch (error) {
    res.json({
      message: "карточ не найдено",
    });
  }
});

module.exports = cartRouter;
