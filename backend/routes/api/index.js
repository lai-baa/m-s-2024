// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const adminRouter = require("./admin.js");
const { restoreAdmin } = require('../../utils/auth.js');

router.use(restoreAdmin);

router.use('/session', sessionRouter);
router.use('/admin', adminRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});  

module.exports = router;