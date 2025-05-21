//include Express
const express = require('express');

//set port
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center;">
      <h1>Welcome to my home page!</h1>
      <p>Nothing is here yet.</p>
    </div>
    `);
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
