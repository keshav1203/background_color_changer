const bg_color = function (){
    const hex="0123456789ABCDEF";
    let color_code="#"
    for(let i=0; i<6 ; i++){
       color_code += hex[Math.floor(Math.random()*16)]
    }
    return color_code;
};
let colorbg ;
const changecolor = function(){
    if(!colorbg){
        colorbg = setInterval(changer,2000)
    }
    function changer (){document.body.style.backgroundColor=bg_color()}
    
}
const stopcolor = function(){
     clearInterval(colorbg)
     colorbg=null;
}

document.querySelector("#start").addEventListener("click", changecolor);
document.querySelector("#stop").addEventListener("click", stopcolor);