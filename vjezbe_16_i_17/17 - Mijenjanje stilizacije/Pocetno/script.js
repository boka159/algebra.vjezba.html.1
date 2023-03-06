// 1. dio zadatka
var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

// 2. dio zadatka
var info = document.querySelector(".info");
info.classList.add("hide");

// 3. dio zadatka
var body = document.querySelector("body");
sviStilovi = window.getComputedStyle(body, null);
var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
console.log(stilMarginLeft);

// 4. dio zadatka

var pocetnaMargina = sviStilovi.getPropertyValue("margin");
var marginaBroj = parseInt(pocetnaMargina);

var animacija = setInterval(funcFrame, 10);
var unazad = false;

function funcFrame(){
    if (unazad == true){
        marginaBroj--;
    } else {
        marginaBroj++;
    }

    if (marginaBroj == 30){
        unazad = true;
    }
    if (marginaBroj == 0){
        unazad = false;
    }

    var body = document.querySelector("body");
    body.style.margin = marginaBroj + "px";
}
