const express = require('express');
const app = express();

app.get('/title', (req, res) => {
    return res.send('univ.bacc.ing.comp.');
});

app.get('/desc', (req, res) => {
    return res.send('Jednostavan opis');
});
