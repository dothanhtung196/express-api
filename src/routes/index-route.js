var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/test/userid/1", function (req, res, next) {
    res.json(req.url);
});

module.exports = router;
