const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://65449f761ee4b15a60025a56--tranquil-sunshine-585e70.netlify.app",
    ],
  })
);

// Routes
app.use("/api/v1", userRouter);

// Testing API
app.get("/test", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "API is working",
  });
});

module.exports = app;
