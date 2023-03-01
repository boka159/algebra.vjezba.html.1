// const { isNumber } = require("lodash");
const { _ } = require('./core.js');

var dobro = "1234567890";
var lose = "1123456";

// var jedinstveniZnakovi = function(password){
//     console.log("test " + password);
//     let isNum = _.isNumber(password);
//     console.log("is number " + isNum);
// };

function jedinstveniZnakovi(password) {
    var mojNiz = [];

    for (var i = 0; i <= password.length; i++) {
        var mojChar = password.charAt(i);
        if (!mojNiz.includes(mojChar)) {
            mojNiz.push(mojChar);
        }
        else {
            console.log("--------------------------");
            console.log("FUNKCIJA za zadani password=" + password + " VRACA ----> FALSE");
            console.log("--------------------------");
            return false;
        }
    }
    console.log("--------------------------");
    console.log("FUNKCIJA za zadani password=" + password + " VRACA ----> TRUE");
    console.log("--------------------------");
    return true;
};



var daLiJeSvakiZnakBroj = function (password) {
    for (i = 0; i <= password.length; i++) {
        var mojChar = password.charAt(i);
        var mojBroj = Number(mojChar);
        if (!isNaN(mojBroj) && _.isNumber(mojBroj)) {
        } else {
            console.log("--------------------------");
            console.log("Provjera za znak=" + mojChar + " kaze da NIJE broj!")
            console.log("Provjera za password=" + password + " kaze da NISU svi znakovi brojevi!")
            console.log("--------------------------");
            return false;
        }
    }
    console.log("--------------------------");
    console.log("Provjera za password=" + password + " kaze da su svi znakovi brojevi!")
    console.log("--------------------------");
    return true;
}

var daLiJePasswordBroj = function (password) {
    var mojBroj = Number(password);
    var isBroj = !isNaN(mojBroj) && _.isNumber(mojBroj);
    console.log("--------------------------");
    console.log("Provjera kaze da je predani password broj = " + isBroj);
    console.log("--------------------------");
    return isBroj;
}

function skratiNaPrvih10Znakova(password) {
    if (password.length > 10) {
        return password.substring(0, 10);
    }
    console.log("Password NIJE bio duzi od 10 znakova, tocnije bio je " + password.length + " te je vracen kao takav  " + password);
    return password;
}

// console.log("rezultat = " + isUniqueCharacters(dobro.toString()));
// console.log("rezultat duljine = " + skratiNaPrvih10Znakova(dobro.toString()));

console.log("===== 1. provjera jedinstvenosti - POCETAK =====\n");
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);

console.log("===== 2. provjera brojcane vrijednosti - POCETAK =====\n");
daLiJeSvakiZnakBroj(dobro);
daLiJeSvakiZnakBroj(lose);

console.log("----- Dodatna provjera na drugi nacin - Pocetak -----\n");
daLiJePasswordBroj(dobro);

console.log("===== 3. Skrati password na 10 znakova - POCETAK =====\n");
skratiNaPrvih10Znakova(dobro);
skratiNaPrvih10Znakova(lose);

skratiNaPrvih10Znakova("9876543210987");

// 1. Skrati na 10 znakova
// 2. Je li broj
// 3. Je li pass jedinstven

var password = dobro;
if (password.length > 10) {
    password = skratiNaPrvih10Znakova(password);
}
if (jedinstveniZnakovi(password) == true) {
    if (daLiJePasswordBroj(password) == true) {
        console.log("password is OK");
    } else {
        console.log("password is not OK 2");
    }
} else {
    console.log("password is not OK");
}

//provjera je li svaki znak broj 