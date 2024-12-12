const BASE_URL = "data/data.json";

export const getData = async () => {
  try {
    // l'API Fetch (récupérer) fournit une interface JavaScript pour accéder et manipuler des données.
    // Fetch() ici envoi une requête à partir d'une URL dans le fichier data.json afin de récupérer son contenu.
    // l'opérateur await permet d'attendre la résolution d'une promesse. Il ne peut être utilisé au sein une fonction asynchrone.
    // Si la requête est correcte, le status est à "200".
    const response = await fetch(BASE_URL);
    // console.log(response);
    // console.log(response.json());
    return response.json();
  } catch (error) {
    return new Error("Quelque chose ne va pas !");
  }
};

export const getProducts = async () => {
  const dataProducts = await getData();
  // console.log(dataProducts);

  // Paramètres de recherche de l'URL
  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // let product = urlParams.get("product");
  // console.log(product);

  // let data;

  // if (!product) {
  //   // console.log("pas de params dans l'url");
  //   // console.log(Object.keys(dataProducts)[0]);

  //   const index = Object.keys(dataProducts)[0];
  //   // console.log(index);
  //   data = dataProducts[index];
  //   product = index;
  //   // console.log(data);

  //   product = index;
  //   // console.log(index);
  //   // console.log(data);
  //   // console.log(product);
  // }

  // for (const key in dataProducts) {
  //   if (key === product) {
  //     // console.log("key :" + key);
  //     // console.log("product :" + product);

  //     // data =  dataProducts["key"];
  //     data = dataProducts[key];
  // console.log(data);

  // switch (product) {
  //   case "Chapeau":
  //     data = dataProducts.Chapeau;
  //     break;
  //   case "Pull":
  //     data = dataProducts.Pull;
  //     break;
  //   case "Chaussure":
  //     data = dataProducts.Chaussure;
  //     break;
  //   case "Chaussette":
  //     data = dataProducts.Chaussette;
  //     break;
  //   case "Robe":
  //     data = dataProducts.Robe;
  //     break;
  //   case "Tee-shirt":
  //     data = dataProducts.Tee_shirt;
  //     break;
  //   default:
  //     data = dataProducts.Chapeau;
  // }

  // return {
  //   name: product,
  //   data: data.products,
  // };
  //   }
  // }

  return dataProducts.products;
};

// console.log(getProducts());

// export const getProductById = () => {
//   // Récuperer les données d'un produit en fonction de son ID
//   console.log(getProductById(1));
// };
