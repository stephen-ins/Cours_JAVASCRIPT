export const MainProduct = () => {
  let options = "";

  //                1
  for (let i = 1; i <= 20; i++) {
    options += `<option value="${i}">${i}</option>;`;
  }
//   console.log(options);

  return `

    <main class="main__product">
      <h2 class="title__h2">Chapeau</h2>
        <section class="product">
        <img
          src="assets/images/products/chapeau.jpg"
          class="picture__product"
          alt=""
        />
        <div class="product__details">
          <h3 class="title__product">Titre</h3>
          <p class="product__price">19.99€</p>
          <p class="product__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            odit esse a vitae nulla odio sapiente ut possimus quis nihil quam
            quasi, laudantium voluptates modi hic corrupti vero, eligendi nemo
            sit, aperiam facilis enim beatae quia! Magnam eaque porro debitis,
            beatae ex numquam expedita placeat facere ratione ad, labore
            dignissimos?
          </p>
          <div>

              <form method="post" action="panier.html" class="add__panier">
                <label for="quantity">Quantité</label>
                <select class="quantity">
                ${options}
                </select>
                <a href="panier.html" class="button__panier">Ajouter au panier</a>
              </form>
            </div>
          
        </div>
      </section>
      </main>

    `;
};
