import mongoose from 'mongoose';
// models/User.js

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

export default mongoose.models.User || mongoose.model('User', UserSchema);