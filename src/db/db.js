const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://yt:suchitha@yt-complete-backend.bp6zw9o.mongodb.net/halley"
        );

        console.log("Connected to DB");
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
    }
}

module.exports = connectDB;