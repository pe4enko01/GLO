let money = 3,
income = "Паперть",
ddExpenses = "Лобстеры, аренда виллы, зарплата прислуге", 
deposit = true,
mission = 1,
period = 8;
//alert("Cообщение с любым текстом");
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(ddExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} зимбабвийский долларор`);

console.log(ddExpenses.toLocaleLowerCase().split(', '));

let budgetDay = money/30;
console.log(budgetDay);