const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const restart = document.querySelector("#restart")

const timer=document.querySelector("#timer")

let minutes=25
let seconds=0
let timerId;

start.addEventListener('click',()=>{
timerId=setInterval(()=>{

if(seconds===0){
    seconds=59
    minutes--

}
else{
    seconds--
}
    timer.textContent= `${minutes}:${seconds}`
},1000)
})


stop.addEventListener('click',()=>{
clearInterval(timerId)
})

restart.addEventListener('click',()=>{
   minutes=25
   seconds=0
   timer.innerHTML=`${minutes}:0${seconds}` 
})