// Sélection du textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un gestionnaire d'événements pour la pression des touches
document.addEventListener("keydown", function(event) {
    // Récupération de la lettre tapée
    var lettre = event.key.toLowerCase();
    
    // Vérification si la lettre est comprise entre a et z
    if (lettre >= 'a' && lettre <= 'z') {
        // Si le focus est dans le textarea, ajouter la lettre deux fois
        if (document.activeElement === keylogger) {
            keylogger.value += lettre + lettre;
        } else {
            // Sinon, ajouter la lettre une fois
            keylogger.value += lettre;
        }
    }
});
