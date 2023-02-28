// ZADATAK: Zbroji sve parne brojeve od 1 do 20
var zbroj = 0; 

for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
        zbroj += i;
    }

}

console.log(zbroj);


// ZADATAK 2: Ispiši sve brojeve djeljive s 11  
for(i = 1; i <= 99; i++){
    if(i % 11 == 0){
    console.log(i);
    }
}