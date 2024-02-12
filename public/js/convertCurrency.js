const convertCurrency = async (event) => {
    event.preventDefault();
    const exchangeDisplay = document.querySelector('#exchange-result');
    const currency1 = document.querySelector('#currency1').value;
    const currency2 = document.querySelector('#currency2').value;
    const currencyAmount = document.querySelector('#currency-amount').value;
    fetch('api/currency', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(currencyData => {
        const currency1Data = currencyData.find(currency => currency.currency_code === currency1);
        const currency2Data = currencyData.find(currency => currency.currency_code === currency2);
        exchange = currencyAmount/currency1Data.exchange_rate*currency2Data.exchange_rate;
        roundedExchange = exchange.toFixed(2);
        exchangeDisplay.innerHTML = roundedExchange +" " + currency2Data.currency_code
  
    });

};


document.querySelector('#submit-button').addEventListener('click', convertCurrency)
