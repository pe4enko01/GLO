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

export default slider;