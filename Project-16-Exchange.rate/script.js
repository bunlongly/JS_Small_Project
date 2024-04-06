const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_Two = document.getElementById("currency-two");
const amountEl_Two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//step 1 Fetch exchange rates and update the Dom
function caclulate() {
  const currency_one = currencyEl_one.value;
  const currency_Two = currencyEl_Two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rate = data.rates[currency_Two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_Two}`;

      amountEl_Two.value = (amountEl_one.value * rate).toFixed(2);
    });
}
//step 2 addEventListner
currencyEl_one.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
currencyEl_Two.addEventListener("change", caclulate);
amountEl_Two.addEventListener("input", caclulate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_Two.value;
  currencyEl_Two.value = temp;
  caclulate();
});
caclulate();
