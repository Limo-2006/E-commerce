import express from "express";
import cors from "cors";
import "dotenv/config";
import connectedDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/useRoute.js";
import productRouter from "./routes/productRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use('/api/product', productRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server only after DB connect
const startServer = async () => {
  try {
    await connectedDB();        // 👈 await MUST
    await connectCloudinary();  // 👈 await recommended

    app.listen(port, () => {
      console.log("Server started on PORT : " + port);
    });
  } catch (error) {
    console.log("Server failed to start ❌");
    console.log(error.message);
  }
};

startServer();
