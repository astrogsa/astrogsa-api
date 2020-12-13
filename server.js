const express = require('express');
const cors = require('cors');
const  mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://userx:atlas@mymongo.ae5rr.gcp.mongodb.net/huntbd?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology: true }
  );
requireDir("./src/models");

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3002);
