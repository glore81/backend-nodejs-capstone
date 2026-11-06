const express = require('express');
const natural = require('natural');
const app = express();

app.use(express.json());

app.post('/sentiment', (req, res) => {
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");
    const analysis = analyzer.getSentiment(req.body.sentence.split(" "));
    res.json({ sentiment: analysis });
});

app.listen(3000, () => console.log('Sentiment microservice running on port 3000'));