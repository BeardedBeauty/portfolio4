const router = require("express").Router();
// const route = require("./api/index.js");
const message = require("./messages.js");

// routes
// router.use("/api", route);
router.use("/message", message);

module.exports = router;