// Récupération des works depuis l'API
fetch("http://localhost:5678/api/works")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(works => {
        // Sélectionnez toutes les balises figure dans la class galery
        let galleryFigures = document.querySelectorAll(".gallery figure");
        // Parcours les éléments dans les figures de gallery et supprim de leur contenu
        for (let i = 0; i < galleryFigures.length; i++) {
            galleryFigures[i].innerHTML = '';
        }
        // Appel de la fonction genererWorks une fois que les données sont prêtes
        genererWorks(works);
    })
// Fonction qui génère les works
function genererWorks(works) {
    for (let i = 0; i < works.length; i++) {
        // Création d’une balise dédiée au titre
        const titleElement = document.createElement("figcaption");
        // On crée l’élément img.
        const imageElement = document.createElement("img");
        // On accède à l’indice i de la liste works pour configurer la source de l’image.
        imageElement.src = works[i].imageUrl;
        // On accède à l'indice i de la liste works pour configurer le title.
        titleElement.innerText = works[i].title;
        // récuperer la balise ou l'on va mettre tout ca
        let galleryFigure = document.querySelectorAll(".gallery figure");
        // On rattache l’image à la balise figure
        galleryFigure[i].appendChild(imageElement);
        // On rattache le titre à la balise figure
        galleryFigure[i].appendChild(titleElement);
    }

}

