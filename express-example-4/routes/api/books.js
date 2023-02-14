const express = require("express");
const books = require("../../data/books")

const router = express.Router();

router.get("/", (req, res) => {
    res.json(books);
});

router.post("/post", (req, res) => {
    res.json(books);
});

router.put("/");

module.exports = router;