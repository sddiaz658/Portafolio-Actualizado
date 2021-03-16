function contActive(){
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgPink(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("pink");
}

function bgBlue(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("blue");
}

function bgGreen(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("green");
}

function bgOrange(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("orange");
}

function bgPurple(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("purple");
}



AOS.init();