const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./models/db');

// Load .env variables
dotenv.config();

// Connect to MongoDB using the URI from the .env file
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
