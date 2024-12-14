const BASE_URL = "data/data.json";

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
  // console.log("getProductsById");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  // console.log(id);
  // console.log(queryString);
  // console.log(urlParams);

  const products = await getProducts();
  // console.log(products);

  const data = products.filter((product) => {
    if (product.id == id) {
      return product;
    }
  });
  console.log(data);
};
