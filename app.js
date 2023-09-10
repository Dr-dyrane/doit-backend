// Import necessary modules
const express = require('express');
const cors = require('cors'); // Add CORS support

// Create an Express application
const app = express();
const port = process.env.PORT || 3001; // Use port 3001 (you can change this if needed)

// Enable CORS
app.use(cors());

// Define a route to handle to-do list data (replace with your actual data)
const doits = [
  { id: '1', title: 'Sample Task 1', completed: false },
  { id: '2', title: 'Sample Task 2', completed: true },
];

// Define a route to get the to-do list data
app.get('/api/doits', (req, res) => {
  res.json(doits);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
