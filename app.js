const express = require('express');
const { connectDB } = require("./config/db");
const morgan = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api'); 
const  Excuse  = require('./models/excuse.model')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use('/api', apiRoutes);
app.use(express.json());
app.use(morgan('tiny'));
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server listening in port ${PORT}`);
  });