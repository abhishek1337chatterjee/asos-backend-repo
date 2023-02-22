const express = require('express');

const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
    origin: "*"
}))

const dotenv = require('dotenv');
dotenv.config();
