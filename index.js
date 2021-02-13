const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'there you' });
});

// If process.env.PORT (environment variable) isn't set, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);