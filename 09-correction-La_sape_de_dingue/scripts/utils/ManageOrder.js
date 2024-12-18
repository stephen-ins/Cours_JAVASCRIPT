import {
  setProductLocalStorage,
  getProductsLocalStorage,
} from "../utils/Api.js";

export const AddProductPanier = (data) => {
  const buttonAddPanier = document.querySelector(".button__panier");
  buttonAddPanier.addEventListener("click", (event) => {
    // event.preventDefault();
    const quantity = parseInt(document.querySelector(".quantity").value);

    const dataProduct = {
      id: data.id,
      name: data.name,
      quantity: quantity,
      price: data.price,
      image: data.image,
    };

    // Si l'id du produit est exisant dans le localStorage, donc le produit est présent dans le panier, on entre dans la condition IF
    if (getProductsLocalStorage().hasOwnProperty(data.id)) {
      // console.log('produit existant dans le localStorage');

      // On ajoute à la quantité initiale du produit (getProductsLocalStorage()[data.id].quantity) avec la quantité selectionné sur la page produit (quantity)
      dataProduct.quantity =
        getProductsLocalStorage()[data.id].quantity + quantity;
    }

    // localStorage.setItem(243, {dataProduct})
    setProductLocalStorage(data.id, JSON.stringify(dataProduct));
  });
};

export const RemoveItemPanier = () => {
    console.log('RemoveItemPanier');

    const buttonValidateRemoveItem = document.querySelector('.button__remove');
    buttonValidateRemoveItem.addEventListener('click', () => {
        alert('test');
    });
}
