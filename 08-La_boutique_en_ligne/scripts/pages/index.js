import {} from "../utils/Api.js";
import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { Main } from "../components/Main.js";
import { Footer } from "../components/Footer.js";
import { lightBox } from "../utils/Lightbox.js";

const displayData = () => {
  // console.log(dataTableauxByPeintre);
  //   console.log("test displayData");
  const body = document.querySelector("body");
  // console.log(body);
  body.innerHTML = `
<div class="container">
${Header()}
${Nav()}
${Main()}
${Footer()}
</div>
`;

  //  appel des fonctions ici
};

// La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'execution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche , de pouvoir continuer à réagir aux autres evenements pendant l'execution de la tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

(async () => {})();
