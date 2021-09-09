const buttons = document.querySelectorAll("button");


let textToDisplay="";
buttons.forEach(btn=>{
    btn.addEventListener("click", e =>{
        
        if (btn.innerHTML ==="=")
        {
            return onTotal();
        }
        if (btn.innerHTML === "AC")
        {
            return resetDisplay();
        }
        if (btn.innerHTML ==="C"){
            textToDisplay=textToDisplay.slice(0,-1);
            return display(textToDisplay);
                }
        textToDisplay +=btn.innerText;
        display(textToDisplay);
        
    });
});
//Display on screen
const display = toDisplay => {
const elm = document.getElementById ("result");
elm.innerText = toDisplay ||0.0;
};

//do total
const onTotal = () => {
    const total = eval (textToDisplay) +randomVal();
    textToDisplay="";
    display(total);
};

//Reset display
const resetDisplay=() =>{
    display ("0.00");
    textToDisplay="";
};

//Generate random Number
const randomVal = () => {
    const random = Math.floor(Math.random()*10);
    return random < 5 ? random:0;
}