const express = require("express");
const path = require("path")
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("../server/db/connection/connection")

const PORT = process.env.SERVER_PORT || 8989;

dotenv.config();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.end("GET REQUEST...")
})

//Listen the server...
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`)
});