const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json()); 

const cors = require("cors");
app.use(cors());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


// CONNECT TO MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/inventoryDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// basic route
app.get("/", (req, res) => {
  res.send("Server + DB running");
});

// server
app.listen(8888, () => {
  console.log("Server started on port 8888");
});