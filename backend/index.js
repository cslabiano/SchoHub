const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // so frontend (port 3000) can access backend (port 3001)

const app = express();

//const uri = 'mongodb+srv://moniqjosifinalvarez:Malablurr09$@mon.sjzeotk.mongodb.net/jpads_db?retryWrites=true&w=majority';
const uri = 'mongodb+srv://moniqjosifinalvarez:Malablurr09$@mon.sjzeotk.mongodb.net/SchoHub_db?retryWrites=true&w=majority';

const usersController = require('./controllers/users-controller');
const resourcesController = require('./controllers/resources-controller');
const residentsController = require('./controllers/residents-controller');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', usersController);
app.use('/api/resources', resourcesController);
app.use('/api/residents', residentsController);


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
  