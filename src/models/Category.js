import mongoose from 'mongoose';
// models/Category.js
const CategorySchema = new mongoose.Schema({
    name: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  });
  
  export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
  