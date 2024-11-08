const express = require('express');
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


async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');
}
connectDB().catch(err => console.log(err))

// const firstExcuse = new Excuse({
//     value: 'I was too busy debugging my code.'
// })

// firstExcuse.save()

app.listen(process.env.PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", process.env.PORT);
})