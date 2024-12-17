import {
  setProductLocalStorage,
  getProductsLocalStorage,
} from "../utils/Api.js";

export const addProductPanier = (data) => {
  //   console.log(data);

  const buttonAddPanier = document.querySelector(".button__panier");
  //   console.log(buttonAddPanier);
  buttonAddPanier.addEventListener("click", (event) => {
    // event.preventDefault();
    // alert('test');
    const quantity = parseInt(document.querySelector(".quantity").value);
    // console.log(quantity);

    const dataProduct = {
      id: data.id,
      name: data.name,
      quantity: quantity,
      price: data.price,
      image: data.image,
    };

    // console.log(data);
    // SI l'id du produit existe dans le localStorage, on ajoute la quantité au produit, on renter dans le IF
    if (getProductsLocalStorage().hasOwnProperty(data.id)) {
      // console.log("produit existant dans le localStorage");

      // On ajoute la quantité au produit (getProductsLocalStorage()[data.id].quantity) avec la quantité saisie par l'utilisateur du site (quantity).
      dataProduct.quantity =
        getProductsLocalStorage()[data.id].quantity + quantity;
      // console.log(dataProduct);
    }

    setProductLocalStorage(data.id, JSON.stringify(dataProduct));
  });
  //   console.log(localStorage);
};

export const removeItemPanier = () => {
  // console.log("removeItemPanier");
  // Bouton modal
  const buttonValidateRemoveItem = document.querySelector(".button__remove");
  buttonValidateRemoveItem.addEventListener("click", (event) => {
    // event.preventDefault();
    // alert("test");

    const id = buttonValidateRemoveItem.getAttribute("data-id");
    // console.log(id);

    // On supprime le produit du localStorage à l'id correspondant
    localStorage.removeItem(id);

    // Permet de recharger la page du navigateur automatiquement au bout de 800ms
    setTimeout(() => {
      window.location.reload();
    }, "800");
  });
};

export const addQuantityPanier = () => {
  // console.log("addQuantityPanier");

  const linksIconePlus = document.querySelectorAll(".link__icone__plus");
  linksIconePlus.forEach((link) => {
    // console.log(link);
    link.addEventListener("click", (event) => {
      // alert("test");
      // event.preventDefault();
      const id = link.getAttribute("data-id");
      const productPanier = localStorage.getItem(id);
      let parseObject = JSON.parse(productPanier);
      parseObject.quantity = parseObject.quantity + 1;
      const stringifyObject = JSON.stringify(parseObject);
      setProductLocalStorage(id, stringifyObject);

      // console.log(id);
      // console.log(parseObject);
    });
  });
};

export const removeQuantityPanier = () => {
  // console.log("removeQuantityPanier");

  const linksIconeMinus = document.querySelectorAll(".link__icone__minus");
  linksIconeMinus.forEach((link) => {
    link.addEventListener("click", (event) => {
      // event.preventDefault();
      // alert("test");

      const id = link.getAttribute("data-id");
      // console.log(id);
      const dataProduct = localStorage.getItem(id);
      // console.log(dataProduct);
      let parseObject = JSON.parse(dataProduct);

      if (parseObject.quantity == 1) {
        link.classList.add("user__select");
      } else {
        console.log(parseObject);
        parseObject.quantity = parseObject.quantity - 1;
        const stringifyObject = JSON.stringify(parseObject);
        setProductLocalStorage(id, stringifyObject);
      }
    });
  });
};

export const removeAllProductPanier = () => {
  // console.log("removeAllProductPanier");

  const buttonDeleteCart = document.querySelector(".button__delete__cart");
  buttonDeleteCart.addEventListener("click", (event) => {
    // alert("test");
    localStorage.clear();
  });
};
