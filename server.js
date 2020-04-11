// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

// port
const PORT = process.env.PORT;

// routes
const routes = require('./routes');

// database
const db = require('./models');

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: "GET,POST,PUT,DELETE",
  credentials: true, //allows session cookies to be sent back and forth
  optionsSuccessStatus: 200 //legacy browsers
}

// middleware
//CORS- Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// API routes
app.use('/api/v1', routes.auth);
// app.use('/api/v1', routes.api);

app.get('/', (req, res) => {
  res.send('api page');
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));