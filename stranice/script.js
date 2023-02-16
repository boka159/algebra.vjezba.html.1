var tablica = "<table border=1>\n";

for(var i = 1; i<=10; i++){

tablica +=  "<tr>\n" +
            "<td> Name " + i + " </td>\n" +
            "<td> Rank " + i + " </td>\n" +
            "<td> Class " + i + " </td>\n" +
            "</tr>\n";
}

tablica +="</tablica>";
// tablica +="</tablica>" isto što i tablica = tablica + "</tablica>";

console.log(tablica);

document.write(tablica);