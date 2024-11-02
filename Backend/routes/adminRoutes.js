const { Router } = require("express");

const adminController = require("../controller/adminController");
const uploadController = require("../controller/uploadController");
const { authenticated } = require("../middlewares/auth");

const router = new Router();
// ?UPLOAD IMAGE
router.post("/upload-image", authenticated, adminController.UploadImage);
router.get("/get-image", adminController.getImages);
// ?GAME
router.post("/add-game", authenticated, adminController.AddGame);
router.get("/get-game", adminController.GetGames);
router.get("/get-singleGame/:id", adminController.GetGame);
router.put("/update-game", authenticated, adminController.UpdateGame);
router.delete("/delete-game", authenticated, adminController.deleteGame);
// ? PRODUCT
router.post("/add-product", authenticated, adminController.AddProduct);
router.get("/get-products", adminController.GetProducts);
router.get("/get-product/:id", adminController.Getproduct);
router.delete(
  "delete-product/:productId",
  authenticated,
  adminController.deleteProduct
);
router.put("/update-product", authenticated, adminController.Updateproduct);

// ? TAGS
router.post("/add-tag", authenticated, adminController.AddTag);
router.get("/get-tag", adminController.GetTags);
router.delete("/del-tag", authenticated, adminController.DelTag);

// ? Categories
router.post("/add-Categories", authenticated, adminController.AddCategory);
router.get("/get-Categories", adminController.GetCategoreis);
router.delete("/del-cat", authenticated, adminController.DelCategory);
// ?Comments
router.get("/get-comments", adminController.handleGetComments);
router.delete(
  "/delete-comment/:commentId",
  authenticated,
  adminController.handleDeleteComment
);
router.post(
  "/confirm-comment/:commentId",
  authenticated,
  adminController.handleConfirmComment
);
// ? WEBLOG
router.post("/upload", authenticated, uploadController.UploadWeblogImage);
router.post("/create-blog", authenticated, adminController.createBlog);
router.get("/get-blogs", adminController.Blogs);
// ? ADD ORDER
router.post("/add-order", authenticated, adminController.AddOrder);
router.get("/get-orders",authenticated, adminController.GetOrders);
router.post("/change-status", authenticated, adminController.Changestatus);
// ? Users
router.get("/get-users", authenticated, adminController.GetUsers);

module.exports = router;
