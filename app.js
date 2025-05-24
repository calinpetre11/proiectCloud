require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const entriesRouter = require('./routes/entries');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


app.use('/api/entries', entriesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});