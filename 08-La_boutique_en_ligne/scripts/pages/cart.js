import { MainPanier } from "../components/MainPanier.js";
import { Header, returnMainHome } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { addToCart } from "../utils/CartProduct.js";

const displaydata = async () => {
  // Afficher la page avec le produit qui a été cliqué dans la page d'accueil via la fonction MainProduct(selectedProduct)
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
        ${Header()}
        ${MainPanier()}
        ${Footer()}
    </div>
      `;

  returnMainHome();
};

(async () => {
  displaydata();
})();
