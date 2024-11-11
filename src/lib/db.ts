import mongoose from "mongoose";

async function dbConnect() {
  //set your dbName Here
  const dbName = "mm";
  if (mongoose.connections[0].readyState) return true;
  try {
    await mongoose.connect(process.env.MONGO_URI + "/" + dbName);
    console.log("MONGO CONNECTED");
    return true;
  } catch (error) {
    console.log("connect-db-error", error);
  }
}

export default dbConnect;
