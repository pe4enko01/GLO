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
        udateClock();
        function render(){
            let clearSetInterval = setInterval(function(){
                let timer = getTimeRemaining();
                if(timer.timeRemaining > 0){
                    timerHours.textContent = timer.hours;
                    timerMinutes.textContent = timer.minutes;
                    timerSeconds.textContent = timer.seconds;
                }else{
                    udateClock();
                    clearInterval(clearSetInterval);
                }
            }, 1000);
        }
        render();   
    }
    countTimer("20 march 2021");

    const toggleMenu = ()=>{
        const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItem = menu.querySelector("ul");

        const handlerMenu = ()=>{
                menu.classList.toggle("active-menu");

        }
        btnMenu.addEventListener("click", ()=>{
            handlerMenu();
        })

        menu.addEventListener("click",(event)=>{
            let closeBtnUp = event.target.closest(".menu");
            if(event.target.tagName === 'A' || event.target.tagName === 'LI' || event.target.classList.contains("close-btn")){
                handlerMenu();
            }
        })
    }
    toggleMenu();

    //popup

    const togglePopup = ()=>{
        const popup = document.querySelector(".popup"),
        popupContent = document.querySelector(".popup-content"),
        popupBtn = document.querySelectorAll(".popup-btn"),
        popupClose = document.querySelector(".popup-close ");

        popupBtn.forEach((elem)=>{
            elem.addEventListener("click", () => {
                if(document.body.scrollWidth > 768){
                popup.style.display = "block";
                let start = 0; // запомнить время начала
                let timer = setInterval(function() {

                let timePassed =  start;
        
                if (timePassed >= (document.body.scrollWidth/2 - 185)) {
                 clearInterval(timer); 
                return;
                }
                draw(timePassed);
                start += 3;
                }, 1);
            }else{
                popup.style.display = "block";
            }

            });
        });

        function draw(timePassed) {
            popupContent.style.left = timePassed  + 'px';
        }
        popup.addEventListener("click",(event)=>{
            let target = event.target;
            if(target.classList.contains("popup-close")){
                popup.style.display = "none";
                popupContent.style.left = "";
            }else{

                target = target.closest(".popup-content");
                if(!target){
                    popup.style.display = "none";
                    popupContent.style.left = "";
                }
            }

        })
        
    }
    togglePopup();


    //табы
    const tabs = () => {
        const tabHeader = document.querySelector(".service-header"),
            tab = tabHeader.querySelectorAll(".service-header-tab"),
            tabContent = document.querySelectorAll(".service-tab");

            const toggleTabContent = (index)=>{
                for(let i = 0; i < tabContent.length; i++){
                    if(index === i){
                        tab[i].classList.add("active");
                        tabContent[i].classList.remove('d-none');
                    }else{
                        tabContent[i].classList.add('d-none');
                        tab[i].classList.remove("active");
                    }
                }
            }
            tabHeader.addEventListener("click",(event)=>{
            let target = event.target;
            target = target.closest(".service-header-tab");
            if(target.classList.contains("service-header-tab")){
                tab.forEach((item, i)=>{
                    if(item === target){
                        toggleTabContent(i);
                    }
                })
                
            }

        })
        

    };
    tabs();
})
