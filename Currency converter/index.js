const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exhangeRateEl = document.getElementById("exchange-rate");

UpdateRate();

function UpdateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/034e409b7959c15a08f230c4/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exhangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${
        rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", UpdateRate);

currencySecondEl.addEventListener("change", UpdateRate);

worthFirstEl.addEventListener("input", UpdateRate);
