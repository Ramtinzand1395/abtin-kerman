const { Router } = require("express");

const adminController = require("../controller/adminController");

const router = new Router();
// ?UPLOAD IMAGE
router.post("/upload-image", adminController.UploadImage);
router.get("/get-image", adminController.getImages);
// ?GAME
router.post("/add-game", adminController.AddGame);
router.get("/get-game", adminController.GetGames);
router.get("/get-singleGame/:id", adminController.GetGame);
router.put("/update-game", adminController.UpdateGame);
router.delete("/delete-game", adminController.deleteGame);
// ? PRODUCT
router.post("/add-product", adminController.AddProduct);
router.get("/get-products", adminController.GetProducts);
router.get("/get-product/:id", adminController.Getproduct);

// ? TAGS
router.post("/add-tag", adminController.AddTag);
router.get("/get-tag", adminController.GetTags);
router.delete("/del-tag", adminController.DelTag);

// ? Categories
router.post("/add-Categories", adminController.AddCategory);
router.get("/get-Categories", adminController.GetCategoreis);
router.delete("/del-cat", adminController.DelCategory);
// ?Comments
router.get("/get-comments", adminController.handleGetComments);
router.delete("/delete-comment/:commentId", adminController.handleDeleteComment);
router.post("/confirm-comment/:commentId", adminController.handleConfirmComment);

module.exports = router;
