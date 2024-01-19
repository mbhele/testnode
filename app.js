// Importing the express module
const express = require('express');

// Creating an instance of express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define the port to listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
