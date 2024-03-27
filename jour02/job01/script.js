// Fonction pour récupérer et afficher la citation
function citation() {
    var elementCitation = document.getElementById("citation");
    if (elementCitation) {
        console.log(elementCitation.textContent);
    } else {
        console.log("L'élément avec l'ID 'citation' n'a pas été trouvé.");
    }
}

// Sélection du bouton
var button = document.getElementById("button");

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", citation);
