

const express = require('express');

const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
    origin: "*"
}))

const dotenv = require('dotenv');
const { connection } = require('./configs/db');

dotenv.config();

app.get("/", (req, res) => {
    res.send("Welcome to ASOS database");
})


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`listening on port ${process.env.port}`);
})