const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./models/db');
// add product and userroutes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// Load .env variables
dotenv.config();

// Connect to MongoDB using the URI from the .env file
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
