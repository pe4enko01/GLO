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

    //слайдер

    const slider = ()=>{
        const slide = document.querySelectorAll(".portfolio-item"),
        brn = document.querySelectorAll(".portfolio-btn"),
        dots = document.querySelector(".portfolio-dots"),
        slider = document.querySelector(".portfolio-content");
        let interval;
        let curentSlider = 0;
        
        const addDots = ()=>{
            for(let i = 0; i < slide.length; i++){
                if(i === 0){
                    dots.insertAdjacentHTML("beforeend", `<li class="dot dot-active"></li>`);
                }else if (i > 0){
                    dots.insertAdjacentHTML("beforeend", `<li class="dot"></li>`);
                }
            }
        }
        addDots();

        const dot = document.querySelectorAll(".dot");


            const prevSlide = (elem , index,strClass)=>{
                elem[index].classList.remove(strClass);
            }
            const nextSlide = (elem , index, strClass)=>{
                elem[index].classList.add(strClass);
            }
            const autoplaySlide = ()=>{
                
                
                prevSlide(slide, curentSlider, 'portfolio-item-active');
                prevSlide(dot, curentSlider, 'dot-active');
                curentSlider++;
                if(curentSlider>= slide.length){
                    curentSlider = 0
                }
                nextSlide(slide, curentSlider, 'portfolio-item-active');
                nextSlide(dot, curentSlider, 'dot-active');
            };
            
            const starSlide = (time = 5000) =>{
                interval = setInterval(autoplaySlide, time);
            }
            
            const starStop = () =>{
                clearInterval(interval);
            }
            
            slider.addEventListener('click', (e)=>{
                e.preventDefault();
                prevSlide(slide, curentSlider, 'portfolio-item-active');
                prevSlide(dot, curentSlider, 'dot-active');
                
                let target =e.target;

                if(target.matches("#arrow-right")){
                    curentSlider++;
                }else if(target.matches("#arrow-left")){
                    curentSlider--;
                }else if(target.matches(".dot")){
                    dot.forEach((elem, i)=>{
                        if(elem === target){
                            curentSlider = i;
                        }
                    })
                }
                if(curentSlider>= slide.length){
                    curentSlider = 0
                };
                if(curentSlider < 0){
                    curentSlider = (slide.length -1);
                };
                nextSlide(slide, curentSlider, 'portfolio-item-active');
                nextSlide(dot, curentSlider, 'dot-active');
            })

            slider.addEventListener('mouseover',(e)=>{
                if(e.target.matches(".portfolio-btn") || e.target.matches(".dot")){
                    starStop();
                }
            });
            slider.addEventListener('mouseout',(e)=>{
                if(e.target.matches(".portfolio-btn") || e.target.matches(".dot")){
                    starSlide(3000);
                }
            });
            starSlide(3000)

    }
    slider();
})

const targetImg = ()=>{
    const command = document.getElementById("command");
    const img = document.querySelectorAll(".command__photo");
    let imgSrc;
    document.addEventListener('mouseover', (e)=>{
        if(e.target.classList.contains("command__photo")){
            imgSrc = e.target.src;
            e.target.src = e.target.dataset.img;
        }
    });
    command.addEventListener('mouseout', (e)=>{
    
        if(e.target.classList.contains("command__photo")){
            e.target.src = imgSrc; 
        }
    });

}
targetImg();

const replase = ()=>{
    const inputSq = document.querySelectorAll(".calc-item");
    const form3Name = document.getElementById("form3-name");
    const form3Email = document.getElementById("form3-email");
    const form3Phone = document.getElementById("form3-phone");
    const form2Name = document.getElementById("form2-name");
    const form2Email = document.getElementById("form2-email");
    const form2Phone = document.getElementById("form2-phone");
    const form1Name = document.getElementById("form1-name");
    const form1Email = document.getElementById("form1-email");
    const form1Phone = document.getElementById("form1-phone");
    const form2Message = document.getElementById("form2-message");
    inputSq.forEach((item)=>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, '');
        })
    });

    form3Name.addEventListener('input', ()=>{
        form3Name.value = form3Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    form3Name.addEventListener('blur', ()=>{
        rep(form3Name)
        form3Name.value = form3Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
        form3Name.value = form3Name.value[0].toUpperCase() + form3Name.value.slice(1).toLowerCase();
        form3Name.value = form3Name.value .replace(/([-])\1{1,}/g, "$1");
        form3Name.value = form3Name.value.replace(/\s+/g, ' ')
        
    })
    form2Name.addEventListener('input', ()=>{
        form2Name.value = form2Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    form2Name.addEventListener('blur', ()=>{
        rep(form2Name)
        form2Name.value = form2Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
        form2Name.value = form2Name.value[0].toUpperCase() + form2Name.value.slice(1).toLowerCase();
        form2Name.value = form2Name.value .replace(/([-])\1{1,}/g, "$1");
        form2Name.value = form2Name.value.replace(/\s+/g, ' ')
        
    })

    form1Name.addEventListener('input', ()=>{
        form1Name.value = form1Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    form1Name.addEventListener('blur', ()=>{
        rep(form1Name)
        form1Name.value = form1Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
        form1Name.value = form1Name.value[0].toUpperCase() + form1Name.value.slice(1).toLowerCase();
        form1Name.value = form1Name.value .replace(/([-])\1{1,}/g, "$1");
        form1Name.value = form1Name.value.replace(/\s+/g, ' ')
        
    })



    form2Message.addEventListener('input', ()=>{
        form2Message.value = form2Message.value.replace(/[a-zA-Z"()='/№[{<|>@#$~%^&`*_+\]}]*?$/, '');
    })
    form2Message.addEventListener('blur', ()=>{
        rep(form2Message)
        form2Message.value = form2Message.value.replace(/[a-zA-Z"()='/№[{<|>@#$~%^&`*_+\]}]*?$/, '');
        form2Message.value = form2Message.value .replace(/([-])\1{1,}/g, "$1");
        form2Message.value = form2Message.value.replace(/\s+/g, ' ')
        
    })


    form3Email.addEventListener('input', ()=>{
        form3Email.type = ""
        form3Email.value = form3Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
    })
    form3Email.addEventListener('blur', ()=>{
        rep(form3Email);
        form3Email.value = form3Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
        form3Email.value = form3Email.value .replace(/([-])\1{1,}/g, "$1");
        form3Email.value = form3Email.value.replace(/\s+/g, '')
        
    })
    form2Email.addEventListener('input', ()=>{
        form2Email.type = ""
        form2Email.value = form2Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
    })
    form2Email.addEventListener('blur', ()=>{
        rep(form2Email);
        form2Email.value = form2Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
        form2Email.value = form2Email.value .replace(/([-])\1{1,}/g, "$1");
        form2Email.value = form2Email.value.replace(/\s+/g, '')
        
    })

    form1Email.addEventListener('input', ()=>{
        form1Email.type = ""
        form1Email.value = form1Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
    })
    form1Email.addEventListener('blur', ()=>{
        rep(form1Email);
        form1Email.value = form1Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
        form1Email.value = form1Email.value .replace(/([-])\1{1,}/g, "$1");
        form1Email.value = form1Email.value.replace(/\s+/g, '')
        
    })

    
    form3Phone.addEventListener('input', ()=>{
        form3Phone.value = form3Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
    })
    form3Phone.addEventListener('blur', ()=>{
        rep(form3Phone);
        form3Phone.value = form3Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        form3Phone.value = form3Phone.value .replace(/([-])\1{1,}/g, "$1");
        form3Phone.value = form3Phone.value.replace(/\s+/g, '')
    })
    form2Phone.addEventListener('input', ()=>{
        form2Phone.value = form2Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
    })
    form2Phone.addEventListener('blur', ()=>{
        rep(form2Phone);
        form2Phone.value = form2Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        form2Phone.value = form2Phone.value .replace(/([-])\1{1,}/g, "$1");
        form2Phone.value = form2Phone.value.replace(/\s+/g, '')
    })

    form1Phone.addEventListener('input', ()=>{
        form1Phone.value = form1Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
    })
    form1Phone.addEventListener('blur', ()=>{
        rep(form1Phone);
        form1Phone.value = form1Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        form1Phone.value = form1Phone.value .replace(/([-])\1{1,}/g, "$1");
        form1Phone.value = form1Phone.value.replace(/\s+/g, '')
    })
}

function rep(form2Name){
    for(let i = 0; i < form2Name.value.length; i++){
        if(form2Name.value[0].indexOf("-") === 0){
            form2Name.value = form2Name.value.slice(1);
        }
        if(form2Name.value[0].indexOf(" ") === 0){
            form2Name.value = form2Name.value.slice(1);
        }
    }
    for(let i = form2Name.value.length; i > 0 ; i--){
        if(form2Name.value[form2Name.value.length-1].indexOf("-") === 0){
            form2Name.value = form2Name.value.slice(0, form2Name.value.length -1);
        }
        if(form2Name.value[form2Name.value.length-1].indexOf(" ") === 0){
            form2Name.value = form2Name.value.slice(0, form2Name.value.length -1 );
        }
    }
};
replase();



const sendForm = ()=>{
    const errorMessage = "Что-то пошло не так",
    loadMessage = "Загрузка",
    successMasage = "Спасибо, Мы скоро свяжемся!";

    const form = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    const form1Name = document.getElementById("form1-name");
    const form1Emeil = document.getElementById("form1-email");
    const form1Phone = document.getElementById("form1-phone");
    const form2Name = document.getElementById("form2-name");
    const form2Emeil = document.getElementById("form2-email");
    const form2Phone = document.getElementById("form2-phone");
    const form2Message = document.getElementById("form2-message");
    const form3Name = document.getElementById("form3-name");
    const form3Emeil = document.getElementById("form3-email");
    const form3Phone = document.getElementById("form3-phone");
    const popup = document.querySelector(".popup");



    const stausMessage = document.createElement("div");
   // stausMessage.textContent = "Тут будет сообщение";
   // stausMessage.style.cssText = "font-size: 2rem";

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.appendChild(stausMessage);
        stausMessage.textContent = loadMessage;
        const formData =new FormData(form);
        let body = {};
        
        for(let val of formData.entries()){
            body[val[0]] = val[1];
        }
        postData(body, ()=>{
            stausMessage.textContent = successMasage;
        }, (error)=>{
            console.error(error);
            stausMessage.textContent = errorMessage;
        })
        form1Name.value = "";
        form1Emeil.value = "";
        form1Phone.value = "";



    });
     form3.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.appendChild(stausMessage);
        const formData =new FormData(form3);
        stausMessage.textContent = loadMessage;
        let body = {};
         for(let val of formData.entries()){
             body[val[0]] = val[1];
            }
          postData(body,()=>{
             stausMessage.textContent = successMasage;
          }, (error)=>{
             console.error(error);
             stausMessage.textContent = errorMessage;
          })

        form3Name.value = "";
        form3Emeil.value = "";
        form3Phone.value = "";
        popup.style.display = "none";
     });

     form2.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.appendChild(stausMessage);
        const formData =new FormData(form2);
        stausMessage.textContent = loadMessage;
        let body = {};
         for(let val of formData.entries()){
             body[val[0]] = val[1];
            }
          postData(body,()=>{
             stausMessage.textContent = successMasage;
          }, (error)=>{
             console.error(error);
             stausMessage.textContent = errorMessage;
          })
        form2Name.value = "";
        form2Emeil.value = "";
        form2Phone.value = "";
        form2Message.value = "";
     });

    const postData = (body,outputData, error)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                outputData()

            }else{
                error(request.status)
            }
        })
        request.open('POST', "./server.php");
        request.setRequestHeader('Content-Type', 'multipart/json');
        
        request.send(JSON.stringify(body));
    }
   
}
sendForm();