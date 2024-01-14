// import de la fonction genererworks
import genererWorks from "./works.js";
//declaration de la variable works 
let works;
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/works")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(data => {
        works = data;
    })
let tous = document.getElementById("tous")
let objets = document.getElementById("objets")
let appartements = document.getElementById("appartements")
let hotelsEtRestaurants = document.getElementById("hotels_et_restaurants")

tous.addEventListener("click", () => {

    // Sélectionnez toutes les balises figure dans la class galery
    let galleryFigures = document.querySelectorAll(".gallery figure");
    // Parcours les éléments dans les figures de gallery et supprim de leur contenu
    for (let i = 0; i < galleryFigures.length; i++) {
        galleryFigures[i].innerHTML = '';
    }
    // ajouter la classe active 
    tous.className = "active"
    // supprimer la classe des autres filtres 
    objets.classList.remove("active")
    appartements.classList.remove("active")
    hotelsEtRestaurants.classList.remove("active")
    // afficher tous les works 
    genererWorks(works);
})

// configuration du filtre Objets

objets.addEventListener("click", () => {
    // Sélectionnez toutes les balises figure dans la class galery
    let galleryFigures = document.querySelectorAll(".gallery figure");
    // Parcours les éléments dans les figures de gallery et supprim de leur contenu
    for (let i = 0; i < galleryFigures.length; i++) {
        galleryFigures[i].innerHTML = '';
    }
    // afficher les works si et seulement si name=objet 
    let objetsWorks = works.filter(work => work.category.name === "Objets");
    genererWorks(objetsWorks)


    // ajouter la classe active 
    objets.className = "active"
    // supprimer la classe des autres filtres 
    tous.classList.remove("active")
    appartements.classList.remove("active")
    hotelsEtRestaurants.classList.remove("active")
})

// configuration du filtre Appartements

appartements.addEventListener("click", () => {
    // Sélectionnez toutes les balises figure dans la class galery
    let galleryFigures = document.querySelectorAll(".gallery figure");
    // Parcours les éléments dans les figures de gallery et supprim de leur contenu
    for (let i = 0; i < galleryFigures.length; i++) {
        galleryFigures[i].innerHTML = '';
    }
    // afficher les works si et seulement si name=objet 
    let appartementsWorks = works.filter(work => work.category.name === "Appartements");
    genererWorks(appartementsWorks)


    // ajouter la classe active 
    appartements.className = "active"
    // supprimer la classe des autres filtres 
    tous.classList.remove("active")
    objets.classList.remove("active")
    hotelsEtRestaurants.classList.remove("active")
})

// configuration du filtre Appartements

hotelsEtRestaurants.addEventListener("click", () => {
    // Sélectionnez toutes les balises figure dans la class galery
    let galleryFigures = document.querySelectorAll(".gallery figure");
    // Parcours les éléments dans les figures de gallery et supprim de leur contenu
    for (let i = 0; i < galleryFigures.length; i++) {
        galleryFigures[i].innerHTML = '';
    }
    // afficher les works si et seulement si name=objet 
    let hotelsEtRestaurantsWorks = works.filter(work => work.category.name === "Hotels & restaurants");
    genererWorks(hotelsEtRestaurantsWorks)
    // ajouter la classe active 
    hotelsEtRestaurants.className = "active"
    // supprimer la classe des autres filtres 
    tous.classList.remove("active")
    objets.classList.remove("active")
    appartements.classList.remove("active")
})