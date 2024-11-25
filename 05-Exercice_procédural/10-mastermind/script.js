const gameTable = document.querySelector("#gameTable");
// console.log("Table de jeu:", gameTable);
const gamePlateau = document.querySelector("#gamePlateau table");
// console.log("Plateau de jeu:", gamePlateau);
const pionPostion = document.querySelector("#pionPostion");
// console.log("La postion des pions: ", pionPostion);

// Création du bouton rejouer
const gameButton = document.querySelector("#gameButton");
// console.log("bouton jouer", gameButton);
gameButton.addEventListener("click", () => {
  location.reload();
  // console.log("clique sur le bouton rejouer:", gameButton);
});

// Création des couleurs
const colors = ["blue", "red", "yellow", "green", "white", "black"];
// console.log("les couleurs:", colors);
// console.log("le jaune:", colors[2]);
let maxEssai = 12;
let essai = 1;
let clickColor = 0;
let index = 0;
let tentative = [];

// fonction de génération de couleurs aléatoires
function generateColors() {
  return Array.from(
    { length: 4 },
    () => colors[Math.floor(Math.random() * colors.length)]
  );
}
// console.log("génération aléatoire des couleurs:", generateColors());

const combinaison = generateColors();
console.log("La combinaison secrète :", combinaison);

// Tableau et index des couleurs
colors.forEach(function (item, index, array) {
  console.log(item, index);
});

const choiceColor = document.querySelectorAll(".color");
// console.log(choiceColor);

choiceColor.forEach((item) => {
  item.addEventListener("click", () => {
    // alert('test');

    clickColor++;

    let circle = document.querySelectorAll(".tr" + essai);
    console.log(circle);

    console.log(item.classList);
    circle[index].classList.add(item.classList[1]);

    console.log("index : " + index);

    index++;

    if (clickColor % 4 == 0) {
      essai++;
      console.log("étape " + essai);
      // let circleIndices = document.querySelectorAll('.trIndice' + essai);
      if (index == 4) index = 0;
    }
  });
});

if (index === 4) {
  const result = compareColors(combinaison, tentative);
  console.log(
    `Essai ${essai}: ${result.bienPlaces} bien placés, ${result.malPlaces} mal placés`
  );

  essai++;
  tentative = [];
  index = 0;
}

// Fonction de comparaison
function compareColors(combinaison, tentative) {
  let bienPlaces = 0;
  let malPlaces = 0;

  // Vérifier les bien placés
  for (let i = 0; i < 4; i++) {
    if (tentative[i] === combinaison[i]) {
      bienPlaces++;
    }
  }

  // Vérifier les mal placés
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j && tentative[i] === combinaison[j]) {
        malPlaces++;
        break;
      }
    }
  }

  return { bienPlaces, malPlaces };
}
