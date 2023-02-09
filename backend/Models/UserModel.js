const mongoose = require("mongoose");

const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;
console.log(COLLECTION_NAME);
const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(COLLECTION_NAME, userShema);
