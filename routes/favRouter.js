const favRouter = require('express').Router();
const FavoritesList = require('../views/components/FavoritesList');
const {Favorite} = require('../db/models');

favRouter.get('/', async (req, res) => {
  const favArr = await Favorite.findAll({raw: true});
  res.renderComponent(FavoritesList, { favArr });
})

favRouter.post('/',async (req, res) =>{
  try {
    const { title, color, src } = req.body;

    const newSock = await Favorite.create({
      title,
      color,
      src,
      userId: req.session.findUser.id,
    });
  } catch (error) {
    res.json({
      message: "Не получилось создать носок",
    });
  }
} )
module.exports = favRouter;