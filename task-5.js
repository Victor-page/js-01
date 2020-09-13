"use strict";
let country = prompt("Укажите страну", "");
// console.log(country);
// console.log(country.toLowerCase());
let price;

switch (country.toLowerCase()) {
  case "китай":
    price = 100;
    break;
  case "чили":
    price = 250;
    break;
  case "австралия":
    price = 170;
    break;
  case "индия":
    price = 80;
    break;
  case "ямайка":
    price = 120;
    break;
  default:
    price = -1;
}
// console.log(country);
if (price !== -1) {
  country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
} else {
  alert("В вашей стране доставка не доступна");
}
