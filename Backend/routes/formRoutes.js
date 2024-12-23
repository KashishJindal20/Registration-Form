const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Received Form Data:', formData);

  // Handle data processing (e.g., save to database)
  res.status(200).json({ message: 'Form submitted successfully!' });
});

module.exports = router;
