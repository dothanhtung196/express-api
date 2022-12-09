var express = require("express");
var router = express.Router();
const ExcelJS = require('exceljs');
const uploadHelper = require("../helpers/upload-helper");

/* GET home page. */
router.get("/", async function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/test/userId/1", function (req, res, next) {
    res.json(req.url);
});

router.post("/upload", uploadHelper.uploadSingleToMemory("file"), async function (req, res, next) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(req.file.buffer);
    const worksheet = await workbook.getWorksheet(1);
    res.json(worksheet.getCell("A1").value);
});

router.post("/export", async function(req, res, next){
    const workbook = new ExcelJS.Workbook();
    const worksheet = await workbook.addWorksheet("My WorkSheet");
    worksheet.getCell("A1").value = "Do Thanh Tung";
    worksheet.getCell("B1").value = "Tp HCM";
    await workbook.xlsx.writeFile("public/exports/export.xlsx");
    res.json({result: true})
});

module.exports = router;
