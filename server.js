const express = require("express");
const app = express()
const port = 3000
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/input-en.html`)
})
app.listen(port, () => {
    console.log(`Server started on http://127.0.0.1:${port}`)
})
