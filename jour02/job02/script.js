// Fonction pour ajouter ou supprimer l'article
function addOrRemoveArticle() {
    var existingArticle = document.getElementById("citation");
    
    // Vérifier si l'article existe déjà
    if (existingArticle) {
        // S'il existe, le supprimer
        existingArticle.remove();
    } else {
        // S'il n'existe pas, créer un nouvel article
        var newArticle = document.createElement("article");
        newArticle.id = "citation";
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
        // Ajouter l'article au contenu de la page (avant le bouton)
        var button = document.getElementById("button");
        document.body.insertBefore(newArticle, button);
    }
}

// Sélection du bouton
var button = document.getElementById("button");

// Ajout d'un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener("click", addOrRemoveArticle);
