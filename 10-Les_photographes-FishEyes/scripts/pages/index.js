import { getData, getProducts } from "../utils/Api.js";

import { Header } from "../components/Header.js";
// console.log(Header());

import { Nav } from "../components/Nav.js";
// console.log(Nav());

import { Main } from "../components/Main.js";
// console.log(Main());

import { Footer } from "../components/Footer.js";
// console.log(Footer());

// Retourne une promesse 404 pour l'instant car le getData n'est pas en asynchrone
getData();

const displayData = (data) => {
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
    ${Header()}
    ${Nav()}
    ${Main(data)}
    ${Footer()}
    </div>
    `;
};

// Fonction asynchrone anonyme qui s'exécute automatiquement au chargement de la page index.html
(async () => {
  const data = await getProducts();
  // console.log(data);

  // On exécute la fonction displayData pour avoir un retour visuel sur la page
  // On transmet le résultat de la fonction getProducts() à displayData() afin de les dispatcher dans les différents composants Main().
  displayData(data);
})();
