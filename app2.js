const express = require('express');

const fs = require('fs');

const app = express();

const jsonData = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

app.get('/products', (req, res) => {
    res.json(jsonData); 
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
