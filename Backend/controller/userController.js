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
    console.log(email)
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
    const { userId, UserInfo } = req.body;
    console.log(UserInfo);
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ message: "کاربر پیدا نشد." });
    } else {
      user.firstName = UserInfo.firstName;
      user.lastName = UserInfo.lastName;
      user.phone = UserInfo.phone;
      user.address = {
        plaque: UserInfo.address.plaque,
        unit: UserInfo.address.unit,
        postalCode: UserInfo.address.postalCode,
        address: UserInfo.address.address,
        city: UserInfo.address.city,
        provider: UserInfo.address.provider,
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
    console.log(userInfo);
    console.log(userInfo);
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
  const { userId, userInfo } = req.body;

  try {
    const { userId } = req.params;
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
    const filteredProducts = await Products.find({
      categories: foundCategory._id,
    })
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
  const {blogId} = req.params;
  try {
    const blog = await Blog.findById(blogId)
      .populate("primaryImage");
    res.status(200).json({ blog });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// exports.handleLogin = async (req, res, next) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(400).send("آدرس ایمیل یا کلمه عبور اشتباه است");
//     }
//     const isEqual = await bcrypt.compare(password, user.password);
//     if (isEqual) {
//       res.status(200).json({ user });
//     } else {
//       res.status(400).send("آدرس ایمیل یا کلمه عبور اشتباه است");
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// exports.updateUser = async (req, res, next) => {
//   const { username, email } = req.body;
//   const userId = "65b50acf8257bc5b5327263b";
//   try {
//     const user = await User.findOne({ _id: userId });
//     // Check if the user exists
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.username = username;
//     user.email = email;
//     await user.save();
//     res.status(201).json({ message: "تغغیرات با موفقیت انجام شد." });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getInfo = async (req, res) => {
//   try {
//     const data = await User.find();
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json("مشکلی سمت سرور پیش آمده");
//   }
// };

// exports.handleResetPassword = async (req, res, next) => {
//   const userId = "65b50acf8257bc5b5327263b";

//   const { oldPassword, newPassword, confirmPassword } = req.body;
//   const user = await User.findOne({ _id: userId });
//   const { password } = user;
//   const isEqual = await bcrypt.compare(oldPassword, password);

//   try {
//     if (!isEqual) {
//       return res.status(400).send("کلمه عبور قبلی  اشتباه");
//     } else if (newPassword !== confirmPassword) {
//       return res.status(400).send("کلمه عبور با هم مشابه نیست");
//     }
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.password = newPassword;
//     await user.save();

//     res.status(200).json({ message: "عملیات با موفقیت انجام شد" });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.handleAbout = async (req, res) => {
//   const { newAbout, newinstagram, newlinkdine, newpintrest, newyoutube } =
//     req.body;
//   const userId = "65b50acf8257bc5b5327263b";
//   try {
//     // Use await to get the user object
//     const user = await User.findOne({ _id: userId });

//     // Check if the user exists
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update the about field
//     user.about = newAbout;
//     user.instagram = newinstagram;
//     user.linkdine = newlinkdine;
//     user.pintrest = newpintrest;
//     user.youtube = newyoutube;
//     // Save the changes
//     await user.save();

//     res.status(201).json({ message: "تغییرات با موفقیت انجام شد." });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
