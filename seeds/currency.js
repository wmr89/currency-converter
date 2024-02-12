const { Currency } = require("../models/");

const currencyData = [
    { currency_code: "USD", exchange_rate: 1.00 },
    { currency_code: "EUR", exchange_rate: 0.927902 },
    { currency_code: "GBP", exchange_rate: 0.792486 },
    { currency_code: "INR", exchange_rate: 83.037564 },
    { currency_code: "AUD", exchange_rate: 1.535834 },
    { currency_code: "CAD", exchange_rate: 1.345987 },
    { currency_code: "JPY", exchange_rate: 149.252349 },
];

const seedCurrency = () => Currency.bulkCreate(currencyData);

module.exports = seedCurrency;