const mongoose = require('mongoose');


let dbURL = 'mongodb://localhost:27017/productdb';
if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}


const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log('connected');
});

mongoose.connection.on('error', err => {
  console.log('error: ' + err);
  return connect();
});

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});


connect();

require('./products');
