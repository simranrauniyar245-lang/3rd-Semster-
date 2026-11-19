const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Express Server!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});