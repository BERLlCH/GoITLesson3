const express = require("express")
const books = require("./books")

const app = express();

app.get("/", (req, res) => {
    // res.send(books);
    // res.json(books);
    // res.send(null);
    res.json(null);
})

app.listen(3000);