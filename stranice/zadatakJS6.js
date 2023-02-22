function longestWord(zadaniNiz){
    var najduzaRijecUFunkciji = "";
    for (let i = 0; i < zadaniNiz.length; i++){
        if (zadaniNiz[i].length > najduzaRijecUFunkciji.length){
                    najduzaRijecUFunkciji = zadaniNiz [i];
    }}

    return najduzaRijecUFunkciji;
}

var niz = ["Marko", "Ana", "Josipa", "Anamarija", "Ivo"];

var najduzeIme = longestWord(niz);

console.log (najduzeIme);