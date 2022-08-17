const CartList = require('../views/components/CartList');

const cartRouter = require('express').Router();

cartRouter.get('/items', (req, res) => {
  res.renderComponent(CartList);
})

module.exports = cartRouter;