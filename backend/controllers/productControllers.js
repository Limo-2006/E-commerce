import { cloudinary } from "../config/cloudinary.js";
import fs from "fs";
import productModel from "../models/productModels.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
      // ❌ date REMOVED
    } = req.body || {};

    // 🟢 SAFE image access
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    // 🛑 image1 required
    if (!image1) {
      return res.json({
        success: false,
        message: "At least image1 is required"
      });
    }

    // 🔥 Cloudinary upload helper
    const uploadToCloudinary = async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "products"
      });

      // local file delete
      fs.unlinkSync(file.path);

      return result.secure_url;
    };

    // 🔥 Upload images
    const images = [];
    images.push(await uploadToCloudinary(image1));
    if (image2) images.push(await uploadToCloudinary(image2));
    if (image3) images.push(await uploadToCloudinary(image3));
    if (image4) images.push(await uploadToCloudinary(image4));

    // ✅ Create product (NO date passed)
    const newProduct = await productModel.create({
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],
      bestseller: bestseller === "true",
      images
      // ✅ date auto handled by schema default
    });

    res.json({
      success: true,
      message: "Product uploaded successfully",
      product: newProduct
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

// 📦 List products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ date: -1 });

    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

// 🗑 Remove product (placeholder)
const removeProduct = async (req, res) => {
  try {
    const id = req.body?.id;  // safe access

    if (!id) {
      return res.json({ success: false, message: "Product id required" });
    }

    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // delete images from Cloudinary
    for (const img of product.images || []) {
      const publicId = "products/" + img.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }

    await productModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Product deleted" });

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};


 const singleProduct = async (req, res) => {
  try {
    const productId = req.params.id; 

    if (!productId) {
      return res.status(400).json({ success: false, message: "Product ID required" });
    }

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { listProducts, addProduct, removeProduct, singleProduct };
