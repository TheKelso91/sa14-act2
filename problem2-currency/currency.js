const currencyForm = document.getElementById('currency-form');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');

currencyForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2); 
            resultDiv.innerHTML = `
                ${amount} ${fromCurrency} equals ${convertedAmount} ${toCurrency}. 
                (Exchange rate: 1 ${fromCurrency} = ${rate} ${toCurrency})
            `;
        })
        .catch(error => {
            console.error('Error fetching rates:', error);
            resultDiv.innerHTML = 'An error occurred while fetching exchange rates';
        });
});
