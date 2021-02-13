const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

// If process.env.PORT (environment variable) isn't set, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);