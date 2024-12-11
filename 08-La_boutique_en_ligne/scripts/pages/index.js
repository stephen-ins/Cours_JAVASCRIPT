import { getProducts } from "../utils/Api.js";
import { Header } from "../components/Header.js";
import { Main, displayProductDetails } from "../components/Main.js";
import { Footer } from "../components/Footer.js";

const displayData = (products) => {
  // console.log(products);
  // console.log("test displayData");
  const body = document.querySelector("body");
  // console.log(body);
  body.innerHTML = `
      <div class="container">
      ${Header()}
      ${Main(products)}
      ${Footer()}
      </div>
      `;

  //  appel des fonctions ici

  displayProductDetails();
};

// La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'execution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche , de pouvoir continuer à réagir aux autres evenements pendant l'execution de la tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

(async () => {
  const products = await getProducts();
  displayData(products);
})();
