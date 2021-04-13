const toogleMenu = ()=>{
    const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    menuItem = menu.querySelectorAll("ul>li>a"),
    activeMenu = document.querySelector('main');

    const handlerMenu = ()=>{
            menu.classList.toggle("active-menu");

    }
    document.addEventListener("click", (e)=>{    
        if(e.target.closest(".menu")){
            handlerMenu();
        }else if(e.target.classList.contains("close-btn")){
            handlerMenu();
        }else if(!e.target.closest(".active-menu")){
            menu.classList.remove("active-menu");
        }
        
    });

    // closeBtn.addEventListener("click", ()=>{
    //     handlerMenu();
    // })

    menuItem.forEach((elem)=>{elem.addEventListener("click",handlerMenu)});
}

export default toogleMenu;