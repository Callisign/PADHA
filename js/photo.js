

var elements = document.getElementsByClassName("column");
var i;

function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
}

function two() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
    }
}

function three() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "33.3333%";
    }
}

function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}

function five() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "20%";
    }
}

let PhotoBtn = document.getElementsByClassName("PhotoBtn");
for (let i = 0; i < PhotoBtn.length; i++) {
    PhotoBtn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("activate");
        current[0].className = current[0].className.replace(" activate", "");
        this.className += " activate";
    });
};
