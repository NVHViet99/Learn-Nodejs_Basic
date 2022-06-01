const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authorRoute = require('./routes/author');
const booksRoute = require('./routes/books');

const app = express();
dotenv.config();

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGODB_URl, () => {
  console.log('Ok');
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));

//ROUTES
app.use('/v1/author', authorRoute);
app.use('/v1/books', booksRoute);

app.listen(8000, () => {
  console.log('server is running');
});
