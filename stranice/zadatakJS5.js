var names = ["John", "Jane", "Mike",,];
var name1 = names [0];
names.push("Jack"); //dodaje element na kraj niza
names.pop(); //izbacuje posljednji element iz niza

for (let i = 0; i < names.length; i++){
        console.log(names[i]);
}

//jednako iznad navedenoj for petlji
names.forEach(function(value){
    console.log(value);
});