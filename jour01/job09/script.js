function tri(numbers, order) {
   
    if (order === "asc") {
      
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
       
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
       
        throw new Error("L'ordre doit être 'asc' ou 'desc'.");
    }

    return numbers;
}


var nombres = [3, 1, 5, 2, 4];
var ordreAscendant = tri(nombres.slice(), "asc");
var ordreDescendant = tri(nombres.slice(), "desc");

console.log("Ordre ascendant :", ordreAscendant); 
console.log("Ordre descendant :", ordreDescendant); 

