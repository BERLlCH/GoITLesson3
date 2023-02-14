const express = require("express");
const cors = require("cors");
const books = require("./books");

const app = express();

// app.use((req, res, next) => {
//     console.log("Вітаю в GoIT")
//     next()
// })

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/books", (req, res) => {
    res.json(books)
})

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);