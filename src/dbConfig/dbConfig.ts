import mongoose from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to database successfully");
        });

        connection.on("error", () => {
            console.log("Error connecting to database");
            process.exit(1);
        });
        
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
        
    }
}