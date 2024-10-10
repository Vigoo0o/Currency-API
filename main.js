// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cc9271d395d24c77950745ef050c04a3

let amount = document.querySelector(".amount"),
  egp = document.querySelector(".egp span"),
  sar = document.querySelector(".sar span");

fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=cc9271d395d24c77950745ef050c04a3"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((myData) => {
    egp.innerHTML = myData.rates.EGP;
    sar.innerHTML = myData.rates.SAR;
  });
