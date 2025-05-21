//include Node.js
const http = require('http');
const express = require('express');
const app = express();

//set port
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Node.js!</h1><p>Please add interesting info here.</p>');
});

app.get('/about', (req, res) => {
  res.send(`
    <div style="text-align: center;">
      <h1>Welcome to Myra's About Page</h1>
      <p>Myra is a YearUp student interning at Reddit.</p>
    </div>
    `);
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
