# ACC_Red_Arrow_LB

Web App for showing lap times in leaderboard for Red_Arrow

## Features

- REST API for managing lap records (CRUD)
- MongoDB database (via Mongoose)
- Express.js backend
- Environment variable support via `.env`

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/SMTEmon/ACC_Red_Arrow_LB.git
   cd ACC_Red_Arrow_LB
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   password=YOUR_MONGODB_PASSWORD
   ```

4. Update the MongoDB connection string in [`index.js`](index.js) if needed.

### Running the Server

- For development (with auto-reload):
  ```sh
  npm run dev
  ```
- For production:
  ```sh
  npm run serve
  ```

The server will run on [http://localhost:8080](http://localhost:8080) by default.

## API Endpoints

All endpoints are prefixed with `/api/records`.

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/records`        | Get all records              |
| GET    | `/api/records/:id`    | Get a record by ID           |
| GET    | `/api/records/byName/:name` | Get records by name   |
| POST   | `/api/records`        | Create a new record          |
| PUT    | `/api/records/:id`    | Update a record by ID        |
| DELETE | `/api/records/:id`    | Delete a record by ID        |

## Environment Variables

- `password` - Your MongoDB password (used in the connection string in [`index.js`](index.js))

## Project Structure

```
controller/
  record.controller.js
models/
  record.model.js
routes/
  record.route.js
utils/
  timeconverter.js
index.js
.env
```

## License

MIT

---

*Edit this README to add more details as your project grows!*