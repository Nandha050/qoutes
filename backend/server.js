const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();
app.use(cors());

app.get('/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
