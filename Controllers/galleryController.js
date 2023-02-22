const galleryModel = require("../Models/galleryModel");
const express = require("express");
const app = express();

exports.postGallery = async (req, res, next) => {
  try {
    const pic = await galleryModel.create(req.body);
    console.log("pic created");
    return res.json({
      successMessage: "pic created",
      pic: pic,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.getAllpics = async (req, res, next) => {
  try {
    const pics = await galleryModel.find();
    console.log("All pics fetched");
    return res.json({
      successMessage: "All pics fetched",
      pics: pics,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.getLatestPics = async (req, res, next) => {
  try {
    const pics = await galleryModel.find().sort({ createdAt: -1 }).limit(5);
    console.log("Latest pics fetched");
    return res.json({
      successMessage: "Latest pics fetched",
      "pics": pics,
    });
  } catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
