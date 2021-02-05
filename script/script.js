let money = prompt("Ваш месячный доход?"),
income = "Паперть",
ddExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
"Лобстеры, аренда виллы, зарплата прислуге"),
deposit = confirm("Есть ли у вас депозит в банке?"),
expenses1 = prompt("Введите обязательную первую статью расходов?"),
amount1 = prompt("Во сколько обойдется первая статья?"),
expenses2 = prompt("Введите обязательную втрорую статью расходов?"),
amount2 = prompt("Во сколько обойдется сторая статья?"),
mission = 1,
period = 8;

let showTypeOf = function(x){
    console.log(typeof x);
};
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
        return Math.ceil(mission / accumulatedMonth);
    }else{
        return "бесконечное число";
    }
}


let budgetDay = Math.floor(accumulatedMonth/30);

console.log(`Цель будет достигнута за ${getTargetMonth()} месяцев`);

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


