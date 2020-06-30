
const router = require("express").Router();
const message = require("./../controller/mailer.js");

router.route("/").post(message.send);

module.exports = router;