const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('^/$|/page1(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'page1.html'));
});

router.get('^/$|/page2(.html)?', (req, res) => {
    res.redirect(303, 'page1.html');
});


module.exports = router;