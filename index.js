function verifyMenuClicked(element) {
    if(element.checked){
        document.getElementById("header-body").style.left = "0%";
    }else {
        document.getElementById("header-body").style.left = "-120%";
    }
}

function closeMenu() {
    document.getElementById("header-body").style.left = "-120%";
}