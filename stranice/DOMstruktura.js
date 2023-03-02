var y = document.createElement("h1");
y.innerText = "Ovo je nas header";

var div = document.getElementsByClassName("description")[0];
div.parentNode.insertBefore(y, div);

var divInfo = document.createElement("div");
divInfo.className = "info";
div.parentNode.insertBefore(divInfo, footer); 
//nalazi footer zbog ID-a u HTML-u, inače se mora dohvatiti footer kroz .getElementByID()

const footerNode = document.getElementById("footer");
const ul = footerNode.getElementsByTagName("ul")[0];

for (let i = 3; i < 6; i++){
    var listViewItem = document.createElement("li");
    // listViewItem.appendChild(document.createTextNode(i)); Ako želimo ispisati vrijednost iteratora
    ul.appendChild(listViewItem);
}