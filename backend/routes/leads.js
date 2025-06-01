const express = require('express');
const { submitLead } = require('../controllers/leadController');

const router = express.Router();

router.post('/leads', submitLead);

module.exports = router;
