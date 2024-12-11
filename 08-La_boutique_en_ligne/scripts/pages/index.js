import { getProducts } from "../utils/Api.js";
import { Header, returnMainHome } from "../components/Header.js";
import { Main, displayProductDetails } from "../components/Main.js";
import { Footer } from "../components/Footer.js";
import { addToCart } from "../utils/Cart.js";

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

  // Cette ligne de code appelle la fonction displayProductDetails en lui passant deux arguments : null et products.
  // La fonction displayProductDetails est responsable d'afficher les détails d'un produit lorsque l'utilisateur clique sur le bouton "Voir plus".
  // Le premier argument, null, n'est pas utilisé dans cette fonction, mais il est passé pour respecter la signature de la fonction.
  // Le deuxième argument, products, est un objet contenant les données des produits, qui est utilisé pour trouver et afficher les détails du produit sélectionné.
  displayProductDetails(null, products);

  // Fonction pour retourner à la page d'accueil lorsque l'utilisateur clique sur le logo ou bien la navLink "Home"
  returnMainHome();

  // Fonction pour ajouter un produit au panier lorsque l'utilisateur clique sur le bouton "Ajouter au panier"
  addToCart();
};

// La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'execution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche , de pouvoir continuer à réagir aux autres evenements pendant l'execution de la tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

(async () => {
  const products = await getProducts();
  displayData(products);
})();
