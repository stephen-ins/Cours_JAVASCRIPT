/*
        SELECTION PAR L'ID
*/

//  getElementById() est une fonction / sélecteur permettant de selectionner un élément HTML dans le DOM possédant un "id"
let maSection = document.getElementById("section");
console.log(maSection);
//  Pour récupérer le texte
console.log(maSection.innerText);
//  Pour récupérer le contenu HTML
console.log(maSection.innerHTML);

//  Pour modifier le contenu HTML
maSection.innerHTML = '<h3 class=title__h3">Mon Titre H3</h3>';
//  Ajout de classe et d'attribut à la section
maSection.setAttribute("class", "block__section");
maSection.style.padding = "1rem";
maSection.style.textAlign = "center";
maSection.style.fontSize = "1.5rem";

//  addEventListener est un écouteur d'évenements permettant d'ajouter un évènement (click, dbclick, keydown, mousenter etc...), ici au click sur l'élément HTML maSection, nous modifions le background
maSection.addEventListener("click", function () {
  this.style.backgroundColor = "red";
});

/* 
        SELECTION PAR LA CLASSE
*/

let elemsDiv = document.getElementsByClassName("block");
console.log("elemsDiv : " + elemsDiv); // [objet HTML collection]
console.log(elemsDiv);

// Exo : modifier le contenu de la deuxième div sélectionnée, remplacer "Block 2" par "Nous sommes mardi"

console.log(elemsDiv[1]);
elemsDiv[1].innerText = "Nous sommes mardi";

// Exo : appliquer du CSS sur ces balises via une boucle

console.log(elemsDiv.length); // 4 éléments

for (let z = 0; z < elemsDiv.length; z++) {
  console.log(elemsDiv[z]);
  //   elemsDiv[z].style.backgroundColor = "#0523";
  //   elemsDiv[z].style.padding = "4rem";
  //   elemsDiv[z].style.fontSize = "1.2rem";
  //   elemsDiv[z].style.textAlign = "left";
  //   elemsDiv[z].style.margin = "20px auto";
  elemsDiv[z].style.cssText =
    " background: #159006; border-radius: 0.5rem; padding: 1.5rem; color: #000697";

  elemsDiv[z].addEventListener("click", function () {
    // alert("test");
    // this représente l'objet lui-même elemsDiv[z]
    console.log(this.classList);
    this.classList.toggle("rotation");
  });
}
