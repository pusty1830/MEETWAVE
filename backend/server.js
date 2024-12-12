const express = require("express");
const cors = require("cors");
const sequlize = require("./config/db.config");
const app = express();
require("dotenv").config();
const http = require("http").Server(app);
const SocketIo = require("./utils/socket");
const socket = require("socket.io");

//midllewares

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "GET,POST,OPTIONS,PUT,PATCH,DELETE"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//routes
app.use("/api", require("./routes"));

//databse
sequlize
  .authenticate()
  .then(async () => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

sequlize
  .sync({ force: false }) 
  .then(() => {
    console.log("Tables synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing tables:", error);
  });

const io = socket(http, {
  path: "/socket.io",
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
SocketIo(io);
const socketPORT = process.env.SOCKET_PORT;
const port = process.env.PORT || 4000;

http.listen(socketPORT, () => {
  console.log("Server started on port " + socketPORT);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
