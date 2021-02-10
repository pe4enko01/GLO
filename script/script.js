"use strict";

let amount = [];
let expenses = [];
let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};

let money,
income = "Паперть",
ddExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
"Лобстеры, аренда виллы, зарплата прислуге"),
deposit = confirm("Есть ли у вас депозит в банке?");

for(let i = 0; i < 2; i++){
    expenses[i] = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`);
    do{
        amount[i] = prompt(`Во сколько обойдется ${i === 0 ? "Первая" : "Вторая"} статья?`)}
        while (!isNumber(amount[i]));
};

let mission = 1,
period = 8;

let showTypeOf = function(x){
    console.log(typeof x);
};


let start = function(){
    do{
    money = prompt("Ваш месячный доход?");}
    while (!isNumber(money));
};

start();

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//console.log(ddExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} 3имбабвийский доллар`);
console.log(ddExpenses.toLocaleLowerCase().split(', '));

function getExpensesMonth(){
    
    return (parseFloat(amount[0]) + parseFloat(amount[1]));
}
function getAccumulatedMonth(){
    return (parseFloat(money)  - getExpensesMonth());
}
let accumulatedMonth = getAccumulatedMonth();

function  getTargetMonth(){

    if(accumulatedMonth > 0){
        return `Цель будет достигнута за ${Math.ceil(mission / accumulatedMonth)} месяцев`;
    }else{
        return "Цель не будет достигнута";
    }
}


let budgetDay = Math.floor(accumulatedMonth/30);

console.log(`${getTargetMonth()}`);

console.log(`Бюджет на месяц ${accumulatedMonth}`);

console.log(`Бюджет на день ${budgetDay}`);

let  getStatusIncome = function(){
    if(budgetDay >= 1200){
        return ("У вас высокий уровень дохода");
    }else if (1200 > budgetDay >= 600 ){
        return ("У вас средний уровень дохода");
    }else if (600 > budgetDay >= 0 ){
        return ("К сожалению у вас уровень дохода ниже среднего");
    }else if (0 > budgetDay){
        return ("Что-то пошло не так");
    }
};

console.log(getStatusIncome());


