// console.log("Sirina " + window.innerWidth);
// console.log("Visina " + window.innerHeight);

console.log("hostname: " + window.location.hostname);
// window.location = "https://www.google.com";

window.setTimeout(function(){
    console.log("I am late.");
    window.confirm("We use cookies on this website. Do you agree to enter?");
}, 2000);