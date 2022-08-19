const favRouter = require('express').Router();
const FavoritesList = require('../views/components/FavoritesList');
const {Favorite} = require('../db/models');
const TrueList = require('../views/components/TrueList')

favRouter.get('/', async (req, res) => {
  const favArr = await Favorite.findAll({raw: true, where:{userId:req.session.findUser.id}});
  res.renderComponent(FavoritesList, { favArr });
})

favRouter.get('/update', async (req, res) => {
  const favArr = await Favorite.findAll({raw: true});
  res.renderComponent(TrueList, { favArr });
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

favRouter.delete('/:id', async (req, res) => {
  try {
    const result = await Favorite.destroy({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      text: 'Ok!',
    });
  } catch (error) {
    res.json({
      text: "Не вышло дружок",
    });
  }
})
module.exports = favRouter;