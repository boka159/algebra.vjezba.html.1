var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown"
}

const quotes = [
    "I\'m going to my friends. I\'m going home.",
    "Pure fuel! PURE FUEL! WOO!,",
    "See? zoomer.",
    "Bitchin."
];

// 2. dio zadatka
var proto1 = Object.getPrototypeOf(character);
// console.log(proto1);
var proto2 = Object.getPrototypeOf(proto1);
// console.log(proto2);

// 3. dio zadatka

character.prototype = function(){
    let rndCnt = parseInt(Math.random()*10) % 4;
// var rndCnt = Math.floor(Math.random()*quotes.length);
// console.log(rndCnt);
    let rndVal = quotes[rndCnt];
// console.log(rndVal);
    return rndVal;
}

console.log(character.prototype());