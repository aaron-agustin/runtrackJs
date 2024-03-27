window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var hauteurTotale = document.body.scrollHeight - window.innerHeight;
    var pourcentageScroll = (window.scrollY / hauteurTotale) * 100;
    var couleur = 'rgb(' + (255 - pourcentageScroll * 2.55) + ', ' + (255 - pourcentageScroll * 2.55) + ', ' + (255 - pourcentageScroll * 2.55) + ')';
    footer.style.backgroundColor = couleur;
});
