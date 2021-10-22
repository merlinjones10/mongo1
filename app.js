const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());

const connectDB = require('./config/db');
// Load config
dotenv.config({ path: './config/config.env' });
// Set up connectionto DB
connectDB();
// Routes
app.use('/', require('./routes/index'));

app.listen(3000);
