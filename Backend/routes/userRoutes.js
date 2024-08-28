const { Router } = require("express");
const passport = require("passport");

const userController = require("../controller/userController");

const router = new Router();

router.post("/register", userController.createUser);
router.post("/login", userController.handleLogin);

router.put("/handle-about", userController.handleAbout);
router.put("/updateuser", userController.updateUser);

router.get("/get-data", userController.getInfo);

router.put("/updatepassword", userController.handleResetPassword);
module.exports = router;
