# Doit Backend

A backend API for the Doit app, a simple to-do list application. Built with Node.js and Express.js, and powered by MongoDB for data storage.

## Table of Contents

- [Author](#author)
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Routes](#api-routes)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Author

- [Alexander Udeogaranya](https://github.com/Dr-dyrane)

## Description

The Doit Backend is the server-side component of the Doit app. It provides the necessary API endpoints for creating, reading, updating, and deleting tasks. The backend also handles data storage and retrieval using MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

To get started with the Doit Backend, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Dr-dyrane/doit-backend.git
   ```

2. Install dependencies:

   ```bash
   cd doit-backend
   npm install
   ```

3. Set up your MongoDB database and update the database connection details in the `config/database.js` file.

4. Start the server:

   ```bash
   npm start
   ```

5. The backend API should now be running and accessible at `http://localhost:your-port`. You can integrate it with the Doit frontend or any other client application.

## API Routes

Here are the main API routes provided by the backend:

- `GET /api/tasks`: Get a list of all tasks.
- `POST /api/tasks`: Create a new task.
- `GET /api/tasks/:id`: Get a specific task by ID.
- `PUT /api/tasks/:id`: Update a specific task by ID.
- `DELETE /api/tasks/:id`: Delete a specific task by ID.

You can find detailed API documentation in the `docs/` folder.

## Database

The Doit Backend uses MongoDB for data storage. You can access the database at [Doit MongoDB Database](https://doit-by-dyrane-db.netlify.app). Update the database configuration in the `config/database.js` file.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.