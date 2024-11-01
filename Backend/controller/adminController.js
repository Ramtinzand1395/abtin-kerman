const multer = require("multer");
const shortId = require("shortid");
const Image = require("../models/Image");
const Games = require("../models/Games");
const Blog = require("../models/Blog");

const path = require("path");
const Tag = require("../models/Tag");
const categorey = require("../models/Categorey");
const Products = require("../models/Products");
const Comment = require("../models/Comment");
const Order = require("../models/Order");
const User = require("../models/User");
// const order = require("../models/order");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.resolve(__dirname, "../public/uploads"); // Resolve the path relative to the current script file
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname); // Get the file extension
    const baseName = path.basename(file.originalname, fileExt); // Get the filename without the extension
    const uniqueName = baseName + "-" + shortId() + fileExt; // Combine filename + shortId + filetype
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 },
}).single("image");

exports.UploadImage = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
      return res.status(400).json({ error: "File upload error" });
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
      return res.status(500).json({ error: "Internal server error 1" });
    }
    // Everything went fine.
    // You can now use req.file to access information about the uploaded file.
    // For example, req.file.filename gives the unique filename generated by multer.
    const imageName = req.file.filename;
    try {
      await Image.create({
        imageName,
        direction: `/uploads/${imageName}`,
      });
      return res.status(201).json({
        message: "File uploaded successfully",
        filename: req.file.filename,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error 2" });
    }
  });
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ?  GAME API
// * ADD GAME
exports.AddGame = async (req, res) => {
  console.log("ssss")
  try {
    const games = await Games.create(req.body);
    res.status(201).json({ data: games, message: "بازی جدید ساخته شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * GET GAME
// !sssss
exports.GetGames = async (req, res) => {
  const { pageNumber = 1, sortOrder = "newestFirst" } = req.query;
  const limit = 5;
  const page = parseInt(pageNumber, 5);

  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }
  const skip = (page - 1) * limit;

  const sortOption =
    sortOrder === "newestFirst" ? { createdAt: -1 } : { createdAt: 1 };

  try {
    const totalOrders = await Games.countDocuments();
    const totalPages = Math.ceil(totalOrders / limit);
    const games = await Games.find()
      .populate("tags")
      .populate("categories")
      .populate("primaryImage")
      .populate("additionalImages")
      .limit(limit)
      .skip(skip)
      .sort(sortOption);

    res.status(200).json({ games, totalPages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};

// * GET SINGLE GAME
// ! هذ ایف برای تک به تک اجرا بشه
exports.GetGame = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Games.findById({ _id: id });
    if (!game) {
      return res.status(404).json({ error: "Game not found" }); // Handle if game is not found
    }

    const gameTags = await Tag.find({ _id: { $in: game.tags || [] } }); // Fetch tags
    const gameCats = await categorey.find({
      _id: { $in: game.categories || [] },
    }); // Fetch categories
    const primaryImage = await Image.findOne({
      _id: { $in: game.primaryImage },
    });
    const additionalImages = await Image.find({
      _id: { $in: game.additionalImages },
    });
    const comments = await Comment.find({
      _id: { $in: game.comments },
    }).populate("user", "profile email");
    const gameWithDetails = {
      ...game.toObject(),
      tags: gameTags,
      categories: gameCats,
      comments,
      primaryImage,
      additionalImages,
    };
    res.status(200).json(gameWithDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * UPDATE GAME
exports.UpdateGame = async (req, res) => {
  const {
    _id,
    info,
    title,
    primaryImage,
    additionalImages,
    categories,
    tags,
    features,
    additionalExplanations,
  } = req.body;
  try {
    const game = await Games.findById({ _id });
    if (!game) {
      return res.status(404).json({ message: "بازی پیدا نشد" });
    }
    game.info = info;
    game.title = title;
    game.primaryImage = primaryImage;
    game.additionalImages = additionalImages;
    game.features = features;
    game.categories = categories;
    game.additionalExplanations = additionalExplanations;
    game.tags = tags;
    // Save the changes
    await game.save();
    res.status(200).json({ data: game, message: "بازی آپدیت شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * DELETE GAME
exports.deleteGame = async (req, res) => {
  const { gameId } = req.body;
  try {
    const game = await Games.findByIdAndRemove({ _id: gameId });
    res.status(200).json({ data: game, message: "بازی  حذف شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ? TAGS
exports.AddTag = async (req, res) => {
  try {
    const tags = await Tag.create(req.body);
    res.status(201).json({ data: tags, message: "تگ جدید اضافه شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};

exports.GetTags = async (req, res) => {
  try {
    const tag = await Tag.find();
    res.status(200).json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
exports.DelTag = async (req, res) => {
  const { tagId } = req.body;
  try {
    const tag = await Tag.findOneAndRemove({ _id: tagId });
    res.status(202).json({ data: tag, message: "تگ حذف شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ? Category
exports.AddCategory = async (req, res) => {
  try {
    const Categoreis = await categorey.create(req.body);
    res
      .status(201)
      .json({ data: Categoreis, message: "دسته بندی  جدید اضافه شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};

exports.GetCategoreis = async (req, res) => {
  try {
    const Category = await categorey.find();
    res.status(200).json(Category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
exports.DelCategory = async (req, res) => {
  const { catId } = req.body;
  try {
    const cat = await categorey.findOneAndRemove({ _id: catId });
    res.status(202).json({ data: cat, message: "دسته بندی حذف شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};

// ?  PRODUCT API
// sssssss
// * ADD PRODUCT
exports.AddProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json({ data: product, message: "محصول جدید ساخته شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * GET PRODUCT
exports.GetProducts = async (req, res) => {
  const { pageNumber = 1, sortOrder = "newestFirst" } = req.query;
  const limit = 5;
  const page = parseInt(pageNumber, 5);
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }
  const skip = (page - 1) * limit;
  const sortOption =
    sortOrder === "newestFirst" ? { createdAt: -1 } : { createdAt: 1 };

  try {
    const totalOrders = await Products.countDocuments();
    const totalPages = Math.ceil(totalOrders / limit);
    const products = await Products.find()
      .populate("tags")
      .populate("categories")
      .populate("primaryImage")
      .populate("additionalImages")
      .limit(limit)
      .skip(skip)
      .sort(sortOption);
    res.status(200).json({ products, totalPages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * UPDATE PRODUCT
exports.Updateproduct = async (req, res) => {
  const {
    _id,
    info,
    title,
    primaryImage,
    additionalImages,
    categories,
    tags,
    features,
    additionalExplanations,
    Specifications,
    quantity,
    price,
    description,
  } = req.body;
  try {
    const product = await Products.findById({ _id });
    if (!product) {
      return res.status(404).json({ message: "بازی پیدا نشد" });
    }
    product.info = info;
    product.title = title;
    product.primaryImage = primaryImage;
    product.additionalImages = additionalImages;
    product.features = features;
    product.categories = categories;
    product.additionalExplanations = additionalExplanations;
    product.Specifications = Specifications;
    product.quantity = quantity;
    product.tags = tags;
    product.price = price;
    product.description = description;

    // Save the changes
    await product.save();
    res.status(200).json({ data: product, message: "بازی آپدیت شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * GET SINGLE PRODUCT
exports.Getproduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById({ _id: id });
    if (!product) {
      return res.status(404).json({ error: "محصولی پیدا نشد." }); // Handle if game is not found
    }

    const productTags = await Tag.find({ _id: { $in: product.tags || [] } }); // Fetch tags
    const productCats = await categorey.find({
      _id: { $in: product.categories || [] },
    }); // Fetch categories
    const primaryImage = await Image.findOne({
      _id: { $in: product.primaryImage },
    });
    const additionalImages = await Image.find({
      _id: { $in: product.additionalImages },
    });
    const comments = await Comment.find({
      _id: { $in: product.comments },
    }).populate("user", "profile email");
    const productWithDetails = {
      ...product.toObject(),
      tags: productTags,
      categories: productCats,
      primaryImage,
      additionalImages,
      comments,
    };
    res.status(200).json(productWithDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Products.findByIdAndRemove(productId);
    res.status(200).json({ data: product, message: "محصول  حذف شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ? COMMENTS

exports.handleGetComments = async (req, res, next) => {
  try {
    const foundComments = await Comment.find().populate("user");

    const populatedComments = await Promise.all(
      foundComments.map(async (comment) => {
        let relatedData = null;

        if (comment.relatedModel === "accountgame") {
          relatedData = await Games.findById(comment.relatedId);
        } else if (comment.relatedModel === "Product") {
          relatedData = await Products.findById(comment.relatedId);
        }

        return {
          ...comment.toObject(),
          relatedData,
        };
      })
    );
    res.status(201).json({
      data: populatedComments,
    });
  } catch (err) {
    next(err);
  }
};

exports.handleDeleteComment = async (req, res, next) => {
  const { commentId } = req.params;
  try {
    const foundComment = await Comment.findByIdAndRemove({ _id: commentId });
    res.status(201).json({
      data: foundComment,
      message: "با موفقیت حذف شد",
    });
  } catch (err) {
    next(err);
  }
};
exports.handleConfirmComment = async (req, res, next) => {
  const { commentId } = req.params;
  try {
    const foundComment = await Comment.findById(commentId);

    if (!foundComment) {
      return res.status(404).json({ message: "نظر پیدا نشد" });
    }
    let relatedData = null;
    if (foundComment.relatedModel === "accountgame") {
      relatedData = await Games.findById(foundComment.relatedId);
    } else if (foundComment.relatedModel === "Product") {
      relatedData = await Products.findById(foundComment.relatedId);
    }
    if (!relatedData) {
      return res.status(404).json({ message: "مورد مرتبط پیدا نشد" });
    }
    relatedData.comments.push(commentId);
    await relatedData.save();
    foundComment.isValidated = true;
    await foundComment.save();

    res.status(200).json({
      data: foundComment,
      message: "با موفقیت تایید شد",
    });
  } catch (err) {
    next(err);
  }
};
// ?BLOG
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json({ data: blog, message: "مقاله جدید ساخته شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
exports.Blogs = async (req, res) => {
  try {
    const Allblog = await Blog.find().populate("primaryImage");
    res.status(200).json({ data: Allblog });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * ORDERS
// ? ADD ORDER
exports.AddOrder = async (req, res) => {
  const { CardItems, userId } = req.body;
  try {
    const items = CardItems.map((item) => ({
      ...item,
      itemType: item.SelectedPlatform === null ? "Products" : "Games",
    }));
    const orderData = await Order.create({
      user: userId,
      items,
      TrackingCode: Math.floor(1000000 + Math.random() * 9000000),
    });
    const user = await User.findById(req.body.userId);
    user.order.push(orderData._id);
    await user.save();
    res
      .status(200)
      .json({ data: orderData, message: "سفارش شما با موفقیت ثبت شد." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ? GET ORDER
exports.GetOrders = async (req, res) => {
  const { pageNumber = 1, sortOrder = "newestFirst" } = req.query;
  const limit = 10;

  // Validate pageNumber
  const page = parseInt(pageNumber, 10);
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }

  const skip = (page - 1) * limit;
  const sortOption =
    sortOrder === "newestFirst" ? { createdAt: -1 } : { createdAt: 1 };

  try {
    // Count total orders
    const totalOrders = await Order.countDocuments(); // You can add filters here if needed
    const totalPages = Math.ceil(totalOrders / limit); // Calculate total pages

    // Fetch orders
    const orders = await Order.find()
      .populate("user")
      .limit(limit)
      .skip(skip)
      .sort(sortOption)
      .lean(); // Use lean to return plain JavaScript objects

    // Process each order to populate item details
    for (const order of orders) {
      for (const item of order.items) {
        const id = item.id;
        if (item.itemType === "Games") {
          const populatedGame = await Games.findById(
            { _id: id },
            "title primaryImage"
          ).lean();
          if (populatedGame) {
            item.populatedData = populatedGame;
          }
        } else if (item.itemType === "Products") {
          const populatedProduct = await Products.findById(
            { _id: id },
            "title primaryImage price"
          ).lean();
          if (populatedProduct) {
            item.populatedData = populatedProduct;
          }
        }
      }
    }

    // Return orders and total pages
    res.status(200).json({ orders, totalPages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.Changestatus = async (req, res) => {
  const { statuss, orderId } = req.body;

  if (!statuss || !orderId) {
    return res.status(400).json({ error: "Order ID and status are required." });
  }
  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    order.status = statuss;
    await order.save();

    res
      .status(200)
      .json({ data: order, message: "وضعیت سفارش با موفقیت تغییر کرد." });
  } catch (err) {
    console.error("Error updating order status:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ? USERS
// * GET usres
exports.GetUsers = async (req, res) => {
  const { pageNumber = 1, sortOrder = "newestFirst" } = req.query;
  const limit = 5;
  const page = parseInt(pageNumber, 5);
  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }
  const skip = (page - 1) * limit;
  const sortOption =
    sortOrder === "newestFirst" ? { createdAt: -1 } : { createdAt: 1 };

  try {
    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);
    const users = await User.find()
      .populate("order")
      .limit(limit)
      .skip(skip)
      .sort(sortOption);
    res.status(200).json({ users, totalPages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};