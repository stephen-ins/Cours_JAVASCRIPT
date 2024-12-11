export const Main = (datas) => {
  // console.log(datas);

  return ` <main class="main">
        <div class="card__content">
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/chapeau.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Chapeau</h3>
            </a>
            <button data-product-id="243" class="button__submit">Voir plus</button>
          </div>
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/pull.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Pull</h3>
            </a>
            <button data-product-id="124" class="button__submit">Voir plus</button>
          </div>
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/chaussure.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Chaussures</h3>
            </a>
            <button data-product-id="789" class="button__submit">Voir plus</button>
          </div>
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/chaussette.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Chaussettes</h3>
            </a>
            <button data-product-id="568" class="button__submit">Voir plus</button>
          </div>
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/robe.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Robe</h3>
            </a>
            <button data-product-id="258" class="button__submit">Voir plus</button>
          </div>
          <div class="card__item">
            <a href="#" class="item">
              <img
                src="assets/images/products/tee-shirt.jpg"
                alt="photo"
                class="img__product"
              />
              <h3 class="item__title">Tee-shirt</h3>
            </a>
            <button data-product-id="369" class="button__submit">Voir plus</button>
          </div>
        </div>
      </main> `;
};

// remplacer le contenu de la div card__content par le contenu du productHTML (card__product) qui est un template string.

export const displayProductDetails = (product) => {
  console.log("test fonction displayProductDetails");

  // au click sur le bouton Voir plus, on affiche les détails du produit
  const buttonVoirPlus = document.querySelectorAll(".button__submit");
  // console.log(buttonVoirPlus);

  buttonVoirPlus.forEach((button) => {
    button.addEventListener("click", (e) => {
      // console.log(e.target);
      // console.log(e.target.dataset.productId);

      // récupérer le produit à partir de l'id ainsi que le nom du produit
      const productId = e.target.dataset.productId;
      const productName =
        e.target.parentElement.querySelector(".item__title").innerText;
      const productTitle =
        e.target.parentElement.querySelector(".item").innerText;

      console.log(productId);
      console.log(productName);
      console.log(productTitle);

      // afficher les détails du produit dans la div card__product
      const productDetails = document.querySelector(".card__content");
      console.log(productDetails);
      console.log("test");

      productDetails.classList.remove("card__content");
      productDetails.classList.add("card__product");

      return `
      <div class="card__product">
      <div class="img__product__content">
      <img
      src="assets/images/products/chapeau.jpg"
      alt="photo"
      class="img__product__focus"
      />
      </div>
      <div class="product__description__content">
      <h3 class="item__title__product"></h3>
      <div class="item__title__description">
      </div>
      <div class="price__product"></div>
      <p class="description__paragraph">
      </p>
      </div>
      </div>
    `;
    });
  });
};
