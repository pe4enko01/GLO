window.addEventListener("DOMContentLoaded", function(){
    "use strict";
    let info = document.getElementById("info");

    let dateNow = new Date();
    let year = dateNow.getFullYear();
    let day = dateNow.getDay();
    let hours = dateNow.getHours();
    let futureYear = new Date((year+1),0,0);
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let dayHours;
    let dayOfWeek;
    let time;
    let amPm;
    let numOfDaysToNewYear;

    let daysToNewYear = Math.floor(((futureYear.getTime() -dateNow.getTime()) / 1000 / 60 / 60/ 24));
    console.log("🚀 ~ file: js.js ~ line 18 ~ window.addEventListener ~ lol", daysToNewYear);

    if(String(daysToNewYear).substr(-1) === '1'){
        numOfDaysToNewYear = "день";
    }else if(String(daysToNewYear).substr(-1) ==String(daysToNewYear).substr(-1) ==String(daysToNewYear).substr(-1) === '4' ){
        numOfDaysToNewYear = "дня";
    }
    else if(String(daysToNewYear).substr(-1) === '5' || String(daysToNewYear).substr(-1) === '6' || String(daysToNewYear).substr(-1) === '7' || String(daysToNewYear).substr(-1)=== '8' || String(daysToNewYear).substr(-1) === '9' || String(daysToNewYear).substr(-1) === '0' ){
        numOfDaysToNewYear = "дней";
    }



    if(6 < hours && hours < 12){
        dayHours = "Доброе утро";
    }else if(12 < hours && hours < 18){
        dayHours = "Добрый день";
    }else if(18 < hours && hours < 24){
        dayHours = "Добрый вечер";
    }else if(0 < hours && hours < 6){
        dayHours = "Доброй ночи";
    };


    if(hours>12){
        hours = hours -12;
        amPm = "PM";
    }else if(hours<12){
        amPm = "AM";
    };
    if(String(seconds).length === 1){
        seconds = `0${seconds}`;
    };
    if(String(minutes).length === 1){
        minutes = `0${minutes}`;
    };
    if(String(hours).length === 1){
        hours = `0${hours}`;
    };
    time = `${hours}:${minutes}:${seconds} ${amPm}`;




    if(day === 1){
        dayOfWeek = "Понедельник";
    }else if(day === 2){
        dayOfWeek = "Вторник";
    }else if(day === 3){
        dayOfWeek = "Стреда";
    }
    else if(day === 4){
        dayOfWeek = "Четверг";
    }
    else if(day === 5){
        dayOfWeek = "Пятница";
    }
    else if(day === 6){
        dayOfWeek = "Суббота";
    }else if(day === 0){
        dayOfWeek = "Воскресенье";
    };

    
    info.innerText = `${dayHours}
    Сегодня: ${dayOfWeek}
    Текущее время:${time}
    До нового года осталось ${daysToNewYear} ${numOfDaysToNewYear}`;
    

})