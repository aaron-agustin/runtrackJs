$(document).ready(function() {
    // Sélectionner le bouton pour afficher le texte
    $("#showButton").click(function() {
        $("#textContainer").show();
    });

    // Sélectionner le bouton pour cacher le texte
    $("#hideButton").click(function() {
        $("#textContainer").hide();
    });
});
