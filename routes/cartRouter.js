const CartList = require("../views/components/CartList");
const { Sock } = require("../db/models");
const cartRouter = require("express").Router();

cartRouter.get("/items", async (req, res) => {
  try {
    const sockList = await Sock.findAll();
    res.renderComponent(CartList, { sockList });
  } catch (error) {
    res.json({
      message: "карточ не найдено",
    });
  }
});

module.exports = cartRouter;
