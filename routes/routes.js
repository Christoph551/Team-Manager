const router = require('express').Router();
const books = require('./employeeRoutes');

router.use('/api', books);

module.exports = router;