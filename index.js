

const express = require('express');

const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
    origin: "*"
}))

const dotenv = require('dotenv');

dotenv.config();





app.listen(process.env.port, ()=>{
    // try {
    //     await connection;
    //     console.log("Connected to DB");
    // } catch (error) {
    //     console.log(error);
    // }
    console.log(`listening on port ${process.env.port}`);
})