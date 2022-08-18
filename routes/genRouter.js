const genRouter = require("express").Router();

const { Sock } = require("../db/models");

genRouter.post("/", async (req, res) => {
  try {
    const { title, color, src, price } = req.body;
    const newSock = await Sock.create(req.body);
    console.log(newSock);
  } catch (error) {
    res.json({
      message: "Не получилось создать носок",
    });
  }
});

module.exports = genRouter;
