const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000

// app.use(express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
    // res.set("Content-Type", "text/plain"); /* para auterar text*/
    // res.type('html') /* para auter o tipo se e html ou json etc */
    res.send("hello world from GET ");
})

app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})