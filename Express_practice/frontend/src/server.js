const express = require('express');
const path = require('node:path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res) => {
const users = [{"John":"20"}, {"Doe":"12"}, {"Jane":"50"}];
res.json(users);    
}) ;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});