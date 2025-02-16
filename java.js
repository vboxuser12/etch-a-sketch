let button=document.createElement("button");
let body= document.querySelector("body")
body.appendChild(button);
let maincontainer=document.querySelector("#maincontainer");

for(i=1;i<=16;i++)
{let div=document.createElement("div")
div.setAttribute("id","regular");
maincontainer.appendChild(div);
}

function remove(){
while(maincontainer.firstChild)
{maincontainer.firstChild.remove()}
}




button.textContent="button"
let pct="%"
function howmanygrid() 
{ let a =(prompt("hpw many grid do you want"))
    
    
    remove()
   if(a>100)
   {alert("pick smaller number")}
   else{

    for (let i =0; i<a*a; i++)
      { let div =document.createElement("div")
        div.setAttribute("id","choice")
        maincontainer.append(div);
        div.style.backgroundColor="blue";
        div.style.boxSizing="border-box" 
        div.style.width=100/a+pct
        div.style.height=100/a+pct
         }}
        
        }


button.addEventListener("click", howmanygrid)

    
  
  maincontainer.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.backgroundColor = "orange";
  
     
    },
    maincontainer.addEventListener("mouseout",(event)=>{
        event.target.style.backgroundColor="white"
    })
  );




