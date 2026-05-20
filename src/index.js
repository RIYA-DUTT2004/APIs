import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import sequelize from "./config/postgres.js";

import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();


// middleware
app.use(express.json());


// MongoDB
connectDB();


// PostgreSQL
sequelize.sync()
.then(() => {
  console.log("PostgreSQL Connected");
})
.catch((err) => {
  console.log(err);
});


// routes
app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);

app.use("/api/products", productRoutes);


// test route
app.get("/", (req, res) => {
  res.send("API Running");
});


// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
