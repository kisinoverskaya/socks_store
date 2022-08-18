const deleteRouter = require("express").Router();

const { Basket } = require("../db/models");

deleteRouter.delete("/:id", async (req, res) => {
  try {
    const res = await Basket.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  } catch (error) {
    res.json({
      message: "Не вышло дружок",
    });
  }
});

module.exports = deleteRouter;
