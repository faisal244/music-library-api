const { Router } = require("express");
const api = require("./api");

const router = Router();

// registering the routes
router.use("/api", api);

module.exports = router;
