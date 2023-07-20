const tensDigMin = document.getElementById("tens-Min");
const onesDigMin = document.getElementById("ones-Min");
const tensDigSec = document.getElementById("tens-Sec");
const onesDigSec = document.getElementById("ones-Sec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
 const inputElement = document.querySelectorAll("input");
 for(let i = 0; i < inputElement.length; i++){
    inputElement[i].addEventListener("input",()=>{
        if(tensDigMin.value.length > 1){
            let value = tensDigMin.value;
            tensDigMin.value = tensDigMin.value[0];
            onesDigMin.value = value[1];
            onesDigMin.focus();
        }
       else if(onesDigMin.value.length > 1){
            let value = onesDigMin.value;
            onesDigMin.value = onesDigMin.value[0];
            tensDigSec.value = value[1];
            tensDigSec.focus();
        }
        else if(tensDigSec.value.length > 1){
            let value = tensDigSec.value;
            tensDigSec.value = tensDigSec.value[0];
            onesDigSec.value = value[1];
            onesDigSec.focus();
        }
        else if(onesDigSec.value.length > 1){
            let value = onesDigSec.value;
            onesDigSec.value = onesDigSec.value[0];
        }
         
    })

    // inputElement[i].addEventListener("keypress",(event)=>{
    //     if(event.key === "Backspace"){

    //     }
    // })
 }
 let countdown = null;
startBtn.addEventListener("click",()=>{

    inputElement.forEach((ele) =>{
        ele.classList.remove("red");
    })
   countdown =  setInterval(()=>{
    timer();
   },1000);
})

let timer = () =>{
    if(tensDigMin.value == 0 && onesDigMin.value == 0 && tensDigSec.value == 0 && onesDigSec.value == 0){
        tensDigMin.value = "";
        onesDigMin.value = "";
        tensDigSec.value = "";
        onesDigSec.value = "";
        clearInterval(countdown);
    }
  else if(onesDigSec.value != 0){
    onesDigSec.value--;
   }
   else if(tensDigSec.value != 0 && onesDigSec.value == 0){
     tensDigSec.value--;
     onesDigSec.value = 9;
   }
    else if (onesDigMin.value != 0 && tensDigSec.value == 0){
        onesDigMin.value--;
        tensDigSec.value=5;
        onesDigSec.value = 9;
    }
    else if (tensDigMin.value != 0 && onesDigMin.value == 0){
        tensDigMin.value--;
        onesDigMin.value=9;
        tensDigSec.value=5;
        onesDigSec.value = 9;
    }
}
stopBtn.addEventListener("click",()=>{
    inputElement.forEach((ele) =>{
        ele.classList.add("red");
    })
    clearInterval(countdown);
})
resetBtn.addEventListener("click",()=>{
    inputElement.forEach((ele) =>{
        ele.classList.remove("red");
    })
        tensDigMin.value = "";
        onesDigMin.value = "";
        tensDigSec.value = "";
        onesDigSec.value = "";
})