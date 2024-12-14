export const Main = (data) => {
  // console.log(data);

  let cards = "";
  data.forEach((product) => {
    // console.log(product);
    cards += `
    
     <figure class="card">
            <img
              src="assets/images/products/${product.image}"
              alt="${product.image}"
              class="card__picture"
            />
            <figcaption class="card__legend">
              <h3 class="title__h3">${product.name}</h3>     
              <p class="card__price">${product.price} €</p>  
              <a href="product.html?id=${product.id}" class="card__link">Voir plus</a>
            </figcaption>
          </figure>

    `;
  });

  console.log(cards);

  return `     <main class="main__product">
        <h2 class="title__h2">Nos produits</h2>

        <div class="cards">

         ${cards}
         
        </div>
      </main>`;
};
