const Comment = require("../models/Comment");
const Games = require("../models/Games");
const User = require("../models/User");
const { sendSms } = require("../utils/Send-Msg");

exports.handleLogin = async (req, res, next) => {
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
