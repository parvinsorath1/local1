const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
// CORS ko specific origin ke liye set karo (Vercel URL)
app.use(cors({ origin: 'https://local1.vercel.app' }));

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.post('/save-data', (req, res) => {
    const data = req.body;
    console.log('Received Data:', data);
    res.send('Data received!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});