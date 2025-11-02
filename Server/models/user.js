const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema(
  {
    // Username: required and unique
    name: {
      type: String,
      required: true,
      unique: true, // This creates a MongoDB index (not a strict validator)
      trim: true,   // Recommended: removes whitespace around names
    },

    // Email: required and unique
    email: {
      type: String,
      required: true,
      unique: true, // Good for preventing duplicate accounts
      lowercase: true, // Recommended: ensures all emails are stored in lowercase
      trim: true
    },

    // Password: required, not unique (users can share passwords coincidentally)
    password: {
      type: String,
      required: true
    },

    // Role: either 'customer' or 'admin'; defaults to 'customer'
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Create and export the model
const User = mongoose.model("User", userSchema);
module.exports = User;
