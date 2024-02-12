const router = require('express').Router();
const {Currency} = require('../../models');

router.get("/", async (req, res) => {
    try {
      const currencyData = await Currency.findAll({});
      res.status(200).json(currencyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;