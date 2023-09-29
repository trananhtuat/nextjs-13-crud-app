import mongoose from "mongoose";

const connection = {};

export const MongooseClient = async () => {
  try {
    if (connection.connected) return;

    const db = await mongoose.connect(process.env.MONGO_URI);

    connection.connected = db.connections[0].readyState;
  } catch (err) {
    throw err;
  }
};