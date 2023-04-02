const clock=document.querySelector("#clock");

function getClock(){
    const date=new Date();
    clock.innerText=date.toLocaleTimeString();
}
getClock();
setInterval(getClock,1000);
