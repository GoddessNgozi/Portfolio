let mobileNavButton = document.getElementById("hambuger-menu")
let navPopup = document.getElementById("mobilePopup")
let closeNavPopup = document.getElementById("close-mobile-nav")

let toggleMenu = false
let closePopupFunction = false

mobileNavButton.addEventListener("click", function() {
    if(toggleMenu === false){
        mobilePopup .style.visibility = "visible";
    }
});

  
closeNavPopup.addEventListener("click", function(){
    if(toggleMenu === false){
        mobilePopup.style.visibility = "hidden"; 
    }
});

let navMenuButton= document.getElementById("mobile-menu")

navMenuButton.addEventListener("click", function(){
    if(toggleMenu=== false){
        mobilePopup.style.visibility = "hidden";
    }
});
