const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const usersRoute = require ("./routes/users.js");

//middlewares...

dotenv.config();

const connect = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb")
  } catch (error){
    throw error;
  }
};

mongoose.connection.on("disconnected", () =>{
  console.log("mongo to disconnected")
})

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);



app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});