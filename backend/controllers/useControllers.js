import userModel from "../models/userModels.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import validator from "validator";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check all fields
    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password are required"
      });
    }

    // 2️⃣ Check user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist"
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // 4️⃣ Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Response
    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error logging in"
    });
  }
};


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1️⃣ Check all fields
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "All fields are required"
      });
    }

    // 2️⃣ Validate email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email"
      });
    }

    // 3️⃣ Password strength
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters"
      });
    }

    // 4️⃣ Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists"
      });
    }

    // 5️⃣ Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 6️⃣ Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();

    // 7️⃣ Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 8️⃣ Response
    res.json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        // id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error registering user"
    });
  }
};



// Route for admin login
const adminLogin = async (req, res) => {
  
}

export { loginUser, registerUser, adminLogin }