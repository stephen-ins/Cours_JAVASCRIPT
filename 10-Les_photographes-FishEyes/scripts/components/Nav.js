import { getProductsLocalStorage } from "../utils/Api.js";

export const Nav = () => {
  // console.log(getProductsLocalStorage());
  // Calculer le nombre total d'articles dans le panier
  const panierItems = getProductsLocalStorage();
  let totalItems = 0;

  for (const key in panierItems) {
    // console.log(panierItems[key]);
    // console.log(panierItems[key].quantity)
    totalItems += panierItems[key].quantity;
  }

  // console.log(totalItems);

  return `
    <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="index.html" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="panier.html" class="nav__link panier__link">
              Panier
              <span class="panier__count${
                totalItems === 0 ? " panier__count__hidden" : ""
              }">${totalItems}</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
};
