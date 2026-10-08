const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function connectDB() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URL,
        );

        console.log("Connected to DB");
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
    }
}

module.exports = connectDB;


