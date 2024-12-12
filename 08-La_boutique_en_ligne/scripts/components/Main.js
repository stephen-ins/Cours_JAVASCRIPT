export const Main = (datas) => {
  console.log(datas);

  let cardsProduct = "";
  datas.forEach((product) => {
    console.log(product);

    cardsProduct += `
        <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/${product.image}"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">${product.name}</h3>
            </a>
            <a href="product.html?id=${product.id}" data-product-id="243" class="button__submit">Voir plus</a>
          </div>
    `;
  });
  console.log(cardsProduct);

  return ` <main class="main">
        <div class="card__content">
          ${cardsProduct}
        </div>
      </main> `;
};
