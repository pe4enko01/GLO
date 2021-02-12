"use strict";

function tryToGues() {
    let randomNumder = Math.floor(1 + Math.random() * 100);
    function rec(){
        let firstQustion = prompt("Угадай число от 1 до 100");

        if(isNaN(parseFloat(+firstQustion))){
            alert("Введи число!");
            rec();
        }
        else if(+firstQustion > randomNumder){
            alert("Загаданное число меньше");
            rec();
        }
        else if(firstQustion === null ) {
            alert("Игра окончена");
        }else if(+firstQustion < randomNumder) {
            alert("Загаданное число больше");
            rec();
        }else if(+firstQustion === randomNumder) {
            alert("Поздравляю, Вы угадали!!!");
        }
        
    }
    rec();
    
}

tryToGues();