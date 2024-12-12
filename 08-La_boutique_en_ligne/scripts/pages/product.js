import { getProducts } from "../utils/Api.js";
import { MainProduct } from "../components/MainProduct.js";
import { Header, returnMainHome } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { addToCart } from "../components/MainPanier.js";

const displayProduct = async () => {
  // Récupérer l'ID du produit depuis l'URL de la page
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  // Récupérer tous les produits (l'ensemble des produit du fichier JSON)
  const products = await getProducts();

  // Trouver le produit correspondant via son ID
  const selectedProduct = products.find((product) => product.id === productId);

  // Si le produit sélectionné n'existe pas (selectedProduct est null ou undefined),
  // redirige l'utilisateur vers la page d'accueil (index.html) et arrête l'exécution de la fonction.
  if (!selectedProduct) {
    window.location.href = "index.html";
    return;
  }

  // Afficher la page avec le produit qui a été cliqué dans la page d'accueil via la fonction MainProduct(selectedProduct)
  const body = document.querySelector("body");
  body.innerHTML = `
    <div class="container">
        ${Header()}
        ${addToCart()}
        ${Footer()}
    </div>
      `;

  returnMainHome();

  //   constante qui prend l'input quantity
  const quantityInput = document.querySelector(".quantity__input input");

  //   constante qui permet de décrémenter les articles un par un
  const removeButton = document.querySelector(".button__command-remove");

  //   constante permettant de faire un rajout d'article un par un
  const addButton = document.querySelector(".button__command-add");

  // Gérer le bouton "Retirer" un produit de la selection
  removeButton.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    } else {
      alert("Vous ne pouvez pas commander moins de 1 article");
    }
  });

  // Gérer le bouton clic: "Ajouter au panier"
  addButton.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);
    addToCart(selectedProduct, quantity);
    // console.log(addToCart);
  });
};

// Exécuter de la fonction au chargement de la page
displayProduct();
