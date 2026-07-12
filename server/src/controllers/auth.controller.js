const bcrypt = require("bcrypt");
const { createUser } = require("../services/auth.service");

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

module.exports = {
  signup,
};