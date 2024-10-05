let buttons = document.querySelectorAll("#button");

let body = document.querySelector("body");

const home = document.querySelector("#homes")
home.addEventListener("click",(events)=>{
       body.style.backgroundColor ="bisque";
})

buttons.forEach(function(button){
    // console.log(buttons);
    button.addEventListener("click",function (event) {
        // console.log(event);
        console.log(event.target)
      if(event.target.classList.contains("grey")){
       body.style.backgroundColor = "grey";
     }
     else if(event.target.classList.contains("white")){
      body.style.backgroundColor = "white";
      body.style.color = "black"
     }
     else if(event.target.classList.contains("blue")){
       body.style.backgroundColor = "blue";
       body.style.color = "white";
     }else if(event.target.classList.contains("yellow")){
        body.style.backgroundColor = "yellow"
     }
    })
})