const express = require('express');
const dotenv = require('dotenv').config({path: './config/.env'});
const colors = require('colors');

const app = express();







app.listen(process.env.PORT, () => {

    const message = `server is running at ${process.env.PORT}`.magenta;
    console.log(`-------------------------\n${message}`);
});