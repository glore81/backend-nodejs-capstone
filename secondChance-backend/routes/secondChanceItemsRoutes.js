const express = require('express');
const multer = require('multer');
const router = express.Router();
const connectToDatabase = require('../database/db');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage: storage });

// Connect to DB and fetch all items
router.get('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("secondChanceItems");
        const items = await collection.find({}).toArray();
        res.json(items);
    } catch (e) {
        next(e);
    }
});

// Single file upload via Multer
router.post('/', upload.single('file'), async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("secondChanceItems");
        const result = await collection.insertOne(req.body);
        res.status(201).json(result);
    } catch (e) {
        next(e);
    }
});

// Get item by ID
router.get('/:id', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("secondChanceItems");
        const item = await collection.findOne({ id: req.params.id });
        if (!item) return res.status(404).send("Item not found");
        res.json(item);
    } catch (e) {
        next(e);
    }
});

// Delete item by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("secondChanceItems");
        await collection.deleteOne({ id: req.params.id });
        res.json({ message: "deleted" });
    } catch (e) {
        next(e);
    }
});

module.exports = router;