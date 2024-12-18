import { getData, getPhotographers } from "../utils/Api.js";

import { HeaderIndex } from "../components/HeaderIndex.js";
// console.log(Header());

import { MainIndex, goToWall } from "../components/MainIndex.js";
// console.log(MainIndex());
// console.log(goToWall());

// Retourne une promesse 404 pour l'instant car le getData n'est pas en asynchrone
getData();

const displayData = (data) => {
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
    ${HeaderIndex()}
    ${MainIndex(data)}
    </div>
    `;

  goToWall();
};

// Fonction asynchrone anonyme qui s'exécute automatiquement au chargement de la page index.html
(async () => {
  const data = await getPhotographers();
  // console.log(data);

  // On exécute la fonction displayData pour avoir un retour visuel sur la page
  // On transmet le résultat de la fonction getProducts() à displayData() afin de les dispatcher dans les différents composants Main().
  displayData(data);
})();
