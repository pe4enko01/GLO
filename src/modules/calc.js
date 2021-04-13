const calc = (price = 100)=>{
    let calcType = document.querySelector(".calc-type"),
    calcBlock = document.querySelector(".calc-block"),
    calcSquare = document.querySelector(".calc-square"),
    calcDay = document.querySelector(".calc-day"),
    calcCount = document.querySelector(".calc-count"),
    totalValue = document.getElementById("total");
    
    
    const countSum = ()=>{
        let total = 0;
        let typeValue = calcType.options[calcType.selectedIndex].value;
        let square = +calcSquare.value;
        let countValue = 1;
        let dayValue = 1;
        
        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) /10;
        }
       // console.log("🚀 ~ file: js.js ~ line 359 ~ calc ~ calcType", countValue);
        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        }else if( calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        }
        if(typeValue && square){
            total =Math.floor(price * typeValue * square * countValue * dayValue);
        }

        totalValue.textContent = total;

    }
    calcBlock.addEventListener('change', (event)=>{
        let typeValue = calcType.options[calcType.selectedIndex].value;  
        const target = event.target;
        if(typeValue==0){
            calcSquare.value = "";
            calcDay.value = "";
            calcCount.value = "";
            }
        if(target === calcType || target === calcSquare || 
            target === calcDay || target === calcCount){
                countSum();}
})
}

export default calc;