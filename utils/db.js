import mongoose from "mongoose";

const initDB = () => {
    // Dont connect to DB if already connected
    if (mongoose.connections[0].readyState) {
        console.log("already connected");
        return;
    }
    // Connect to DB 
    // MONGO_URI environment variable, which is a string that specifies the MongoDB connection URL.
    // The useNewUrlParser and useUnifiedTopology options are used to avoid deprecation warnings.
    mongoose.connect(proccess.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on("connected", () => {
        console.log("connected to mongo");
    });
    mongoose.connection.on("error", (err) => {
        console.log("error connecting, err");
    });
};

export default initDB;