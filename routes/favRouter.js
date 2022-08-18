const favRouter = require('express').Router();
const FavoritesList = require('../views/components/FavoritesList');
const {Favorite} = require('../db/models');

favRouter.get('/', async (req, res) => {
  const favArr = await Favorite.findAll({raw: true});
  res.renderComponent(FavoritesList, { favArr });
})

module.exports = favRouter;