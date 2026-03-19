
    let count=0;
    const buttons=document.querySelectorAll(".atc");
    console.log(buttons);
    
    const cartCount=document.getElementById("raod");
    console.log(cartCount);
    

    buttons.forEach(button =>{button.addEventListener("click",()=>{
        
        count++;
        cartCount.innerHTML = count;});
    });
