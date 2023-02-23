const express = require('express');
const dotenv = require('dotenv');
const { menRouter } = require('./Routes/Men.routes');
const { womenRouter } = require('./Routes/Women.routes');
const { bagRouter } = require('./Routes/Bag.routes');
const cors = require('cors');
const { connections } = require('./configs/db');

dotenv.config();
const app = express();


app.use(express.json());


app.use(cors({
    origin: "*"
}))
app.use("/men", menRouter)
app.use("/women", womenRouter)
app.use("/bag", bagRouter)


app.get("/", (req, res) => {
    res.send("Welcome to ASOS database");
})


app.listen(process.env.port, async()=>{
    try {
        await connections;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`listening on port ${process.env.port}`);
})