const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// Connect db function
connectDB();

// Initliaze Express

const app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Link get goals api gateway with thr route

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);



app.listen(port, () => console.log(`Server started on port ${port}`));

