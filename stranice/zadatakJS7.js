var auto = {
    marka: "VW",
    gorivo: "benzin",
    model: "golf",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje){
        this.trenutnaBrzina += ubrzanje;
        return this.trenutnaBrzina;
    },
    zakoci: function(brojSekundi){
        while (this.trenutnaBrzina > 0 && brojSekundi >= 0){
            this.trenutnaBrzina -= 10;
            console.info("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);
            brojSekundi--;
            console.info("debug " + brojSekundi);

        }
        return this.trenutnaBrzina;
    },
    brojKotaca: 4
};

console.log(auto.propertyIsEnumerable("marka"));

for (let key in auto) {
    if (auto.propertyIsEnumerable(key)) {
        console.log("ključ: " + key + "; vrijednost: " + auto[key]);
    }
}

console.log("Ja vozim auto marke " + auto.marka + ", model " + auto.model + ", a boje: " + auto.boja);

// auto.marka = "BMW";
// console.log("Sada vozim auto marke: " + auto.marka);

console.log("Auto vozi brzinom: " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom: " + auto.ubrzaj(60));
console.log("Auto nakon kočenja vozi brzinom: " + auto.zakoci(30));

var json = JSON.stringify(auto);
console.log(json);