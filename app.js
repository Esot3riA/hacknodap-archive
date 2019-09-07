const path = require('path');
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
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Configure app to use bodyParser.
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle CORS.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set routers.
app.use(express.static(path.join(__dirname, "client/build")));
const router = require('./routes')(app, History, Account);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
