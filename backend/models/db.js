const mongoose = require("mongoose");

// let db = 'mongodb://localhost:27017/mundoanimaldb';
const db = require("../config/keys").mongoURI;

if (process.env.NODE_ENV === "production") {
  db = process.env.DB_HOST || process.env.MONGODB_URI;
}

const connect = () => {
  setTimeout(() => mongoose.connect(db, { useNewUrlParser: true }), 1000);
};

mongoose.connection.on("connected", () => {
  console.log("connected");
});

mongoose.connection.on("error", (err) => {
  console.log("error: " + err);
  return connect();
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

connect();

require("./products");
require("./admin");
