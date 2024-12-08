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
    return new Error("Quelque chose ne va pas.");
  }
};

export const getPeintres = async () => {};

export const getTableauxByPeintre = async () => {};
