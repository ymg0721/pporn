var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/', function(req, res, next) {
    res.setHeader({ 'Access-Control-Allow-Origin': 'http://localhost:3000/' });
    res.json({ title: '吾輩は猫である' });
});

module.exports = router;