require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();

// Use the path module to define the static directory
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

// Configure PostgreSQL database connection using environment variables
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbConnection = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
const db = pgp(dbConnection);

// ... other middleware and route handlers

app.get('/messages', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contacting.html'));
});

app.post('/messages', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, phone, message } = req.body;

    // Insert the data into the PostgreSQL database
    const query =
      'INSERT INTO messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING id';
    const values = [name, email, phone, message];

    // Execute the query and get the inserted row's ID
    const insertedRow = await db.one(query, values);

    // Send a response indicating successful insertion
    res.status(201).json({
      message: 'Data inserted successfully',
      insertedRowId: insertedRow.id,
    });
  } catch (error) {
    // Handle any errors that occur during the insertion
    // console.error('Error while inserting data:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'courses.html'));
});

app.post('/student', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, phone, lesson, course, message } = req.body;

    // Insert the data into the PostgreSQL database
    const query =
      'INSERT INTO students (name, email, phone, lesson, course, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
    const values = [name, email, phone, lesson, course, message];

    // Execute the query and get the inserted row's ID
    const insertedRow = await db.one(query, values);

    // Send a response indicating successful insertion
    res.status(201).json({
      message: 'Data inserted successfully',
      insertedRowId: insertedRow.id,
    });
  } catch (error) {
    // Handle any errors that occur during the insertion
    // console.error('Error while inserting data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
