const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  src: {
    type: String,
    data: Buffer,
    required: [true,"Image source link is required"],
  },
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  createdAt: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model('Gallery',gallerySchema);