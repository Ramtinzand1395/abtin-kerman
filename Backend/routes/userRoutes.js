const { Router } = require("express");

const userController = require("../controller/userController");

const router = new Router();

router.post("/login", userController.handleLogin);
router.get("/loginSms", userController.handleSms);

router.post("/add-comment", userController.handleAddComments);
// ?FILTRED PRODUCTS
router.get("/get-filtred-products/:category", userController.handleFilterProducts);
// ?FILTRED GAMES
router.get("/get-filtred-games/:category", userController.handleFilterGames);
// ? USERINFO   
router.post("/add-user-info", userController.handleUserInfo);
router.put("/update-user-info", userController.handleUpdateUserInfo);
router.get("/get-user-info/:userId", userController.handleGetUser);
// ?UserOrders
router.get("/get-user-orders/:userId", userController.GetUserOrders);
// ?BLOG
router.get("/get-blog/:blogId", userController.getBlog);


// router.get("/get-comment", userController.handleGetComments);
// router.post("/login", userController.handleLogin);

// router.put("/handle-about", userController.handleAbout);
// router.put("/updateuser", userController.updateUser);

// router.get("/get-data", userController.getInfo);

// router.put("/updatepassword", userController.handleResetPassword);
module.exports = router;
