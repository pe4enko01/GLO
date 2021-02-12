"use strict";

let isNumber = function (n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};
let money;
let start = function () {
    do {
        money = prompt("Ваш месячный доход?");
    }
    while (!isNumber(money));
};
start();

let appData = {
    budget: money,
    mission: 7,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    expenses: {},

    getExpensesMonth: function () {
        for (let key in appData) {
            if (appData[key] == appData.expenses) {
                for (let i in appData[key]) {
                    appData.expensesMonth += parseFloat(appData[key][i]);
                }
            }
        }
    },
    getBudget: function () {
        appData.budgetMonth = +appData.budget - +appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        if (appData.budgetMonth > 0) {
            return `Цель будет достигнута за ${Math.ceil(appData.mission / appData.budgetMonth )} месяцев`;
        } else {
            return "Цель не будет достигнута";
        }
    },
    asking: function () {
        for (let i = 0; i < 2; i++) {
            let qustion = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`);
            do {
                appData.expenses[qustion] = prompt(`Во сколько обойдется ${i === 0 ? "Первая" : "Вторая"} статья?`);
            }
            while (!isNumber(appData.expenses[qustion]));
        }
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ("У вас высокий уровень дохода");
        } else if (1200 > appData.budgetDay >= 600) {
            return ("У вас средний уровень дохода");
        } else if (600 > appData.budgetDay >= 0) {
            return ("К сожалению у вас уровень дохода ниже среднего");
        } else if (0 > appData.budgetDay) {
            return ("Что-то пошло не так");
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();

console.log(`Расходы за месяц ${appData.expensesMonth}`);
console.log(`${appData.getTargetMonth()}`);
console.log(appData.getStatusIncome());


console.log(`Наша программа включает в себя данные:`);
for (let key in appData) {
    if(typeof(appData[key]) !== 'function'){
        if (typeof(appData[key]) === 'object') {
            for (let i in appData[key]) {
                console.log(`${i} ${appData[key][i]}`);
            }
        } else {
            console.log(`${key} ${appData[key]}`)
        }
    }
}