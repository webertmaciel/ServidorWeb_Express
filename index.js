const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000

let consoleBody = (req, res, next) => {
    console.log(req.body)
    next()
}

let mid = (req, res) => {
    res.send("hello world!");
    // res.set("Content-Type", "text/plain"); /* para auterar text*/
    // res.type('html') /* para auter o tipo se e html ou json etc */
}

// app.use(express.static(path.join(__dirname, 'client')))


app.use("/", bodyParser.json())
app.use("/", consoleBody)
app.get("/", mid)
app.post("/", mid)


app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})