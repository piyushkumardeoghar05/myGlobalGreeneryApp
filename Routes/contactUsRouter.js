const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const contactUsModel = require("../Models/contactUsModel");
const app = express();
const router = express.Router();
const contactUsController = require("../Controllers/contactUsController");
router.route("/").post(contactUsController.postContactUs);
module.exports = router;
