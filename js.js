window.addEventListener("DOMContentLoaded", function(){
    "use strict";

    function countTimer(deadline){
        let timerHours = document.querySelector("#timer-hours"),
            timerMinutes = document.querySelector("#timer-minutes"),
            timerSeconds = document.querySelector("#timer-seconds");

        function getTimeRemaining(){

            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow)/1000,
                seconds,
                minutes,
                hours; 
                if(timeRemaining >= 0){
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor((timeRemaining / 60)% 60),
                    hours = Math.floor((timeRemaining / 60 / 60));
                }else{
                    seconds = '0';
                    minutes = '0';
                    hours = '0';  
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
                return { hours, minutes, seconds, timeRemaining}
        }
        function udateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
        }
        
        if(getTimeRemaining().timeRemaining > 0){
            setInterval(udateClock, 1000);
        }else{
            udateClock();
        }
          
        
    }

    countTimer("15 march 2021");
    //setInterval(countTimer, 1000, "20 march 2021");

})