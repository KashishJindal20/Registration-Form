const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // To allow cross-origin requests
app.use(bodyParser.json()); // To parse JSON bodies

// Routes
const formRoutes = require('./routes/formRoutes');
app.use('/api/form', formRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
