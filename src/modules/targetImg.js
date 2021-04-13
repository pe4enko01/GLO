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

export default targetImg;