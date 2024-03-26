// Déclaration de la fonction jourTravaille
function jourTravaille(date) {
    // Récupération du jour, du mois et de l'année de la date
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    var annee = date.getFullYear();

    // Tableau des jours fériés de l'année 2024
    var joursFeries2024 = [
        "01/01/2024", // Jour de l'an
        "05/04/2024", // Vendredi saint
        "07/04/2024", // Lundi de Pâques
        "01/05/2024", // Fête du Travail
        "08/05/2024", // Victoire 1945
        "13/05/2024", // Ascension
        "24/05/2024", // Lundi de Pentecôte
        "14/07/2024", // Fête nationale
        "15/08/2024", // Assomption
        "01/11/2024", // Toussaint
        "11/11/2024", // Armistice
        "25/12/2024"  // Noël
    ];

    // Formater la date actuelle pour correspondre au format dans le tableau des jours fériés
    var dateFormatee = (jour < 10 ? '0' : '') + jour + '/' + (mois < 10 ? '0' : '') + mois + '/' + annee;

    // Vérifier si la date est un jour férié
    if (joursFeries2024.includes(dateFormatee)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } 
    // Vérifier si la date est un samedi (jour 6) ou un dimanche (jour 0)
    else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } 
    // Sinon, c'est un jour travaillé
    else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}

var maDate = new Date();
jourTravaille(maDate);
