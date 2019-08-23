const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const History = require('./models/history');
const Account = require('./models/account');

// Configure mongoose and Connect to db.
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongo server.");
});
mongoose.connect('mongodb://localhost/historyDB', { useNewUrlParser: true });

// Configure app to use bodyParser.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('static'));

// Handle CORS.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = require('./routes')(app, History, Account);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
