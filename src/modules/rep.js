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
}

export default rep;