// 1. dio zadatka
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

// 2. dio zadatka
var divDescription = document.querySelector(".description span");
divDescription.outerHTML = "<h3>5 rijeka</h3>";
// divDescription.innerHTML = "Grad na <h3>5 rijeka</h3>";

// 3. dio zadatka
var info = document.querySelector(".info");
info.textContent = "Peta rijeka je piva.";

// 4. dio zadatka
var rijeke = ["Kupa", "Korana", "Mrežnica", "Dobra", "Karlovačko pivo"];
var footer = document.getElementById("footer");

for (c = 0; c < rijeke.length; c++ ) {
    footer.querySelectorAll("li")[c].innerText = rijeke[c];
}

// 5. dio zadatka
var myPageOffsetY = 1300;
var myScrollTop = 200;
var myKorisnickiEkran = 730;
var visinaElementa = 300;

var vidljivY = myKorisnickiEkran - myPageOffsetY + myScrollTop;


console.log("Ako je ispod 0, nije vidljiv te toliko piksela nedostaje do elementa = " + vidljivY);