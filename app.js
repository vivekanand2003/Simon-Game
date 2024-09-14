let gemeseq=[];
let userseq=[];
let btns=["yellow","pink","purple","green"];

let level=0;
let started=false;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if (started== false){
        console.log("Game Start");
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelUp(){
    level ++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    btnFlash(randBtn);
}