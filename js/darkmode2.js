function changemode(btn){
    if(btn.src.includes("light")){
        document.body.style.setProperty("--mainbgcolor", "#ffffff");
        document.body.style.setProperty("--maintextcolor", "#000000");
        btn.src="img/toggledark.png";
       

        document.getElementById("search2").src = "img/searchdark.png";
        document.getElementById("user2").src = "img/userdark.png";
        document.getElementById("cart2").src = "img/cartdark.png";

    }
    else{
        document.body.style.setProperty("--mainbgcolor", "#000000");
        document.body.style.setProperty("--maintextcolor", "#ffffff");
        btn.src="img/togglelight.png";
   

        document.getElementById("search2").src = "img/searchlight.png";
        document.getElementById("user2").src = "img/userlight.png";
        document.getElementById("cart2").src = "img/cartlight.png";
    }
    

}