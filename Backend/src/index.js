require("dotenv").config();

const express = require("express");
const connectDB = require("./config/connectDB")


const app = express();


const PORT = process.env.PORT || 4000;

connectDB();

app.use("/", (req, res) => {
  res.send("Hello from server");
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running at PORT ${PORT}`);
})