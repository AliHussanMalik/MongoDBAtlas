const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  password:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Item', ItemSchema);
