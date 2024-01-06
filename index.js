const express = require("express");
const mongoose = require("mongoose");
const app = express()
const uri = 'mongodb+srv://moniqjosifinalvarez:Malablurr09$@mon.sjzeotk.mongodb.net/jpads_db?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  const PORT = 3001; // Use any available port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  