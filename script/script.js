"use strict";
const startButton = document.getElementById('start');
const firstPlus = document.getElementsByTagName('button')[0];
const secondPlus = document.getElementsByTagName('button')[1];
const chetbox = document.querySelector('#deposit-check');
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncome = document.getElementsByClassName('additional_income-value')[0];
const additionalExpenses= document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriod = document.getElementsByClassName(' income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelectorAll('.income-title')[1];
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
const expensesAmount = document.querySelector('.expenses-amount');
let expendedItem = document.querySelectorAll(".expenses-items");
const additionalExpensesTitle = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const dtargetAmount = document.querySelector('.target-amount');
const  periodSelect = document.querySelector('.period-select');
const  incomePeriodValue = document.querySelector('.income_period-value');
let incomeItem = document.querySelectorAll(".income-items");

class AppData {
    constructor(){
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
    };
    blockInputs(){
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
    changeButton(){
    if(this.toggle === true ){
        startButton.innerHTML = "Сброс";
        this.toggle = !this.toggle;
    }
    };
    checkStatrButton(){
            if(salaryAmount.value === ""){
                startButton.disabled = true; 
            }else{
                startButton.disabled = false; 
            }   
            salaryAmount.addEventListener("input", ()=>{
                if(salaryAmount.value === ""){
                    startButton.disabled = true; 
                }else{
                    startButton.disabled = false; 
                }
            });
    };
    showResult(){
        budgetMonthValue.value = this.budget;
        budgetDayValue.value = Math.ceil(this.budget/30);
        expensesMonthValue.value =  this.expensesMonth;
        additionalExpenses.value =  this.ddExpenses.join(', ');
        additionalIncome.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSaveMoney();
        periodSelect.addEventListener("input", ()=>{
            incomePeriodValue.value = Number(this.calcSaveMoney());
        });

    };
    getAddExpenses(){
        const addExpenses = additionalExpensesTitle.value.split(",");
        for(let i = 0; i < addExpenses.length; i++){
            addExpenses[i] = addExpenses[i].trim();
            if(addExpenses[i] !== ""){
                this.ddExpenses.push(addExpenses[i]); 
            }
        };
    };
    getAddIncome(){
        for(let i = 0; i < additionalIncomeItem1.length; i++){
            const itemValue = additionalIncomeItem1[i].value.trim();
           if (itemValue !== ""){
            this.addIncome.push(itemValue);
             };
        }   
    };
    addExpensesdBlock(){
        const cloneExpendedItem = expendedItem[0].cloneNode(true);
        expendedItem[0].parentNode.insertBefore(cloneExpendedItem, secondPlus);
        expendedItem = document.querySelectorAll(".expenses-items");
        if(expendedItem.length === 3){
            secondPlus.style.display = "none";
        }
    };
    getexpenses(){
        for(let i = 0; i < expendedItem.length; i++){
            const itemExpenses = expendedItem[i].querySelector(".expenses-title").value;
            const cachExpenses = expendedItem[i].querySelector(".expenses-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                this.expenses[itemExpenses] = cachExpenses;
            };
        };
    };
    addIncomeBlock(){
        const cloneExpendedItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneExpendedItem, firstPlus);
        incomeItem = document.querySelectorAll(".income-items");
        if(incomeItem.length === 3){
            firstPlus.style.display = "none";
        }
    };
    getIncome(){
        for(let i = 0; i < incomeItem.length; i++){
            const itemExpenses = incomeItem[i].querySelector(".income-title").value;
            const cachExpenses = incomeItem[i].querySelector(".income-amount").value;
            if(itemExpenses !== "" &&  cachExpenses!== ""){
                this.addIncome[itemExpenses] = cachExpenses;
                }
            }   
    };
    getExpensesMonth() {
        for (let key in this) {
            if (this[key] === this.expenses) {
                for (let i in this[key]) {
                    this.expensesMonth += parseFloat(this[key][i]);
                }
            }
        }
    };
    getMonthBubgetPlusIncome() {
        for (let key in this) {
            if (this[key] === this.addIncome) {
                for (let i in this[key]) {
                    this.budget += +parseFloat(this[key][i]);
                }
            }
        }
    };
    getBudget() {
        this.budgetMonth = +this.budget - +this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    };
    getTargetMonth() {     
        return Math.ceil(dtargetAmount.value / this.budget );
        
    };
    calcSaveMoney (){
        return this.budget  * periodSelect.value;
    };
    start() {
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
    resetButton(){
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
    eventsListeners(){
        const _this = this;
        this.checkStatrButton();
        startButton.addEventListener("click", this.start.bind(_this));
        secondPlus.addEventListener("click", this.addExpensesdBlock.bind(_this));
        firstPlus.addEventListener("click",  this.addIncomeBlock.bind(_this));
        periodSelect.addEventListener("input",()=>{ 
        document.querySelector('.period-amount').innerHTML = periodSelect.value;
        });
    };
}
    
    
    const appData = new AppData();
    appData.eventsListeners();
    