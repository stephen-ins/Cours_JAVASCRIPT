const colors = ["green", "blue", "red", "purple", "black", "yellow"];
const colorsLenght = colors.length;
const circleSolution = document.querySelectorAll(".circle__solution");
const circleChoices = document.querySelectorAll(".circle__choices");
const choicesCurrent = document.querySelector(".choices").innerHTML;
let compteur = 0;
let step = 1;
let handleSelectedColors = [];
let arrayMatchs = [];
let arrayColorsIndicators = [];

// console.log(circleChoices);
// console.log(circleSolution);
// console.log(colors);
// console.log(colorsLenght);

// array = toutes les couleurs selectionné par l'utilisateur
// str = 1 couleur de la combinaison secrete
const getMatch = (arr, str) => {
  console.log(arr);
  console.log(str);
  //                    bleu
  let reg = new RegExp(str, "i");
  //                   1 couleur
  return arr.filter((item, index) => {
    // Si la couleur selectionné par l'internaute correspond au couleur de la combinaison cachée
    if (item.match(reg)) {
      // arrayMatchs[2] = blue
      // arrayMatchs[data-position] = blue
      arrayMatchs[index] = item;
      return arrayMatchs;
    }
  });
};

const randomSelection = (n) => {
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    let newElem = colors[Math.floor(Math.random() * colorsLenght)];

    // console.log("couleur" + i);
    // console.log("colors:" + newElem);

    while (newArr.includes(newElem)) {
      newElem = colors[Math.floor(Math.random() * colorsLenght)];
    }
    newArr.push(newElem);
  }
  return newArr;
};

const arrayRandomColors = randomSelection(3);
// console.log("la combinaison cachée :", arrayRandomColors);

circleSolution.forEach((el, index) => {
  //   console.log(el);
  //   console.log(index);
  el.classList.add(arrayRandomColors[index]);
});

// Autoriser le drop
const allowDrop = (event) => {
  event.preventDefault();
};

const dragstart = (event) => {
  // console.log(event.target.id);
  let id = event.target.id + "step" + step;
  // console.log(id);
  event.target.setAttribute("id", id);
  event.dataTransfer.setData("text/plain", id);
};

// Cette fonction permet de réinitialiser les choix de couleurs aprés chaque étapes
const reset = () => {
  const choices = document.querySelector(".choices");
  choices.innerHTML = choicesCurrent;
};

const drop = (event) => {
  event.preventDefault();

  compteur++;
  // console.log(compteur);

  let data = event.dataTransfer.getData("text/plain");
  // console.log(data);
  event.target.append(document.getElementById(data));

  // Une fois le drag and drop effectué, on ne peut plus déplacer l element au bout de 500ms, setTimeout() s execute automatiquement au bout de 500ms.
  setTimeout(() => {
    document.getElementById(data).setAttribute("draggable", false);
  }, "500");

  const position = event.currentTarget.getAttribute("data-position");
  // console.log(position);
  const color = document.getElementById(data).getAttribute("data-color");
  // console.log(color);

  handleSelectedColors[position] = color;
  console.log(handleSelectedColors);

  // On entre dans cette condition tout les 4 drop
  if (compteur % 4 == 0) {
    // On boucle les couleurs de la combinaison secrète
    arrayRandomColors.forEach((colorRandom, indexRandom) => {
      // console.log(colorRandom);
      // console.log(indexRandom);
      getMatch(handleSelectedColors, colorRandom);
      // console.log(arrayMatchs);
      if (arrayRandomColors.toString() === arrayMatchs.toString()) {
        // console.log("Vous avez gagné");
        arrayColorsIndicators.push("green");
      } else {
        // On entre dans le else si il y a des correspondances de couleurs mais pas au bon endroit
        // console.log("On y est presque");
        arrayMatchs.forEach((colorMatch, indexMatch) => {
          if (colorRandom == colorMatch && indexRandom == indexMatch) {
            console.log("colorMatch " + colorMatch + " bien positionné");
            arrayColorsIndicators.push("green");
          }
          if (colorRandom == colorMatch && indexRandom != indexMatch) {
            console.log(
              "colorMatch " + colorMatch + " existante mais mal positionné"
            );
            arrayColorsIndicators.push("orange");
          }
        });
      }
    });
    console.log(arrayColorsIndicators);

    // On compare la combinaison cachée avec la combinaison choisie (en chaine de caractères, toString
    // Si bien égales, le joueur a trouvé la combinaison cachée

    step++;
    // console.log("prochaine étape :" + step);

    reset();

    const positionStep = document.querySelectorAll(
      '[data-step="' + step + '"]'
    );
    // console.log(positionStep);
    positionStep.forEach((element) => {
      element.setAttribute("ondrop", "drop(event)");
      element.setAttribute("ondragover", "allowDrop(event)");
    });
  }
};
