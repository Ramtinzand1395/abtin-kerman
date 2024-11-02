const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
  const token = req.get("Authorization");
  console.log(token,"ttt")
  try {
    if (!token) {
      const error = new Error("مجوز کافی ندارید");
      error.statusCode = 401;
      throw error;
    }
    
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken.isAdmin, "decodedToken");

    if (!decodedToken || !decodedToken.isAdmin) {
      const error = new Error("شما مجوز کافی ندارید");
      error.statusCode = 403; // Use 403 for "Forbidden" access due to insufficient permissions
      throw error;
    }
    
    next();
  } catch (err) {
    next(err);
  }
};
