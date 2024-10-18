// backend/routes/api/index.js
const router = require('express').Router();
const { restoreAdmin } = require('../../utils/auth.js');

router.use(restoreAdmin);

module.exports = router;