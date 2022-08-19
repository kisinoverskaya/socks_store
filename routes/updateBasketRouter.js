const updateBasketRouter = require("express").Router();

const { Basket } = require("../db/models");

updateBasketRouter.put("/:id", async (req, res) => {
  try {
    const updated = await Basket.update(
      {
        count: Number(req.body.count) + 1,
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

    const result = await Basket.findAll({
      raw: true,
    });

    res.json({
      message: find.count,
      allMesage: result,
    });

    console.table(find);
  } catch (error) {
    res.json({
      message: "eror bro",
    });
  }
});

module.exports = updateBasketRouter;
