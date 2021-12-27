const mongoose = require('mongoose');
const schema = require('./schema');

require('dotenv').config()

const db = mongoose.connection;
const model = (() => {
  // db.on
  db.on("error", console.error);
  db.on("open", () => {
    console.log("Connecting mongoDB!");
  })

  // Atlas connect
  mongoose.connect(
    `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@ch07cluster.bt8lz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )

  // create model 
  const model = {};
  for (let key in schema) {
    model[key] = mongoose.model(key, schema[key]);
  }
  return model;
})();

module.exports = model;