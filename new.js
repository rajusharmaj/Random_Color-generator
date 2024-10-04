
const mainButton= document.querySelector("button");
const currentColor =document.querySelector(".currentColor");
// console.log(currentColor);
const body =document.body;

function randomColorGenerator(){

     const red = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
     const randomColor = `rgb(${red}, ${green}, ${blue})`;
     return randomColor;
    }    

    mainButton.addEventListener("click",()=>{
        const randomColor = randomColorGenerator();
        // console.log(randomColor);
        body.style.backgroundColor =randomColor;
        currentColor.textContent =randomColor;
    })
