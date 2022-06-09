//Applico i metodi maiuscoli
let text = "Oggi è una bella giornata";
let result = text.toUpperCase();
console.log(result);
//Applico i metodi minuscoli
 text ="OGGI E' UNA BRUTTA GIORNATA";
 result = text.toLowerCase();
console.log(result);
//suddivido gli elementi
text = "Oggi è una giornata normale";
result = text.slice(0, 10);
console.log(result);
//concateno gli elementi
let arr1= ["Oggi è"];
let arr2= ["una bella"];
let arr3= ["giornata!"];
let tempo = arr1.concat(arr2,arr3);
console.log(tempo);
//creo un array leggo il terzo punto
let sport = ["basket","calcio","tennis","golf"];
console.log(sport);
console.log(sport[2]);
//passo all array un valore
sport.push("breaking");
console.log(sport);
//leggo la lunghezza dell'array
let lenght = sport.length;
console.log(sport.length);
//creo una funzione
players =[5, 11, 2, 1];
result = players.filter(check);
function check(players) {
    return players >=5
}
console.log(result);

//metodo pop
let ingredienti =[" carne","burro", "farina", "uova"];
ingredienti.pop("uova");
console.log(ingredienti);

//metodo push
ingredienti =[" carne","burro", "farina", "uova"];
ingredienti.push("olio")
console.log(ingredienti);
//metodo unshift
ingredienti =[" carne","burro", "farina", "uova"];
ingredienti.unshift("vino", "pane")
console.log(ingredienti);
//metodo shift
ingredienti =[" carne","burro", "farina", "uova"];
ingredienti.shift();
console.log(ingredienti);