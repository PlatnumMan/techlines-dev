import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectToDatabase from "./db.js";
dotenv.config();

// routes
import productRoutes from "./routes/productRoutes.js";

connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const port = 5000;

app.get("/", (req, res) => {
  res.send("API WORKS");
});

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
