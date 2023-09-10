// Import necessary modules
const express = require('express');
const cors = require('cors'); // Add CORS support

// Create an Express application
const app = express();
const port = process.env.PORT || 3001; // Use port 3001 (you can change this if needed)

// Enable CORS
app.use(cors());

// Initialize an array to store to-do list items
let doits = [
  { id: '1', title: 'Sample Task 1', completed: false },
  { id: '2', title: 'Sample Task 2', completed: true },
];

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to get the to-do list data
app.get('/api/doits', (req, res) => {
  res.json(doits);
});

// Define a route to add a new to-do item
app.post('/api/doits', (req, res) => {
  const newItem = req.body; // Assuming the request body contains the new item
  newItem.id = (doits.length + 1).toString(); // Generate a unique ID
  doits.push(newItem);
  res.status(201).json(newItem); // Respond with the added item and 201 status (created)
});

// Define a route to update a to-do item
app.put('/api/doits/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body; // Assuming the request body contains the updated item
  const index = doits.findIndex((item) => item.id === id);
  if (index !== -1) {
    doits[index] = { ...doits[index], ...updatedItem };
    res.json(doits[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Define a route to delete a to-do item
app.delete('/api/doits/:id', (req, res) => {
  const id = req.params.id;
  const index = doits.findIndex((item) => item.id === id);
  if (index !== -1) {
    const deletedItem = doits.splice(index, 1)[0];
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
