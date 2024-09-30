fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=5382649875144788b0e1cda479bcfd41"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount").innerHTML;
    let egp = document.querySelector(".egp span");
    let sar = document.querySelector(".sar span");

    egp.innerHTML = Math.round(amount * currency.rates["EGP"]);
    sar.innerHTML = Math.round(amount * currency.rates["SAR"]);

    console.log(egp);
    console.log(sar);
  });
