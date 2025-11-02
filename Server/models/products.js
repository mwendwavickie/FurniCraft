const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema(
  {
    // Product name — required and trimmed for consistency
    name: { 
      type: String, 
      required: true, 
      trim: true 
    },

    // Product description — optional but useful for listings
    description: { 
      type: String, 
      trim: true 
    },

    // Price — required, must be a positive number
    price: { 
      type: Number, 
      required: true,
      min: [0, 'Price must be a positive number']
    },

    // Category —  could later reference a Category model
    category: { 
      type: String, 
      trim: true 
    },

    // Array of image URLs
    images: {
      type: [String],
      validate: {
        validator: function(arr) {
          // Ensures all elements are non-empty strings
          return arr.every(url => typeof url === 'string' && url.trim() !== '');
        },
        message: 'Each image URL must be a non-empty string'
      },
      default: [] // Empty array if no images are provided
    },

    // Stock count — defaults to 0
    countInStock: { 
      type: Number, 
      default: 0,
      min: [0, 'Stock count cannot be negative']
    }
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true
  }
);

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
