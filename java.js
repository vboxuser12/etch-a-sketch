let button=document.createElement("button");
let body= document.querySelector("body")
body.appendChild(button);
let maincontainer=document.querySelector("#maincontainer");

let div1=document.createElement("div");
let div2=document.createElement("div")
let div3=document.createElement("div")
let div4=document.createElement("div")
let div5=document.createElement("div")
let div6=document.createElement("div")
let div7=document.createElement("div")
let div8=document.createElement("div")
let div9=document.createElement("div")
let div10=document.createElement("div")
let div11=document.createElement("div")
let div12=document.createElement("div")
let div13=document.createElement("div")
let div14=document.createElement("div")
let div15=document.createElement("div")
let div16=document.createElement("div")



maincontainer.append(div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11,div12,div13,div14,div15,div16);

button.textContent="button"
let pct="%"
function howmanygrid() 
{ let a =(prompt("hpw many grid do you want"))
    div1.remove()
    div2.remove()
    div3.remove()
    div4.remove()
    div5.remove()
    div6.remove()
    div7.remove()
    div8.remove()
    div9.remove()
    div10.remove()
    div11.remove()
    div12.remove()
    div13.remove()
    div14.remove()
    div15.remove()
    div16.remove();
     
   if(a>100)
   {alert("pick smaller number")}
   else{

    for (let i =0; i<a*a; i++)
      { let div =document.createElement("div")
        div.setAttribute("id","choice")
        maincontainer.append(div);
        div.textContent="i"
        div.style.backgroundColor="blue";
        div.style.boxSizing="border-box" 
        div.style.width=100/a+pct
        div.style.height=100/a+pct
         }}
        
        }


button.addEventListener("click", howmanygrid)

console.log(100/10+pct)

    
  
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




