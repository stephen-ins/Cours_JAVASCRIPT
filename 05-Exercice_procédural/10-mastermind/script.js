console.log("test");

const colors = ["blue", "red", "yellow", "green", "white", "black"];
console.log("les couleurs:", colors);

// Création d'un tableau
let compteur = 1;

const createPlateau = document.querySelector("#gamePlateau");

const table = document.createElement("table");
createPlateau.appendChild(table); // Ajoute la table dans l'élément gamePlateau

for (let i = 0; i < 12; i++) {
  let line = document.createElement("tr");
  console.log("ligne:", line);

  for (let j = 0; j < 4; j++) {
    let cell = document.createElement("td");
    line.appendChild(cell); // Ajoute chaque cellule à la ligne
  }
  table.appendChild(line); // Ajoute chaque ligne à la table
}
console.log(table);

const gameTable = document.querySelector("#gameTable");
console.log("Table de jeu:", gameTable);
const gamePlateau = document.querySelector("#gamePlateau");
console.log("Plateau de jeu:", gamePlateau);
const pionSelect = document.querySelector("#pionSelect");
console.log("Selection des pion :", pionSelect);
const pionPostion = document.querySelector("#pionPostion");
console.log("La postion des pions: ", pionPostion);
