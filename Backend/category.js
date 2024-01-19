let divFiltres = document.getElementById("filtres");
//declaration de la variable works 
let works;
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/categories")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(data => {
        works = data;
        for (let i = 0; i < works.length; i++) {
            let btnCategory = document.createElement('button');
            btnCategory.textContent = works[i].name;
            btnCategory.id = works[i].name;
            divFiltres.appendChild(btnCategory);
        
        }
        
    })


