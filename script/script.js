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

function AppData(){
        this.budget = 0;
        this.deposit =  true;
        this.ddExpenses = [];
        this.addIncome = [];
        this.budgetDay =  0;
        this.budgetMonth =  0;
        this.expensesMonth =  0;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.expenses = {};
        this.income =  {};
        this.toggle =  true;     
}
    AppData.prototype.blockInputs = function(){
        salaryAmount.disabled = true; 
        incomeTitle.disabled = true; 
        incomeAmount.disabled = true; 
        periodSelect.disabled = true; 
        if(document.querySelectorAll('.income-amount').length === 2 ){
            document.querySelectorAll('.income-amount')[1].disabled = true;
            document.querySelectorAll('.income-title')[2].disabled = true;
        };
        if(document.querySelectorAll('.income-amount').length === 3 ){
            document.querySelectorAll('.income-amount')[1].disabled = true;
            document.querySelectorAll('.income-title')[2].disabled = true;
            document.querySelectorAll('.income-amount')[2].disabled = true;
            document.querySelectorAll('.income-title')[3].disabled = true;
        };
        additionalIncomeItem1[0].disabled = true; 
        additionalIncomeItem1[1].disabled = true; 
        expensesTitle.disabled = true; 
        if(document.querySelectorAll('.expenses-amount').length === 2 ){
            document.querySelectorAll('.expenses-amount')[1].disabled = true;
            document.querySelectorAll('.expenses-title')[2].disabled = true; 
        }
        if(document.querySelectorAll('.expenses-amount').length ===3 ){
            document.querySelectorAll('.expenses-amount')[1].disabled = true;
            document.querySelectorAll('.expenses-title')[2].disabled = true; 
            document.querySelectorAll('.expenses-amount')[2].disabled = true;
            document.querySelectorAll('.expenses-title')[3].disabled = true; 
        };
        secondPlus.disabled = true; 
        firstPlus.disabled = true; 
        expensesAmount.disabled = true; 
        additionalExpensesTitle.disabled = true; 
        dtargetAmount.disabled = true; 
    };
    AppData.prototype.changeButton = function(){
    if(this.toggle === true ){
        startButton.innerHTML = "Сброс";
        this.toggle = !this.toggle;
    }
    
    };
    AppData.prototype.checkStatrButton = function(){
            if(salaryAmount.value === ""){
                startButton.disabled = true; 
            }else{
                startButton.disabled = false; 
            }   
            salaryAmount.addEventListener("input",  function(){
                if(salaryAmount.value === ""){
                    startButton.disabled = true; 
                }else{
                    startButton.disabled = false; 
                }
            });
    };
    AppData.prototype.showResult = function(){

        budgetMonthValue.value = this.budget;
        budgetDayValue.value = Math.ceil(this.budget/30);
        expensesMonthValue.value =  this.expensesMonth;
        additionalExpenses.value =  this.ddExpenses.join(', ');
        additionalIncome.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSaveMoney();
        periodSelect.addEventListener("input",  function(){
            incomePeriodValue.value = Number(this.calcSaveMoney());
        });

    };
    AppData.prototype.getAddExpenses = function(){
        let addExpenses = additionalExpensesTitle.value.split(",");
        for(let i = 0; i < addExpenses.length; i++){
            addExpenses[i] = addExpenses[i].trim();
            if(addExpenses[i] !== ""){
                this.ddExpenses.push(addExpenses[i]); 
            }
        };
    };
    AppData.prototype.getAddIncome = function(){
        for(let i = 0; i < additionalIncomeItem1.length; i++){
            let itemValue = additionalIncomeItem1[i].value.trim();
           if (itemValue !== ""){
            this.addIncome.push(itemValue);
             };
        }   
    };
    AppData.prototype.addExpensesdBlock = function(){
        let cloneExpendedItem = expendedItem[0].cloneNode(true);
        expendedItem[0].parentNode.insertBefore(cloneExpendedItem, secondPlus);
        expendedItem = document.querySelectorAll(".expenses-items");
        if(expendedItem.length === 3){
            secondPlus.style.display = "none";
        }
    };
    AppData.prototype.getexpenses = function(){
        for(let i = 0; i < expendedItem.length; i++){
            let itemExpenses = expendedItem[i].querySelector(".expenses-title").value;
            let cachExpenses = expendedItem[i].querySelector(".expenses-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                this.expenses[itemExpenses] = cachExpenses;
            };
        };
    };
    AppData.prototype.addIncomeBlock = function(){
        let cloneExpendedItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneExpendedItem, firstPlus);
        incomeItem = document.querySelectorAll(".income-items");
        if(incomeItem.length === 3){
            firstPlus.style.display = "none";
        }
    };
    
    AppData.prototype.getIncome = function(){
        for(let i = 0; i < incomeItem.length; i++){
            let itemExpenses = incomeItem[i].querySelector(".income-title").value;
            let cachExpenses = incomeItem[i].querySelector(".income-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                this.addIncome[itemExpenses] = cachExpenses;
                }
            }   
    };
    AppData.prototype.getExpensesMonth = function () {
        for (let key in this) {
            if (this[key] === this.expenses) {
                for (let i in this[key]) {
                    this.expensesMonth += parseFloat(this[key][i]);
                }
            }
        }
    };
    AppData.prototype.getMonthBubgetPlusIncome =  function () {
        for (let key in this) {
            if (this[key] === this.addIncome) {
                for (let i in this[key]) {
                    this.budget += +parseFloat(this[key][i]);
                }
            }
        }
    };
    AppData.prototype.getBudget = function () {
        this.budgetMonth = +this.budget - +this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };
    AppData.prototype.getTargetMonth = function () {     
        return Math.ceil(dtargetAmount.value / this.budget );
        
    };
    AppData.prototype.calcSaveMoney = function(){
        return this.budget  * periodSelect.value;
    };
    AppData.prototype.start = function () {
        if (this.toggle === true){
            this.budget = +salaryAmount.value;
            this.changeButton();
            this.getexpenses();
            this.getIncome();
            this.getExpensesMonth();
            this.getMonthBubgetPlusIncome();
            this.getAddExpenses();
            this.getAddIncome();
            this.showResult();
            this.blockInputs();
        }else{
            console.log("🚀 ~ file: script.js ~ line 44 ~ AppData ~ start", "no")
            this.resetButton();
            this.checkStatrButton();
        }
    };
    
    AppData.prototype.resetButton  = function(){
        periodSelect.disabled = false;
        document.querySelector('.period-amount').innerHTML = 1;
        salaryAmount.disabled = false; 
        incomeTitle.disabled = false; 
        incomeAmount.disabled = false; 
        secondPlus.disabled = false; 
        firstPlus.disabled = false;
        if(document.querySelectorAll('.income-amount').length === 2 ){
            incomeItem[1].remove();
        };
        if(document.querySelectorAll('.income-amount').length === 3 ){
            incomeItem[1].remove();
            incomeItem[2].remove();
            firstPlus.style.display = "block";
        };
        additionalIncomeItem1[0].disabled = false; 
        additionalIncomeItem1[1].disabled = false; 
        expensesTitle.disabled = false; 
        if(document.querySelectorAll('.expenses-amount').length === 2 ){
            expendedItem[1].remove();
        };
        if(document.querySelectorAll('.expenses-amount').length ===3 ){
            expendedItem[1].remove();
            expendedItem[2].remove();
            secondPlus.style.display = "block";
        };
        expensesAmount.disabled = false; 
        additionalExpensesTitle.disabled = false; 
        dtargetAmount.disabled = false; 
        
        salaryAmount.value = ""; 
        incomeTitle.value = ""; 
        incomeAmount.value = ""; 
        if(document.querySelectorAll('.income-amount').length === 2 ){
            document.querySelectorAll('.income-amount')[1].value = "";
            document.querySelectorAll('.income-title')[2].value = "";
        };
        if(document.querySelectorAll('.income-amount').length === 3 ){
            document.querySelectorAll('.income-amount')[1].value = "";
            document.querySelectorAll('.income-title')[2].value = "";
            document.querySelectorAll('.income-amount')[2].value = "";
            document.querySelectorAll('.income-title')[3].value = "";
        };
        additionalIncomeItem1[0].value = ""; 
        additionalIncomeItem1[1].value = ""; 
        expensesTitle.value = ""; 
        if(document.querySelectorAll('.expenses-amount').length === 2 ){
            document.querySelectorAll('.expenses-amount')[1].value = "";
            document.querySelectorAll('.expenses-title')[2].value = ""; 
        }
        if(document.querySelectorAll('.expenses-amount').length ===3 ){
            document.querySelectorAll('.expenses-amount')[1].value = "";
            document.querySelectorAll('.expenses-title')[2].value = ""; 
            document.querySelectorAll('.expenses-amount')[2].value = "";
            document.querySelectorAll('.expenses-title')[3].value = ""; 
        };
        periodSelect.value = 1;
        budgetMonthValue.value = "0";
        budgetDayValue.value = "0";
        additionalIncome.value = "Наименования";
        additionalExpenses.value = "Наименования";
        incomePeriodValue.value = "0";
        targetMonthValue.value = "Срок";
        expensesMonthValue.value = "0"; 
        expensesAmount.value = ""; 
        additionalExpensesTitle.value = ""; 
        dtargetAmount.value = ""; 
        startButton.innerHTML = "Рассчитать";
        this.budget= 0;
        this.deposit= true;
        this.ddExpenses=[];
        this.addIncome = [];
        this.budgetDay= 0;
        this.expensesMonth= 0;
        this.percentDeposit=0;
        this.moneyDeposit=0;
        this.expenses= {};
        this.income= {};
        this.toggle= !this.toggle;
        
    };
    AppData.prototype.eventsListeners = function(){
        const _this = this;
        this.checkStatrButton();
        startButton.addEventListener("click", this.start.bind(_this));
        secondPlus.addEventListener("click", this.addExpensesdBlock.bind(_this));
        firstPlus.addEventListener("click",  this.addIncomeBlock.bind(_this));
        periodSelect.addEventListener("input",  function(){ 
        document.querySelector('.period-amount').innerHTML = periodSelect.value;
        });
    };
    
    let appData = new AppData();
    appData.eventsListeners();
    