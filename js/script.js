let head=document.querySelector(".head");
let ul=document.getElementsByTagName("ul")[0];

let btn=document.getElementById("btn");


btn.onclick=function(){
    location.reload();
}
function online(){
    head.innerHTML="Online Now";
    head.style.color="green";
   ul.classList.add("hide");
   btn.classList.add("hide");


}

function offline(){
    head.innerHTML="Offline Now";
    head.style.color="black";
    ul.classList.remove("hide");
    btn.classList.remove("hide");
}

window.onload=function(){
    if(window.navigator.onLine){
        online();
    }
    else{
        offline();
    }
}

window.addEventListener("online",function(){
    online();
});


window.addEventListener("offline",function(){
    offline();
});