const express = require("express");
const app = express();
const router = express.Router();
const testimonialsController = require("../Controllers/testimonialsController");
router.route("/getTestimonials").get(testimonialsController.getTestimonials);
router.route("/").post(testimonialsController.postTestimonials);

module.exports = router;
