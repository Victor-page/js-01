"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let amount = prompt("Сколько дроидов вы хотите купить?", "");
if (amount === null) {
  amount = "Отменено пользователем!";
} else {
  const totalPrice = amount * 3000;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    const theRest = credits - totalPrice;
    alert(
      `Вы купили ${amount} дроидов, на счету осталось ${theRest} кредитов.`
    );
  }
}
