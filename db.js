import mongoose from 'mongoose';
import dotenv from 'dotenv';

//ENV configuration
dotenv.config();

const URL = process.env.URL

export function dbConnection(){
    // const params={
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }
    try {
        mongoose.connect(URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error Connecting in DB", error)
    }
}