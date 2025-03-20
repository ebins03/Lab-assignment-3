const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 

let items = [
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' },
    { id: 3, name: 'Item C' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.send('Item added successfully!');
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) return res.status(404).send('Item not found');
    
    item.name = req.body.name;
    res.send('Item updated successfully!');
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(i => i.id !== id);
    res.send('Item deleted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

