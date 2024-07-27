const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const authUserMiddleware = require("./middleware/authUserMiddleware");

router.get("/", (_req, res) => {
  res.json({ message: "Welcome to the api" });
});
router.get(
  "/user/:id",
  authUserMiddleware.checkToken,
  authController.findUserById
);
router.post(
  "/auth/register",
  authUserMiddleware.validateUserCreation,
  authController.createUser
);
router.post(
  "/auth/login",
  authUserMiddleware.validateUserLogin,
  authController.login
);
module.exports = router;
