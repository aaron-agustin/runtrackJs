// Fonction pour ajouter un clic au compteur
function addOne() {
    // Sélectionner l'élément contenant le compteur
    var compteur = document.getElementById("compteur");

    // Obtenir la valeur actuelle du compteur et l'incrémenter
    var currentValue = parseInt(compteur.textContent);
    var newValue = currentValue + 1;

    // Mettre à jour le contenu du compteur
    compteur.textContent = newValue;
}

// Sélection du bouton
var button = document.getElementById("button");

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", addOne);
