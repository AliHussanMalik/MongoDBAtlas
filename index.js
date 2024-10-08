const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routers/itemRoutes');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
