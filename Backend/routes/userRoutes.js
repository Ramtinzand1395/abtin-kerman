const { Router } = require("express");

const userController = require("../controller/userController");

const router = new Router();

router.post("/login", userController.handleLogin);
router.get("/loginSms", userController.handleSms);

router.post("/add-comment", userController.handleAddComments);
// router.get("/get-comment", userController.handleGetComments);
// router.post("/login", userController.handleLogin);

// router.put("/handle-about", userController.handleAbout);
// router.put("/updateuser", userController.updateUser);

// router.get("/get-data", userController.getInfo);

// router.put("/updatepassword", userController.handleResetPassword);
module.exports = router;
