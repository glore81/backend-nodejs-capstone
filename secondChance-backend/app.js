const express = require('express');
const app = express();
const searchRoutes = require('./routes/searchRoutes');
const secondChanceItemsRoutes = require('./routes/secondChanceItemsRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/secondchance/items', secondChanceItemsRoutes);
app.use('/api/secondchance/search', searchRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;