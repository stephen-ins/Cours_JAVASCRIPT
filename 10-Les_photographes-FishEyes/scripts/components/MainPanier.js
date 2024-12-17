import { getProductsLocalStorage } from "../utils/Api.js";

const dataProductsPanier = getProductsLocalStorage();
// console.log(dataProductsPanier);

export const MainPanier = () => {
  // afficher les bonnes données des produits du panier en passant par l'objet  dataPoductsPanier (boucle | 1 ligne tr crée par tour de boucle), faire le calcul en fonction de la quantité et du prix du produit. Prévoir le calcul du montant total du panier.
  let montantTotal = 0;

  let cardProductsPanier = "";
  // console.log(dataProductsPanier);
  for (const key in dataProductsPanier) {
    // console.log(dataProductsPanier[key]);
    const quantity = dataProductsPanier[key].quantity;
    // console.log(dataProductsPanier[key].quantity);
    const price = dataProductsPanier[key].price;
    // console.log(dataProductsPanier[key].price);

    const totalPanier = quantity * price;
    // console.log(totalPanier);

    montantTotal += quantity * price;

    cardProductsPanier += `
    <tr>
      <td>
        <img
          src="assets/images/products/${dataProductsPanier[key].image}"
          class="picture__panier"
          alt="${dataProductsPanier[key].name}"
        />
      </td>
      <td>${dataProductsPanier[key].name}</td>
      <td>
        <div class="quantity__order">
          <a href="" class="link__icone__minus" data-id="${
            dataProductsPanier[key].id
          }">
            <i class="fa-solid fa-minus icone__minus"></i>
          </a>
          <p class="panier__quantity">${dataProductsPanier[key].quantity}</p>
          <a href="" class="link__icone__plus" data-id="${
            dataProductsPanier[key].id
          }">
            <i class="fa-solid fa-plus icone__plus"></i>
          </a>
        </div>
      </td>
      <td>${dataProductsPanier[key].price}</td>
      <td>${parseFloat(totalPanier).toFixed(2)} €</td>
      <td>
        <a href="" data-id="${
          dataProductsPanier[key].id
        }" class="icone__delete__item"
          ><i class="fa-solid fa-trash"></i
        ></a>
      </td>
    </tr>`;
  }

  return `
  <main class="main__panier">
        <h2 class="title__h2">Votre panier</h2>
        <table class="table__order">
    
        ${cardProductsPanier}

          <tr>
            <td class="montant__total">Montant Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td class="total__panier">${parseFloat(montantTotal).toFixed(
              2
            )} €</td>
          </tr>
        </table>
        
        <div class="block__action__cart">
        <a href="" class="button__delete__cart">Vider le panier</a>
        <a href="" class="button__validate__cart">Valider la commande</a>
        </div>

      </main>`;
};
