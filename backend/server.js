const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/save-data', (req, res) => {
    const data = req.body;
    console.log('Received Data:', data);
    res.send('Data received!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});