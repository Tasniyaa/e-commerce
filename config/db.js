import mongoose from "mongoose";
const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to database ${conn.connection.host}`);
        console.log(process.env.JWT_SECRET);
    } catch (error) {
      console.log(`Error in Mongodb ${error}`);
    }
};

export default connectDB;