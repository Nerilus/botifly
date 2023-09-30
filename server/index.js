const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//middlewares...

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("API working!");
});
