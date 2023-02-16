var text = " Lorem ipsum dolor sit amet";

// var length = text.length; možemo deklarirati i inicijalizirati za daljnje računanje da nam bude lakše
console.log("duljina teksta = " + text.length);

var wordSit = text.substr(19,3);
var wordSit2 = text.substring(19, 22);
console.log(wordSit);
console.log(wordSit2);

text2 = text.replace("amet", "elit");
console.log(text2);

var newText = text2 + ", consectetur adipiscing elit";
console.log(newText);

text3 = newText.toUpperCase();
console.log(text3);

text = text.trim();
// console.log (text)

var aa = text.charAt(12);
console.log(text.charAt(0));

return;