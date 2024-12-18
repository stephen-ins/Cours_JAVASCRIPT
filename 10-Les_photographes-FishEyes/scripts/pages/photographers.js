import {
  getPhotographers,
  getPhotographerById,
  getData,
} from "../utils/Api.js";
import { HeaderPhotographer } from "../components/HeaderPhotographer.js";
// console.log(HeaderPhotographer());

import { MainPhotographer } from "../components/MainPhotographer.js";
// console.log(MainPhotographer());

// Retourne une promesse 404 pour l'instant car le getData n'est pas en asynchrone
getData();
getPhotographerById();
getPhotographers();

const displayData = (data) => {
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
    ${HeaderPhotographer()}
    ${MainPhotographer(data)}
    </div>
    `;
};

// Fonction asynchrone anonyme qui s'exécute automatiquement au chargement de la page index.html
(async () => {
  const data = await getPhotographerById();
  // console.log(data);

  // On exécute la fonction displayData pour avoir un retour visuel sur la page
  // On transmet le résultat de la fonction getProducts() à displayData() afin de les dispatcher dans les différents composants Main().
  displayData(data);
})();
