const express = require("express");
const app = express();
const router = express.Router();
const galleryController = require("../Controllers/galleryController");
router.route('/').get( galleryController.getAllpics);
router.route('/').post( galleryController.postGallery);
router.route('/getLatestPics').get(galleryController.getLatestPics);
module.exports = router;