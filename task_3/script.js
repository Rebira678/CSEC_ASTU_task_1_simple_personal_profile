
const togglebtn = document.getElementById("toggle-btn");
const statustext =document.getElementById("status-text");
let isSystemOn=false;
togglebtn.addEventListener("click",()=>{
    isSystemOn=!isSystemOn;
    if (isSystemOn){
        statustext.textContent="ON";
        statustext.classList.add("active");
        document.body.style.backgroundColor="#8675f6ff";
    }else{
        statustext.textContent="OFF";
        statustext.classList.remove("active");
        document.body.style.backgroundColor="#1a1a1aff";
    }
})