const { Router } = require("express");

playlistsSongs = require("./playlistsSongs");

const router = Router();
router.use("/:id", playlistsSongs);

module.exports = router;
