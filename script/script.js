let money = prompt("Ваш месячный доход?"),
income = "Паперть",
ddExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
"Лобстеры, аренда виллы, зарплата прислуге"),
deposit = confirm("Есть ли у вас депозит в банке?"),
expenses1 = prompt("Введите обязательную статью расходов?"),
expenses2 = prompt("Введите обязательную статью расходов?"),
amount1 = prompt("Во сколько это обойдется?"),
amount2 = prompt("Во сколько это обойдется?"),
mission = 1,
period = 8,
budgetMonth = +money  - +expenses1  + +expenses2;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(ddExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} 3имбабвийский доллар`);
console.log(ddExpenses.toLocaleLowerCase().split(', '));


let budgetDay = Math.floor(budgetMonth/30);

console.log(`Бюджет на месяц ${budgetMonth}`);
console.log(`Цель будет достигната за ${Math.ceil(mission/budgetMonth)} месяцев(-а)`);
console.log(`Бюджет на день ${budgetDay}`);

if(budgetDay >= 1200){
    console.log("У вас высокий уровень дохода");
}else if (1200 > budgetDay >= 600 ){
    console.log("У вас средний уровень дохода");
}else if (600 > budgetDay >= 0 ){
    console.log("К сожалению у вас уровень дохода ниже среднего");
}else if (0 > budgetDay){
    console.log("Что то пошло не так");
}