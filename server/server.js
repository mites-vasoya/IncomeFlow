const express = require("express")
const app = express();

const PORT = process.env.PORT || 9999;

app.get("/home", (req, res) => {
    res.end("GET REQUEST...")
})

app.listen(PORT, () => {
    console.log("Server is Running on http://localhost:9999")
})