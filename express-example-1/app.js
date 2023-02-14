const express = require("express");

const app = express();

app.get("/", (request, responce) => {
    responce.send("<h2>Home page</h2>")
})

app.get("/contacts", (request, responce) => {
    console.log(request.url);
    console.log(request.method);
    responce.send("<h2>Contacts page</h2>");
})

app.get("/page", (request, responce) => {
    console.log(request.url);
    console.log(request.method);
    responce.send("<h2>Contacts page</h2>");
})

app.listen(3001, () => console.log("Server running"))