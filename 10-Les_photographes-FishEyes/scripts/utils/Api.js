const BASE_URL = "data/photographers.json";

export const getData = async () => {
  try {
    // fetch(BASE_URL) permet de récupérer les données depuis le fichier data.json en fonction de l'URL.
    // Fetch envoie une requête HTTP dans le fichier data.json afin de récupérer les données du fichier.
    const response = await fetch(BASE_URL);
    // console.log(response);

    return response.json();
  } catch (error) {
    return new Error("Erreur lors de la récupération des données");
  }
};

export const getProducts = async () => {
  const data = await getData();
  // console.log(data.products);
  return data.products;
};

export const getProductsById = async () => {
  // Windows.location.search permet de récupérer les paramêtres de recherche dans l'URL (ex: ?id=243)
  // console.log("getProductsById");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // Permet de récupérer uniquement la valeur de l'indice ?id= dans l'URL.
  const id = urlParams.get("id");
  // console.log(id);
  // console.log(queryString);
  // console.log(urlParams);

  const products = await getProducts();
  // console.log(products);
  // filter : fonction qui permet de filtrer un résultat en fonction d'une condition
  const data = products.filter((product) => {
    // Si l'ID du produit est égal à l'id du produit dans l'URL (?id=243), alors on retourne le produit.
    if (product.id == id) {
      return product;
    }
  });
  // console.log(data);

  // La fonction doit retourner quelque chose
  return data[0];
};

export const setProductLocalStorage = (id, arrayProduct) => {
  localStorage.setItem(id, arrayProduct);
};

export const getProductsLocalStorage = () => {
  // console.log(localStorage);

  const items = { ...localStorage };
  // console.log(items);
  let itemsPanier = {};

  //           124    L'ensemble des produits du panier
  for (const key in items) {
    // console.log(key);
    //              items[124]
    //              items[243]
    //              items[789]
    // console.log(items[key]);
    // JSON.parse permet de convertir une chaîne en objet JavaScript que nous pouvons manipuler pour afficher les données.
    itemsPanier[key] = JSON.parse(items[key]);
  }
  // console.log(itemsPanier);
  return itemsPanier;
};
