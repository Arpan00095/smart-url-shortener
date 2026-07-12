const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createUser,
  getUserByEmail,
} = require("../services/auth.service");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

  // Validation
if (!name || !email || !password) {
  return res.status(400).json({
    success: false,
    message: "All fields are required",
  });
}

// Check if email already exists
const existingUser = await getUserByEmail(email);

if (existingUser) {
  return res.status(409).json({
    success: false,
    message: "Email already registered",
  });
}

// Password Hash
const hashedPassword = await bcrypt.hash(password, 10);
   // Save User
const user = await createUser({
  name,
  email,
  password: hashedPassword,
});

// Password ko response se remove karo
const { password: _, ...userWithoutPassword } = user;

return res.status(201).json({
  success: true,
  message: "User registered successfully",
  user: userWithoutPassword,
});
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );


    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Remove password
    const { password: _, ...userWithoutPassword } = user;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userWithoutPassword,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  signup,
  login,
};