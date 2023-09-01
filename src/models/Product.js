import mongoose from 'mongoose';
// models/Product.js
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String,
    description: String,
    hasDelivery: Boolean
  });
  
  export default mongoose.models.Product || mongoose.model('Product', ProductSchema);