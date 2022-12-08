var express = require("express");
var router = express.Router();
const uploadHelper = require("../helpers/upload-helper");

/* GET home page. */
router.get("/", async function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/test/userid/1", function (req, res, next) {
    res.json(req.url);
});

router.post("/upload", uploadHelper.uploadMultipleToMemory("images", 10), function (req, res, next) {
    res.json(req.body);
});

module.exports = router;
