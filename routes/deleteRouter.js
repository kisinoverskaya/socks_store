const deleteRouter = require("express").Router();

const { Sock } = require("../db/models");

// deleteRouter.delete("/delete", async (req, res) => {
//   const find = await Sock.findOne();
// });

module.exports = deleteRouter;
