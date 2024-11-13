const Blog = require("../models/Blog");
const Categorey = require("../models/Categorey");
const Comment = require("../models/Comment");
const Games = require("../models/Games");
const Order = require("../models/Order");
const Products = require("../models/Products");
const User = require("../models/User");
const { sendSms } = require("../utils/Send-Msg");
const jwt = require("jsonwebtoken");

exports.handleLogin = async (req, res, next) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      // User exists, generate token and log them in
      const token = jwt.sign(
        {
          userId: user._id.toString(),
          email: user.email,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET
      );

      res.status(200).setHeader("Authorization", token).json({
        message: "ورود موفقیت آمیز بود",
        token,
      });
    } else {
      // User doesn't exist, create and log them in
      user = await User.create(req.body);
      const token = jwt.sign(
        {
          userId: user._id.toString(),
          email: user.email,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET
      );

      res.status(201).setHeader("Authorization", token).json({
        message: "عضویت موفقیت آمیز بود",
        token,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.handleUserInfo = async (req, res, next) => {
  try {
    const { userId, userInfo } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ message: "کاربر پیدا نشد." });
    } else {
      user.firstName = userInfo.firstName;
      user.lastName = userInfo.lastName;
      user.phone = userInfo.phone;
      user.address = {
        plaque: userInfo.address.plaque,
        unit: userInfo.address.unit,
        postalCode: userInfo.address.postalCode,
        address: userInfo.address.address,
        city: userInfo.address.city,
        provider: userInfo.address.provider,
      };
      await user.save();
      res.status(201).json({ message: "اطلاعات با موفقیت ذخیره شد.", user });
    }
  } catch (err) {
    next(err);
  }
};
// *UPDATEUSER
exports.handleUpdateUserInfo = async (req, res, next) => {
  try {
    const { userId, userInfo } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ message: "کاربر پیدا نشد." });
    } else {
      user.firstName = userInfo.firstName;
      user.lastName = userInfo.lastName;
      user.phone = userInfo.phone;
      user.address = {
        plaque: userInfo.address.plaque,
        unit: userInfo.address.unit,
        postalCode: userInfo.address.postalCode,
        address: userInfo.address.address,
        city: userInfo.address.city,
        provider: userInfo.address.provider,
      };
      await user.save();
      res.status(201).json({ message: "اطلاعات با موفقیت ذخیره شد.", user });
    }
  } catch (err) {
    next(err);
  }
};
exports.handleGetUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ message: "کاربر پیدا نشد" });
    } else {
      res.status(200).json({ user });
    }
  } catch (err) {
    next(err);
  }
};
// ?USER ORDERS
exports.GetUserOrders = async (req, res) => {
  const { pageNumber = 1, sortOrder = "newestFirst" } = req.query;
  const { userId } = req.params;
  const limit = 5;
  const page = parseInt(pageNumber, 5);

  if (isNaN(page) || page < 1) {
    return res.status(400).json({ error: "Invalid page number" });
  }
  const skip = (page - 1) * limit;

  const sortOption =
    sortOrder === "newestFirst" ? { createdAt: -1 } : { createdAt: 1 };

  try {
    const totalOrders = await Order.countDocuments({ user: userId });
    const totalPages = Math.ceil(totalOrders / limit);
    const userOrders = await Order.find({ user: userId })
      .limit(limit)
      .skip(skip)
      .sort(sortOption)
      .lean();
    for (const order of userOrders) {
      for (const item of order.items) {
        const id = item.id;
        if (item.itemType === "Games") {
          const populatedGame = await Games.findById({ _id: id }).lean();
          if (populatedGame) {
            item.populatedData = populatedGame;
          }
        } else if (item.itemType === "Products") {
          const populatedProduct = await Products.findById({ _id: id }).lean();
          if (populatedProduct) {
            item.populatedData = populatedProduct;
          }
        }
      }
    }

    res.status(200).json({ userOrders, totalPages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
exports.handleSms = async (req, res, next) => {
  try {
    const response = sendSms();
    console.log(response);
    res.status(201).send("ok");
  } catch (err) {
    next(err);
  }
};
// ? COMMENTS
exports.handleAddComments = async (req, res, next) => {
  try {
    const createdComment = await Comment.create(req.body);
    res.status(201).json({
      message: "نظر شما بعد از تایید ادمین اضافه میشود.",
      data: createdComment,
    });
  } catch (err) {
    next(err);
  }
};
// ? PRODUCTS PAGE DATA
exports.handleFilterProducts = async (req, res, next) => {
  const { slug1, slug2 } = req.params;
  const { pageNumber = 1, sortOrder = "lowToHigh" } = req.query;
  const limit = 10;
  const filter = slug2 && slug2 !== "undefined" ? { slug2 } : { slug1 };
  try {
    const skip = (parseInt(pageNumber, 10) - 1) * limit;
    const sortOption = sortOrder === "lowToHigh" ? { price: 1 } : { price: -1 };
    const filteredProducts = await Products.find(filter)
      .populate("primaryImage")
      .populate("tags")
      .limit(limit) // Limit the number of products
      .skip(skip)
      .sort(sortOption); // Skip products based on pagination
    res.status(200).json({
      filteredProducts,
    });
  } catch (err) {
    next(err);
  }
};
// ? ACCOUNTGAME PAGE DATA
exports.handleFilterGames = async (req, res, next) => {
  const { category } = req.params;
  const { pageNumber = 1, sortOrder = "lowToHigh" } = req.query;
  const limit = 10;
  try {
    const foundCategory = await Categorey.findOne({ categoryName: category });

    if (!foundCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    const skip = (parseInt(pageNumber, 10) - 1) * limit;
    const sortOption = sortOrder === "lowToHigh" ? { price: 1 } : { price: -1 };
    const filteredProducts = await Games.find({
      categories: foundCategory._id,
    })
      .populate("primaryImage")
      .populate("additionalImages")
      .populate("tags")
      .limit(limit) // Limit the number of products
      .skip(skip)
      .sort(sortOption); // Skip products based on pagination
    res.status(200).json({
      filteredProducts,
    });
  } catch (err) {
    next(err);
  }
};
// ?GET BLOG
exports.getBlog = async (req, res) => {
  const { blogId } = req.params;
  try {
    const blog = await Blog.findById(blogId).populate("primaryImage");
    res.status(200).json({ blog });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// ? searchRes
exports.searchRes = async (req, res) => {
  const { title } = req.body;
  const searchTitle = title.trim().toLowerCase();
  console.log(searchTitle);
  try {
    const products = await Products.find({
      title: { $regex: searchTitle, $options: "i" },
    })
      .select("_id title primaryImage")
      .populate("primaryImage");

    const games = await Games.find({
      title: { $regex: searchTitle, $options: "i" },
    }).select("_id title primaryImage");
    // Adding a link to each product and game
    const productsWithLinks = products.map((product) => ({
      _id: product._id,
      title: product.title,
      primaryImage: product.primaryImage, // Assuming primaryImage is an object with a URL field
      link: `/product/${product._id}`, // Constructing the link for products
    }));

    const gamesWithLinks = games.map((game) => ({
      _id: game._id,
      title: game.title,
      primaryImage: game.primaryImage, // Assuming primaryImage is an object with a URL field
      link: `/accountgame/${game._id}`, // Constructing the link for games
    }));

    // Combine both products and games into one array
    const combinedResults = [...productsWithLinks, ...gamesWithLinks];

    res.status(200).json({ results: combinedResults });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
// ? ADD TO FAVORITES
//  * add
exports.addFavorites = async (req, res) => {
  const { userId, itemId, itemType } = req.body;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "باید وارد حساب کاربری بشوید." });
    }

    // Check if item is already in favorites
    const isFavorite = user.favorites.some(
      (fav) => fav.itemId.toString() === itemId && fav.itemType === itemType
    );

    if (isFavorite) {
      // Remove the item from favorites
      user.favorites = user.favorites.filter(
        (fav) =>
          !(fav.itemId.toString() === itemId && fav.itemType === itemType)
      );

      res.status(200).json({
        favorites: user.favorites,
        message: "آیتم از لیست علاقه مندی ها حذف شد.",
      });
    } else {
      // Add the item to favorites
      user.favorites.push({ itemId, itemType });
      res.status(200).json({
        favorites: user.favorites,
        message: "با موفقیت به لیست مورد علاقه شما اضافه شد.",
      });
    }

    // Save the updated user object
    await user.save();
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// * GET favorite
exports.getFavorite = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ favorites: user.favorites });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * GET favorites

exports.getFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    // Change `const` to `let` to allow reassignment
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const favoritesWithDetails = await Promise.all(
      user.favorites.map(async (favorite) => {
        // Conditionally populate based on itemType
        if (favorite.itemType === "Product") {
          favorite.itemId = await Products.findById(favorite.itemId).populate(
            "primaryImage"
          ); // Populate with Product model
        } else if (favorite.itemType === "Games") {
          favorite.itemId = await Games.findById(favorite.itemId).populate(
            "primaryImage"
          ); // Populate with Game model
        }
        return favorite;
      })
    );

    res.status(200).json({ favorites: favoritesWithDetails });
  } catch (err) {
    console.error("Error populating favorites:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
// * remove favorite
exports.removeFavorite = async (req, res) => {
  const { userId, itemId } = req.body;
console.log(itemId)
  try {

    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const favoriteExists = user.favorites.some(
      (favorite) => favorite._id.toString() === itemId
    );

    if (!favoriteExists) {
      return res.status(404).json({ error: "Item not found in favorites" });
    }

    user.favorites = user.favorites.filter(
      (favorite) => favorite._id.toString() !== itemId
    );

    await user.save();
    res.status(200).json({
      favorites: user.favorites,
      message: "با موفقیت حذف شد.",
    });
  } catch (err) {
    console.error("Error removing favorite:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
