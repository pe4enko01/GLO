let isNumber = function(n){
    return !isNaN(parseFloat(n) && isFinite(n));
};
let amount1IsNumber = function(){
    do{
    amount1 = prompt("Во сколько обойдется первая статья?");}
    while (!isNumber(amount1));
};

let amount2IsNumber = function(){
    do{
    amount2 = prompt("Во сколько обойдется первая статья?")}
    while (!isNumber(amount2));
};

let money,
amount1,
amount2,
income = "Паперть",
ddExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
"Лобстеры, аренда виллы, зарплата прислуге"),
deposit = confirm("Есть ли у вас депозит в банке?"),
expenses1 = prompt("Введите обязательную первую статью расходов?");
amount1IsNumber();
let expenses2 = prompt("Введите обязательную втрорую статью расходов?");
amount2IsNumber();

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

console.log(ddExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} 3имбабвийский доллар`);
console.log(ddExpenses.toLocaleLowerCase().split(', '));

function getExpensesMonth(){
    return (parseFloat(amount1) + parseFloat(amount2));
}
function getAccumulatedMonth(){
    return (parseFloat(money)  - parseFloat(amount1)  - parseFloat(amount2));
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


