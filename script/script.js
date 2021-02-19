// "use strict";

// let isNumber = function (n) {
//     return !isNaN(Number(n));
// };
// let money;
// let start = function () {
//     do {
//         money = prompt("Ваш месячный доход?");
//     }
//     while (!isNumber(money));
// };
// start();

// let appData = {
//     budget: money,
//     deposit: true,
//     mission: 700000,
//     period:10,
//     ddExpenses:0,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     percentDeposit:0,
//     moneyDeposit:0,
//     expenses: {},
//     income: {},

//     getExpensesMonth: function () {
//         for (let key in appData) {
//             if (appData[key] == appData.expenses) {
//                 for (let i in appData[key]) {
//                     appData.expensesMonth += parseFloat(appData[key][i]);
//                 }
//             }
//         }
//     },
//     getBudget: function () {
//         appData.budgetMonth = +appData.budget - +appData.expensesMonth;
//         appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     },
//     getTargetMonth: function () {
//         if (appData.budgetMonth > 0) {
//             return `Цель будет достигнута за ${Math.ceil(appData.mission / appData.budgetMonth )} месяцев`;
//         } else {
//             return "Цель не будет достигнута";
//         }
//     },
//     asking: function () {

//         let addExp = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
//         "Лобстеры, аренда виллы, зарплата прислуге");
//         while (!isNaN(Number(addExp))){
//             addExp = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
//             "Лобстеры, аренда виллы, зарплата прислуге");
//         };
//         appData.ddExpenses = `[${addExp.toLocaleLowerCase().split(', ')}]`;

//         if(confirm("Есть ли у вас дополнительный заработок?")){
            
//             let itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
//             while (!isNaN(Number(itemIncome))){
//                 itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
//             };
            
//             let cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
//             while (!isNumber(cashIncome)){
//                 cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
//             };
//             appData.income[itemIncome] = cashIncome; 
//         };
//         appData.deposit = confirm("Есть ли у вас депозит в банке?")
//         for (let i = 0; i < 2; i++) {
//             let qustion = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`, );
//             while (!isNaN(Number(qustion))){
//                 qustion = prompt(`Введите обязательную ${i === 0 ? "Первую" : "Вторую"} статью расходов?`);
//             };     
//             do {
//                 appData.expenses[qustion] = parseFloat(prompt(`Во сколько обойдется ${i === 0 ? "Первая" : "Вторая"} статья?`));
//             }
//             while (!isNumber(appData.expenses[qustion]));
//         }
//     },
//     getStatusIncome: function () {
//         if (appData.budgetDay >= 1200) {
//             return ("У вас высокий уровень дохода");
//         } else if (1200 > appData.budgetDay >= 600) {
//             return ("У вас средний уровень дохода");
//         } else if (600 > appData.budgetDay >= 0) {
//             return ("К сожалению у вас уровень дохода ниже среднего");
//         } else if (0 > appData.budgetDay) {
//             return ("Что-то пошло не так");
//         }
//     },
//     getInfoDeposit: function () {
//         if(appData.deposit){
//             do  {
//                 appData.percentDeposit = prompt("Какой годовой процент?", "10");
//             }
//             while (!isNumber(appData.percentDeposit));

//             appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
//             while (!isNumber(appData.moneyDeposit)){
//                 appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
//             };

//         }
//     },
//     calcSaveMoney: function(){
//         return appData.budgetMonth  * appData.period;
//     }
// };

// appData.asking();
// appData.getExpensesMonth();
// appData.getBudget();
// appData.getStatusIncome();
// appData.getInfoDeposit();
// appData.calcSaveMoney();

// console.log(`Расходы за месяц ${appData.expensesMonth}`);
// console.log(`${appData.getTargetMonth()}`);
// console.log(appData.getStatusIncome());

// console.log(appData.percentDeposit, appData.moneyDeposit,appData.calcSaveMoney());

// console.log(`Наша программа включает в себя данные:`);
// for (let key in appData) {
    
//         if (typeof(appData[key]) === 'object') {
//             let popr = "";
//             for (let i in appData[key]) {
//                 popr +=`${i}: ${appData[key][i]}, `;
//             }
//             console.log(`${key}: {${popr.slice(0,length-2)}}`);
//         } else {
//             console.log(`${key}: ${appData[key]}`)
//         }
    
// }

const startButton = document.getElementById('start');

const firstPlus = document.getElementsByTagName('button')[0];
const secondPlus = document.getElementsByTagName('button')[1];

const chetbox = document.querySelector('#deposit-check');
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
const additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];



const budgetDay = document.getElementsByClassName('budget_day-value')[0];
const expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncome = document.getElementsByClassName('additional_income-value')[0];
const additionalExpenses= document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriod = document.getElementsByClassName(' income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];



const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelectorAll('.income-title')[1];
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesTitle = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const dtargetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');

