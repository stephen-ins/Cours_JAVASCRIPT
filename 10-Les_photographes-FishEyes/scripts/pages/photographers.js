import { getPhotographerById } from "../utils/Api.js";
import { HeaderPhotographer } from "../components/HeaderPhotographer.js";
import { MainPhotographer } from "../components/MainPhotographer.js";

const displayData = (data) => {
  const body = document.querySelector(".container");
  body.innerHTML = `
    ${HeaderPhotographer()}
    ${MainPhotographer(data)}
  `;
};

// Fonction asynchrone anonyme qui s'exécute automatiquement
(async () => {
  try {
    const data = await getPhotographerById();
    displayData(data);
  } catch (error) {
    console.error("Erreur lors du chargement du photographe:", error);
  }
})();
