const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../Controllers/userController");
// router.get("/setCookie", userController.setCookie);
router.route("/forgotPassword").post(userController.forgotPassword);
// router.get("/getCookie", userController.isAuthenticated);
router.route("/").post( userController.createUser);
router.route("/login").post( userController.login);
router.route("/logout").post(userController.isAuthenticated, userController.logout);
// router.route("/:id").patch( userController.updateUser);
router.patch("/:id", userController.isAuthenticated, userController.updateUser);
router.patch("/resetPassword/:id", userController.updateUser);
// router.route("/:id").delete(userController.deleteUser)
router.delete("/:id", userController.isAuthenticated, userController.deleteUser);
router.route("/getAllUsers").get(
  userController.isAuthenticated,
  // userController.isAdmin,
  userController.getAllUser
);
// router.route("/:id").get( userController.getUserById);
router.get("/:id", userController.isAuthenticated, userController.getUserById);
module.exports = router;
