

let body = document.querySelector("body");
let name = document.querySelectorAll(".style-switcher");
let img = document.querySelectorAll(".colors");
name.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("valid");
  });
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("valid"))

    {
        document.querySelector(".style-switcher").classList.remove("valid");
    }
})


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
   alternateStyles.forEach((style) => {
    if(color === style.getattribute("title"))
    {
        style.removeAttribute("disabled");
    }
    else
    {
        style.setAttribute("disabled","true");
    }
   })   
}



// const dayNight =document.querySelector(".day-night");
// dayNight.addEventListener("click",() =>{
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.contains("dark");
    
// })
// window.addEventListener("load", () =>{
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })