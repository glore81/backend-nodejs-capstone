const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

router.post('/register', async (req, res) => {
    const { email } = req.body;
    const authtoken = jwt.sign({ email }, JWT_SECRET);
    res.json({ authtoken, email });
});

router.post('/login', async (req, res) => {
    const { email } = req.body;
    const authtoken = jwt.sign({ email }, JWT_SECRET);
    res.json({ authtoken, userName: "User" });
});

router.put('/update', async (req, res) => {
    res.json({ message: "User updated successfully" });
});

module.exports = router;