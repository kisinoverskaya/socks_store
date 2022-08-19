const deleteRouter = require("express").Router();

const { Basket } = require("../db/models");

deleteRouter.delete("/:id", async (req, res) => {
  try {
    const result = await Basket.destroy({
      where: {
        id: Number(req.params.id),
      },
    });

    const finder = await Basket.findAll({
      raw: true,
      where: {
        id: req.session.findUser.id,
      },
    });
    res.json({
      finder,
    });
  } catch (error) {
    res.json({
      message: "Не вышло дружок",
    });
  }
});

module.exports = deleteRouter;
