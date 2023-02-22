const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const testimonialsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true,"Name is required"],
    },
    src: {
      type: String,
      data: Buffer,
    },
    content: {
      type: String,
      required: [true,"content is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("testimonials", testimonialsSchema);
