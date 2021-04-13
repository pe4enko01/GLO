const togglePopup = ()=>{
    const popup = document.querySelector(".popup"),
    popupContent = document.querySelector(".popup-content"),
    popupBtn = document.querySelectorAll(".popup-btn"),
    popupClose = document.querySelector(".popup-close ");

    popupBtn.forEach((elem)=>{
        elem.addEventListener("click", () => {
            if(document.body.scrollWidth > 768){
            popupContent.style.left=0
            popup.style.display = "block";
            let start = 0; // запомнить время начала
            let timer = setInterval(function() {

            let timePassed =  start;
    
            if (timePassed >= (document.body.scrollWidth/2 - 185)) {
             clearInterval(timer); 
            return;
            }
            draw(timePassed);
            start += 10;
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
export default togglePopup;