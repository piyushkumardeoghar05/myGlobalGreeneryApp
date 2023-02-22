const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const contactUsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true,"Name is required"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {validator:(value) => validator.isEmail(value),
        message:"Provide valid email"
      }
    },
    message: {
      type: String,
      required: [true,"Message is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("contactUs", contactUsSchema);
