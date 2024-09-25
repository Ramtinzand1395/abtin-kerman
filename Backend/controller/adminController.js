const multer = require("multer");
const shortId = require("shortid");
const Image = require("../models/Image");
const Games = require("../models/Games");

const path = require("path");
const Tag = require("../models/Tag");
const categorey = require("../models/categorey");

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
      return res.status(500).json({ error: "Internal server error" });
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
      return res.status(500).json({ error: "Internal server error" });
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
  try {
    const games = await Games.create(req.body);
    res.status(201).json({ data: games, message: "بازی جدید ساخته شد" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * GET GAME
// ! هذ ایف برای تک به تک اجرا بشه
exports.GetGames = async (req, res) => {
  try {
    const games = await Games.find();
    // Create an array to store the result
    const gamesWithTags = await Promise.all(
      games.map(async (game) => {
        if (
          game
          // game.tags &&
          // game.tags.length > 0 ||
          // game.categories &&
          // game.categories.length > 0
          // &&
          // game.image &&
          // game.image.length > 0
        ) {
          // Find tags only if the game has tags
          const gameTags = await Tag.find({ _id: { $in: game.tags } });
          const gameCats = await categorey.find({
            _id: { $in: game.categories },
          });
          const gameImages = await Image.find({
            _id: { $in: game.image },
          });

          return {
            ...game.toObject(),
            tags: gameTags,
            categories: gameCats,
            image: gameImages,
          };
        } else {
          return { ...game.toObject(), tags: [], categories: [], images: [] }; // No tags, just return the game with an empty tags array
        }
      })
    );
    res.status(200).json(gamesWithTags);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" }); // Sending an error response if an error occurs
  }
};
// * UPDATE GAME
exports.UpdateGame = async (req, res) => {
  const {
    gameId,
    info,
    title,
    image,
    company,
    region,
    multypalyer,
    categories,
    tags,
  } = req.body;
  try {
    const game = await Games.findById({ _id: gameId });
    if (!game) {
      return res.status(404).json({ message: "بازی پیدا نشد" });
    }
    game.info = info;
    game.title = title;
    game.image = image;
    game.company = company;
    game.region = region;
    game.multypalyer = multypalyer;
    game.categories = categories;
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
  console.log(req.body);
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
