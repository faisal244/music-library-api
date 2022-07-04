const { Router } = require("express");

router.post("/", addSongToPlaylist);
router.delete("/:songId", deleteSongFromPlaylist);
const router = Router();

module.exports = router;
