
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

// Configure mongoose and Connect to db.
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongo server.");
});
mongoose.connect('mongodb://localhost/historyDB', { useNewUrlParser: true });

// Configure app to use bodyParser.
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

const port = process.env.PORT || 3001;
const History = require('./models/history');
const router = require('./routes')(app, History);

const server = app.listen(port, () => {
  console.log("Express server has started on port " + port);
});
