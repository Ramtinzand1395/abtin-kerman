const express = require("express");
const path = require("path");
const dotEnv = require("dotenv");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const app = express();

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/uploadRoutes"));
// app.use("/api", require("./routes/borrowBookRoutes"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`Server Running On Port ${port}`)
);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const mySocket = io.of("/socket");

mySocket.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
