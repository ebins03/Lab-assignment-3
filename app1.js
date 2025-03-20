const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>JavaScript Frameworks- Group #8</h1>
        <ul>
            <li>Amith</li>
            <li>Ebin</li>
            <li>Ekrem</li>
        </ul>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
