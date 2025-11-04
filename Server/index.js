require ('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

//connect Database
connectDB();

//Middleware
app.use(express.json()); //parse json body
app.use(cors()); //enable CORS
app.use(morgan('dev')); //logging

//Basic route
app.get('/', (req, res) => {
    res.send('FurniCraft API is running...');
});

//Routes
//app.use('/api/users', require('./routes/users'));
//app.use('api/orders', require('./routes/orders'));

//Error handling middleware
//app.use(notFound);
//app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})