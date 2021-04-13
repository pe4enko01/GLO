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
    const popupContent = document.querySelector(".popup-content");
 



    const stausMessage = document.createElement("div");
    const stausMessageForm = document.createElement("div");
   // stausMessage.textContent = "Тут будет сообщение";
   // stausMessage.style.cssText = "font-size: 2rem";
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        if(form1Name.value.length >= 2 && form1Phone.value.length >=7 && form1Emeil.value.indexOf("@") !== -1){
            form.appendChild(stausMessage);
            stausMessage.textContent = loadMessage;
            const formData =new FormData(form);
            let body = {};
            
            for(let val of formData.entries()){
                body[val[0]] = val[1];
            }
     
            const post = postData(body)
                post
                .then((response)=>{
                    if(response.status !== 200){
                        throw new Error("status network not 200"); 
                    }  
                 stausMessage.textContent = successMasage;
                  })
                  .then(()=>{
                    setTimeout(()=>{
                        stausMessage.textContent = "";
                    },3000);
                  })
                  .catch(()=>{
                    stausMessage.textContent = errorMessage;
                  })
            form1Name.value = "";
            form1Emeil.value = "";
            form1Phone.value = "";
        }
    });
     form3.addEventListener("submit", (event)=>{
        event.preventDefault();

        if(form3Name.value.length >= 2 && form3Phone.value.length >=7  && form3Emeil.value.indexOf("@") !== -1){
            
            popupContent.appendChild(stausMessageForm);
            stausMessageForm.style.color = "white";
            form.appendChild(stausMessage);
            const formData =new FormData(form3);
            stausMessage.textContent = loadMessage;
            stausMessageForm.textContent = loadMessage;
            let body = {};
             for(let val of formData.entries()){
                 body[val[0]] = val[1];
                }
                const post = postData(body)
                post
                .then((response)=>{
                    if(response.status !== 200){
                        throw new Error("status network not 200"); 
                    }  
                 stausMessage.textContent = successMasage;
                 stausMessageForm.textContent = successMasage;
                  })
                  .then(()=>{
                    setTimeout(()=>{
                        stausMessage.textContent = "";
                        stausMessageForm.textContent = "";
                        popup.style.display = "none";
                    },3000);
                  })
                  .catch(()=>{
                    stausMessage.textContent = errorMessage;
                    stausMessageForm.textContent = errorMessage;
                  })
    
            form3Name.value = "";
            form3Emeil.value = "";
            form3Phone.value = "";
            //popup.style.display = "none";
        }
     });

     form2.addEventListener("submit", (event)=>{
        event.preventDefault();
        if(form2Name.value.length >= 2 && form2Phone.value.length >=7  && form2Emeil.value.indexOf("@") !== -1){
            form.appendChild(stausMessage);
            const formData =new FormData(form2);
            stausMessage.textContent = loadMessage;
            let body = {};
             for(let val of formData.entries()){
                 body[val[0]] = val[1];
                }
                const post = postData(body)
                post
                .then((response)=>{
                    if(response.status !== 200){
                        throw new Error("status network not 200"); 
                    }  
                 stausMessage.textContent = successMasage;
                  })
                  .then(()=>{
                    setTimeout(()=>{
                        stausMessage.textContent = "";
                    },3000);
                  })
                  .catch(()=>{
                    stausMessage.textContent = errorMessage;
                  })

            form2Name.value = "";
            form2Emeil.value = "";
            form2Phone.value = "";
            form2Message.value = "";
        }
     });

    const postData = (body)=>{
        return fetch('./server.php',{
            method: 'POST',
            headers:{
                'Content-Type': 'multipart/json'
            },
            body: JSON.stringify(body)

        });
    }
   
}
export default sendForm;