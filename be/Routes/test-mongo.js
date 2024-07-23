const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // Perform a simple MongoDB operation
        const isConnected = mongoose.connection.readyState === 1;
        res.status(200).json({ message: isConnected ? "Connected to MongoDB" : "Not connected to MongoDB" });
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to MongoDB', error });
    }
});

module.exports = router;
