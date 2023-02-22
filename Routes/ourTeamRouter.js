const express = require("express");
const app = express();
const router = express.Router();
const ourTeamController = require("../Controllers/ourTeamController");
router.route("/getOurTeam").get(ourTeamController.getOurTeam);
router.route("/").post(ourTeamController.postOurTeam);

module.exports = router;
