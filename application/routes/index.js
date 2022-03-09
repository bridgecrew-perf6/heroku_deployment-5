const express = require("express");
const router = express.Router();
const db = require("../db/index");

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "CSC 667 Express" });
});

router.get("/dbtest", async (request, response, next) => {
    const baseSQL = `SELECT * FROM USERS;`;

    let rows = await db.any(baseSQL);
    if (!rows) {
        // throw error here. need error class to generate logs.
    }
    // add further logic here.
    // console.log(rows);
    response.json(rows);
});

module.exports = router;
