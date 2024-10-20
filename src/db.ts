require("dotenv").config()
import mongoose, { Document, Schema } from "mongoose"

interface Data extends Document{
    id: string,
    title: string,
    content: string
}

const DataSchema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true}
})

export const dataModel = mongoose.model<Data>("data", DataSchema)

export const connectDB = async () =>{
    try{
        const mongoUri = process.env.MONGO_URI
        if (!mongoUri) {
            throw new Error("MONGO_URI is not defined in env");
        }

        await mongoose.connect(mongoUri, {
            dbName: "main",
        });

        console.log("DB connected");
    }
    catch(err){
        console.error("Database connection error:", err);
        process.exit(1);
    }
}