let userpara = 0;
let comppara = 0;

const  containers = document.querySelectorAll(".container");
const msg = document.querySelector("#msg")
const userscore = document.querySelector("#user-score")
const compscore = document.querySelector("#comp-score")
const gamedraw = ()=>{
    console.log("draw the match")
    msg.innerText = "draw the match play again :) "
    msg.style.backgroundColor = "orange"

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you  won")
        userpara++
        userscore.innerText = userpara
      msg.innerText = `you won ! your ${userchoice} beats ${compchoice}`
      msg.style.backgroundColor = "green"
    
    }
    else{
        comppara++;
        compscore.innerText = comppara
        console.log("you  lose")
        msg.innerText = `you lose ! ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
    }
}
const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"]
   const ranopt =  Math.floor(Math.random()*3)
   return options[ranopt];
}
const playgame = (userchoice)=>{
console.log("user choice =", userchoice)

const compchoice = gencompchoice()
console.log("comp choice=", compchoice)

if(userchoice === compchoice ){
    gamedraw()
}
 else{
    let userwin = true;
    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    } else if( userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true;
    }
    else{
        userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice)
 }
}
containers.forEach((container)=>{

    container.addEventListener("click",()=>{
        const userchoice = container.getAttribute("id")
        // console.log("choice was clicked",userchoice)
        playgame(userchoice)
    })
})
