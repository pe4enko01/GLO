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
        if(form3Name.value !== ""){
            form3Name.value = form3Name.value[0].toUpperCase() + form3Name.value.slice(1).toLowerCase();
        }
        form3Name.value = form3Name.value .replace(/([-])\1{1,}/g, "$1");
        form3Name.value = form3Name.value.replace(/\s+/g, ' ')
        
    })
    form2Name.addEventListener('input', ()=>{
        form2Name.value = form2Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    form2Name.addEventListener('blur', ()=>{
        rep(form2Name)
        form2Name.value = form2Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
        if(form2Name.value !== ""){
            form2Name.value = form2Name.value[0].toUpperCase() + form2Name.value.slice(1).toLowerCase();
        }
        form2Name.value = form2Name.value .replace(/([-])\1{1,}/g, "$1");
        form2Name.value = form2Name.value.replace(/\s+/g, ' ')
        
    })

    form1Name.addEventListener('input', ()=>{
        form1Name.value = form1Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
    })
    form1Name.addEventListener('blur', ()=>{
        rep(form1Name)
        form1Name.value = form1Name.value.replace(/[a-zA-Z0-9,.:"();='/.,;№[{<|>?!@#$~%^&`*_+-\]}]*?$/, '');
        if(form1Name.value !== ""){
            form1Name.value = form1Name.value[0].toUpperCase() + form1Name.value.slice(1).toLowerCase();
        }
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
        //form3Email.type = ""
        form3Email.value = form3Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
    })
    form3Email.addEventListener('blur', ()=>{
        rep(form3Email);
        form3Email.value = form3Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
        form3Email.value = form3Email.value .replace(/([-])\1{1,}/g, "$1");
        form3Email.value = form3Email.value.replace(/\s+/g, '')
        
    })
    form2Email.addEventListener('input', ()=>{
        //form2Email.type = ""
        form2Email.value = form2Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
    })
    form2Email.addEventListener('blur', ()=>{
        rep(form2Email);
        form2Email.value = form2Email.value.replace(/[а-яА-ЯёЁ0-9,:"();=/, ;№[{<|>?#$%^&`+\]}]*?$/, '');
        form2Email.value = form2Email.value .replace(/([-])\1{1,}/g, "$1");
        form2Email.value = form2Email.value.replace(/\s+/g, '')
        
    })

    form1Email.addEventListener('input', ()=>{
        //form1Email.type = ""
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
        if(form3Phone.value.length > 13){
            form3Phone.value = form3Phone.value.slice(0, (form3Phone.value.length-1));
        }
    })
    form3Phone.addEventListener('blur', ()=>{
        rep(form3Phone);
        form3Phone.value = form3Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        form3Phone.value = form3Phone.value .replace(/([-])\1{1,}/g, "$1");
        form3Phone.value = form3Phone.value.replace(/\s+/g, '')
    })
    form2Phone.addEventListener('input', ()=>{
        form2Phone.value = form2Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        if(form2Phone.value.length > 13){
            form2Phone.value = form2Phone.value.slice(0, (form2Phone.value.length-1));
        }
    })
    form2Phone.addEventListener('blur', ()=>{
        rep(form2Phone);
        form2Phone.value = form2Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`\]}]*?$/, '');
        form2Phone.value = form2Phone.value .replace(/([-])\1{1,}/g, "$1");
        form2Phone.value = form2Phone.value.replace(/\s+/g, '')
    })

    form1Phone.addEventListener('input', ()=>{
        form1Phone.value = form1Phone.value.replace(/[а-яА-Яa-zA-ZёЁ,.:";='/.,;)(№[{<| >?!@#$~%^&*_`]*?$/, '');
        if(form1Phone.value.length > 13){
            form1Phone.value = form1Phone.value.slice(0, (form1Phone.value.length-1));
        }
        
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
export default replase;