import express from 'express';
import cors from 'cors';
import connectionDB from './connection/ConnectionDb.js';

const app = express();
const port = 3000;
// Establish database connection
connectionDB().then(() => {
    console.log("Connected to the database");
  });
// Middleware setup
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
