const router = require('express').Router();
const {Currency} = require('../models/');


router.get('/', async (req, res) => {
    try {
      const currencyData = await Currency.findAll();
      const currencies = currencyData.map((currency) =>
        currency.get({ plain: true }))
        res.render('homepage', {
          currencies,
        });
      } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
  