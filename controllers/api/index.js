const router = require('express').Router();


const userCurrency = require('./currency-routes');

router.use('/currency', userCurrency);



module.exports = router;