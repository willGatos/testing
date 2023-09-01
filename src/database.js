// /lib/db.js
import mongoose from 'mongoose';

const connection = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI + "/suxces-ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("first")

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
