const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || "mongodb://mongodb-service:27017";
const dbName = "secondChance";
let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;