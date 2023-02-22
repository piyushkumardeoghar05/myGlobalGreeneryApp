const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topThreeCardsSchema = new Schema(
  {
    src: {
      // data: Buffer,
      // contentType: String
      type: String,
      data: Buffer,
    },
    altText: {
      type: String,
      required: [true,"Alt text is required"],
    },
    title: {
      type: String,
      required: [true,"Title is required"],
    },
    backText: {
      type: String,
      required: [true,"Back text is required"],
    },
    knowMoreText: {
      type: String,
      required: [true,"Know more text is required"],
    },
    frontText: {
      type: String,
      required: [true,"Front text is required"],
    },
    caption: {
      type: String,
      required: [true,"caption is required"],
    },
    ratings: {
      type: Number,
      max: 5,
      min: 0,
      required: [true,"Ratings is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("threeCards", topThreeCardsSchema);
