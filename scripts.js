document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const menuClose = document.getElementById("menu-close");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    menuClose.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    // Initialisation de la carte pour la page d'accueil
const mapElement = document.getElementById('map');
    if (mapElement) {
        var map = L.map('map').setView([-17, 45], 5); // Vue sur Antananarivo, Madagascar

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    }
    // Ajout du fichier GeoJSON
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data).addTo(map);
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier GeoJSON:', error);
            });
});
