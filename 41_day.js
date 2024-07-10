//Date: 31/05/24

// Question: "Simple currency convertor"
// Task:
// Write a function called convertCurrency that takes three parameters: amount,fromCurrency, and toCurrency.

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  let amountInUsd = 0;
  let convertCurrency = 0;
  if (fromCurrency !== "USD") {
    amountInUsd = amount / rates[fromCurrency];
  } else {
    amountInUsd = amount;
  }
  if (toCurrency !== "USD") {
    convertCurrency = amountInUsd * rates[toCurrency];
  } else {
    convertCurrency = amountInUsd;
  }
  return convertCurrency;
}
console.log(convertCurrency(100, "GBP", "EUR"));
