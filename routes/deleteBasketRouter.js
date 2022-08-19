const deleteBasketRouter = require("express").Router();

const { Basket } = require("../db/models");

deleteBasketRouter.delete("/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const updated = await Basket.update(
      {
        count: Number(req.body.count) - 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const find = await Basket.findOne({
      raw: true,
      where: {
        id: req.params.id,
      },
    });

    console.log(find);
    res.json({
      message: find.count,
    });

    console.table(find);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

module.exports = deleteBasketRouter;
