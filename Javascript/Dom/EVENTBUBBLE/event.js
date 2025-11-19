const mainHeading=document.getElementById("title");
mainHeading.textContent="hello java script";
const triggerButton=document.getElementById("btn");
triggerButton.onclick=() =>{
    mainHeading.textContent="you clicked button ";
}