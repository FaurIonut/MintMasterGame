const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB database connection established successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

module.exports = connect;
