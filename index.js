
let btn_el = document.getElementById("btn");
let img_el = document.getElementById("img")







btn_el.addEventListener("click", fnc);



function fnc(){
        console.log("you have clicked")
        if(btn_el.textContent.includes('on')){
            img_el.src= "on.jpg"
            btn_el.innerHTML = "turn off"
        }else{
            img_el.src= "off.jpg"
            btn_el.innerHTML = "turn on"


        }
}
