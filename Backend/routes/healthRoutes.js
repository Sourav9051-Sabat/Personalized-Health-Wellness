   const express = require('express');
   const router = express.Router();
   const { createHealthProfile } = require('../controllers/healthController');
   const authMiddleware = require('../middleware/authMiddleware');

   router.post('/', authMiddleware, createHealthProfile);

   module.exports = router;