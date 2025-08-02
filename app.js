let gameSeq=[];
let userSeq=[];

let h2=document.querySelector("h2");
let btns=["yellow","red","green","voilet"];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
          levelUp();
    }
});

function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function() {
         btn.classList.remove("flash");
     },200) ;    
}
function userFlash(btn){
     btn.classList.add("userflash");
     setTimeout(function() {
         btn.classList.remove("userflash");
     },200) ;    
}

function levelUp(){
    userSeq=[];
       level++;
       h2.innerText=`level :${level}`;
       let colorIdx=Math.floor(Math.random()*3);
       let randColor=btns[colorIdx];
       let randBtn=document.querySelector(`.${randColor}`);
       gameSeq.push(randColor);
       console.log(gameSeq);

       gameFlash(randBtn);

}

function checkAns(idx){
    if( userSeq[idx]===gameSeq[idx]){
       if(userSeq.length===gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`GAME OVER! <b>Your Score is ${level}</b> <br>Press any key to start`;
         let body= document.querySelector("body");
            body.style.backgroundColor="red";
        setTimeout(function(){
           let body= document.querySelector("body");
            body.style.backgroundColor="white";
        },150)
        reset();
    }
}
 function btnPress(){
    let btn=this;
    // console.log(btn);
        userFlash(btn);
        userColor=btn.getAttribute("id");
        userSeq.push(userColor)
      checkAns(userSeq.length-1);

 }
  
 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnPress);
 }


 function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
 }