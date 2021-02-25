"use strict";

const startButton = document.getElementById('start');

const firstPlus = document.getElementsByTagName('button')[0];
const secondPlus = document.getElementsByTagName('button')[1];

const chetbox = document.querySelector('#deposit-check');
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item');


let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncome = document.getElementsByClassName('additional_income-value')[0];
let additionalExpenses= document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriod = document.getElementsByClassName(' income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelectorAll('.income-title')[1];
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelectorAll('.expenses-title')[1];
let expensesAmount = document.querySelector('.expenses-amount');
let expendedItem = document.querySelectorAll(".expenses-items");
let additionalExpensesTitle = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let dtargetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomePeriodValue = document.querySelector('.income_period-value');
let incomeItem = document.querySelectorAll(".income-items");


let isNumber = function (n) {
    return !isNaN(Number(n));
};



let appData = {
    budget: 0,
    deposit: true,
    ddExpenses:[],
    addIncome:[],
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    percentDeposit:0,
    moneyDeposit:0,
    expenses: {},
    income: {},

    start : function () {
        // do {
        //     money = prompt("Ваш месячный доход?");
        // }
        // while (!isNumber(money));
        if(salaryAmount.value === ""){
            alert("Ошибка пустая строка дрполнительный доход")
        };
        appData.budget = +salaryAmount.value;

       
        appData.getexpenses();
        appData.getIncome();
        //appData.asking();
        //appData.getExpensesMonth();
        //appData.getBudget();
       // appData.getStatusIncome();
        //appData.getInfoDeposit();
        //appData.calcSaveMoney();

        appData.getExpensesMonth();
        appData.getMonthBubgetPlusIncome();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();
        cL();
    },
    showResult: function(){
        budgetMonthValue.value = appData.budget;
        budgetDayValue.value = Math.ceil(appData.budget/30);
        expensesMonthValue.value =  appData.expensesMonth;
        additionalExpenses.value =  appData.ddExpenses.join(', ');
        additionalIncome.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcSaveMoney();
        
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesTitle.value.split(",");
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ""){
                appData.ddExpenses.push(item);
                
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem1.forEach(function(item){
           let itemValue = item.value.trim();
           if (itemValue !== ""){
               appData.addIncome.push(itemValue);
           }
        })
    },
    addExpensesdBlock : function(){
        let cloneExpendedItem = expendedItem[0].cloneNode(true);
        expendedItem[0].parentNode.insertBefore(cloneExpendedItem, secondPlus);
        expendedItem = document.querySelectorAll(".expenses-items");
        if(expendedItem.length === 3){
            secondPlus.style.display = "none";
        }
    },
    getexpenses : function(){
        expendedItem.forEach(function(item){
        console.log("🚀 ~ file: script.js ~ line 82 ~ expendedItem.forEach ~ item", item);
            let itemExpenses = item.querySelector(".expenses-title").value;
            let cachExpenses = item.querySelector(".expenses-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                appData.expenses[itemExpenses] = cachExpenses;
            }
        })
    },
    addIncomeBlock : function(){
        let cloneExpendedItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneExpendedItem, firstPlus);
        incomeItem = document.querySelectorAll(".income-items");
        if(incomeItem.length === 3){
            firstPlus.style.display = "none";
        }
    },
    getIncome: function(){
        incomeItem.forEach(function(item){
            let itemExpenses = item.querySelector(".income-title").value;
            let cachExpenses = item.querySelector(".income-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                appData.addIncome[itemExpenses] = cachExpenses;
            }
        })
    },


    getExpensesMonth: function () {
        for (let key in appData) {
            if (appData[key] == appData.expenses) {
                for (let i in appData[key]) {
                    appData.expensesMonth += parseFloat(appData[key][i]);
                }
            }
        }
    },
    getMonthBubgetPlusIncome: function () {
        for (let key in appData) {
            if (appData[key] === appData.addIncome) {
                for (let i in appData[key]) {
                    appData.budget += +parseFloat(appData[key][i]);
                }
            }
        }
    },

    getBudget: function () {
        appData.budgetMonth = +appData.budget - +appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {     
        return Math.ceil(dtargetAmount.value / appData.budget );
        
    },
    asking: function () {

        let addExp = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
        "Лобстеры, аренда виллы, зарплата прислуге");
        while (!isNaN(Number(addExp))){
            addExp = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
            "Лобстеры, аренда виллы, зарплата прислуге");
        };
        //appData.ddExpenses = `[${addExp.toLocaleLowerCase().split(', ')}]`;

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
        appData.deposit = confirm("Есть ли у вас депозит в банке?");
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
            do  {
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
        return appData.budget  * periodSelect.value;
    },

};

startButton.addEventListener("click", appData.start);
secondPlus.addEventListener("click", appData.addExpensesdBlock);
firstPlus.addEventListener("click", appData.addIncomeBlock);
periodSelect.addEventListener("input",  function(){
    document.querySelector('.period-amount').innerHTML = periodSelect.value;
})


// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getStatusIncome();
// appData.getInfoDeposit();
// appData.calcSaveMoney();












console.log(`Расходы за месяц ${appData.expensesMonth}`);
console.log(`${appData.getTargetMonth()}`);
console.log(appData.getStatusIncome());

console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcSaveMoney());
function cL(){
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
}


