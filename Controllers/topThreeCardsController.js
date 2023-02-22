const topThreeCardsModel = require("../Models/topThreeCardsModel");
const express = require("express");
const app = express();
app.use(express.json());
exports.getTopThreeCards = async (req, res, next) => {
  try{
    
    let cards = await topThreeCardsModel.find().sort({ ratings: -1 }).limit(3);
    return res.json({
      "successMessage":"List of all cards",
      cards:cards,
    });
    // console.log(cards);
  
    // console.log(cards);
    // res.end(cards);
    // res.send(JSON.stringify(res));
  }catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
exports.postTopThreeCards = async (req, res, next) => {
  try{

    const card = req.body;
    let car = await topThreeCardsModel.create(card, (err) => {
      if (err) throw err;
      console.log("Details Uploaded");
     return res.json({
      successMessage: "Details Uploaded",
      });
    });
  }catch (err) {
    if (err) console.log(err.message);
    return res.json({
      errorMessage: err.message,
    });
  }
};
