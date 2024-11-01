const Categorey = require("../models/Categorey");
const Comment = require("../models/Comment");
const Games = require("../models/Games");
const Products = require("../models/Products");
const User = require("../models/User");
const { sendSms } = require("../utils/Send-Msg");

exports.handleLogin = async (req, res, next) => {
  console.log("User")
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({ message: "ورود موفقیت آمیز بود", user });
    } else {
      await User.create(req.body);
      res.status(201).json({ message: "عضویت موفقیت آمیز بود", user });
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
        plaque: userInfo.plaque,
        unit: userInfo.unit,
        postalCode: userInfo.postalCode,
        address: userInfo.address,
        city: userInfo.city,
        provider: userInfo.provider,
      };
      await user.save();
      let ali = "dfdfsf"
      res.status(201).json({ message: "اطلاعات با موفقیت ذخیره شد.", user , userInfo  , userId , ali});
    }
  } catch (err) {
    next(err);
  }
};
exports.handleGetUser = async (req, res, next) => {
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
