var osoba = {
    ime: "Boris",
    prezime: "jsjsjs",
    brojCipela: 44, 
};

// pretvorba objekta u JSON
var json = JSON.stringify(osoba);
console.log(json);

// brisanje key:value para
var izObrisano = delete osoba.ime;
console.log(izObrisano);

// osoba.ime = "Boris";
// osoba.prezime = "lll";
// osoba.godine = 19;
// osoba.brojCipela = 44;

if(osoba.brojCipela > 30) {
    console.log(`Ime i prezime: ${osoba.ime}, broj cipela: ${osoba.brojCipela}`);
}