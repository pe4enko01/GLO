"use strict";

let isNumber = function (n) {
    return !isNaN(Number(n));
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
    deposit: true,
    mission: 700000,
    period:10,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit:0,
    moneyDeposit:0,
    expenses: {},
    income: {},

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
        if(confirm("Есть ли у вас дополнительный заработок?")){
            
            let itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            while (!isNaN(Number(itemIncome))){
                itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
            };
            
            let cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
            while (!isNumber(cashIncome)){
                cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
            };
            appData.income[itemIncome] = cashIncome; 
        };
        appData.deposit = confirm("Есть ли у вас депозит в банке?")
        for (let i = 0; i < 2; i++) {
            let qustion = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`);
            while (!isNaN(Number(qustion))){
                qustion = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`);
            };     
            do {
                appData.expenses[qustion] = parseFloat(prompt(`Во сколько обойдется ${i === 0 ? "Первая" : "Вторая"} статья?`));
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
    },
    getInfoDeposit: function () {
        if(appData.deposit){
            do {
                appData.percentDeposit = prompt("Какой годовой процент?", "10");
            }
            while (!isNumber(appData.percentDeposit));

            appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            while (!isNumber(appData.moneyDeposit)){
                appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
            };

        }
    },
    calcSaveMoney: function(){
        return appData.budgetMonth  * appData.period;
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSaveMoney();

console.log(`Расходы за месяц ${appData.expensesMonth}`);
console.log(`${appData.getTargetMonth()}`);
console.log(appData.getStatusIncome());

console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcSaveMoney());

console.log(`Наша программа включает в себя данные:`);
for (let key in appData) {
    
        if (typeof(appData[key]) === 'object') {
            let popr = "";
            for (let i in appData[key]) {
                popr +=`${i}: ${appData[key][i]}, `;
            }
            console.log(`${key}: {${popr.slice(0,length-2)}}`);
        } else {
            console.log(`${key}: ${appData[key]}`)
        }
    
}