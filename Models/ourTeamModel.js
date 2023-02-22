const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const ourTeamSchema = new Schema(
  {
    src: {
      type: String,
      data: Buffer,
    },
    name: {
      type: String,
    },
    pos: {
      type: String,
    },
    fb: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    insta: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    linkedin: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
    mail: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https", "ftp"],
            require_tld: true,
            require_protocol: true,
          }),
        message: "Must be a Valid URL",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ourTeamModel", ourTeamSchema);
