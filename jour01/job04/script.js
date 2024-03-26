// Déclaration de la fonction bisextile
function bisextile(annee) {
    // Vérifie si l'année est divisible par 4
    // mais non divisible par 100, sauf si elle est également divisible par 400
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

bisextile();
