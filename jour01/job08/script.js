
function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}


function sommeNombresPremiers(nombre1, nombre2) {
    // Vérifier si les deux nombres sont premiers
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        
        return nombre1 + nombre2;
    } else {
       
        return false;
    }
}

var resultat = sommeNombresPremiers(3, 5);
console.log(resultat); 
