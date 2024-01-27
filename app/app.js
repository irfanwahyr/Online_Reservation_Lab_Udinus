const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("tes respons");
});
res.send("tes respons api");

app.get('/api', (req, res) => {
    
});

module.exports = app