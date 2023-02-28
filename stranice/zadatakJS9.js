// const { isNumber } = require("lodash");

var dobro = "1234567890";
var lose = "1123456";

var jedinstveniZnakovi = function(password){
    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
};

function isUniqueCharacters(password)
{
    var myArray = [];
    for(var i = 0; i <= password.length; i++){
        var myChar = password.charAt(i);
        if(!myArray.includes(myChar)){
            myArray.push(myChar);
        }
        else {
            return false;
        }
    }

    return true;
};

function skratiNaPrvih10Znakova(password){
    if (password.length > 10){
        return password.substring(0, 10);
    }
    return password;
}

console.log("rezultat = " + isUniqueCharacters(dobro.toString()));
console.log("rezultat duljine = " + skratiNaPrvih10Znakova(dobro.toString()));

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);

// 1. Skrati na 10 znakova
// 2. Je li broj
// 3. Je li pass jedinstven

var password = dobro;
if (password.length > 10){ 
    password = skratiNaPrvih10Znakova(password);
}
if (jedinstveniZnakovi(password)==true){
    if (isUniqueCharacters(password)==true){
        console.log("password is OK");
    }else {
        console.log("password is not OK 2");
    }
} else {
    console.log("password is not OK");
}

//provjera je li svaki znak broj 