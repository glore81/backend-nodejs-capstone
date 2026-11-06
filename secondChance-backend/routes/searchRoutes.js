const express = require('express');
const router = express.Router();
const connectToDatabase = require('../database/db');

router.get('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("secondChanceItems");
        let query = {};
        if (req.query.category) {
            query.category = req.query.category;
        }
        const items = await collection.find(query).toArray();
        res.json(items);
    } catch (e) {
        next(e);
    }
});

module.exports = router;