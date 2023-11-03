const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
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
