export const MainProduct = (selectedProduct) => {
  return `<main class="main">
  <div class="card__product">
    <div class="img__product__content">
      <img
        src="assets/images/products/${selectedProduct.image}"
        alt="${selectedProduct.alt}"
        class="img__product__focus"
      />
    </div>
    <div class="product__description__content">
      <h3 class="item__title__product">${selectedProduct.name}</h3>
      <div class="item__title__description">${selectedProduct.title}</div>
      <div class="price__product">${selectedProduct.price} €</div>
      <p class="description__paragraph">${selectedProduct.description}</p>

      <div class="command__content">
        <div class="quantity">
          <div class="quantity__item">
            Quantité :
            <div class="quantity__input">
              <input type="number" min="1" max="10" value="1" />
            </div>
          </div>
        </div>
        <div class="button__command">
          <button class="button__command-add">Ajouter au panier</button>
          <button class="button__command-remove">Retirer</button>
        </div>
      </div>
    </div>
  </div>
</main>`;
};

// Cette ligne de code appelle la fonction MainProduct en lui passant deux arguments : null et products.
// La fonction MainProduct est responsable d'afficher les détails d'un produit lorsque l'utilisateur clique sur le bouton "Voir plus".
// Le premier argument, null, n'est pas utilisé dans cette fonction, mais il est passé pour respecter la signature de la fonction.
// Le deuxième argument, products, est un objet contenant les données des produits, qui est utilisé pour trouver et afficher les détails du produit sélectionné.

// export const MainProduct = (product, datas) => {
//   // console.log("test fonction displayProductDetails");

//   // au click sur le bouton Voir plus, on affiche les détails du produit
//   const buttonVoirPlus = document.querySelectorAll(".button__submit");
//   // console.log(buttonVoirPlus);

//   buttonVoirPlus.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       // Récupère l'identifiant du produit à partir de l'attribut data-product-id du bouton cliqué et le convertit en entier
//       const productId = parseInt(e.target.dataset.productId);

//       // Sélectionne l'élément HTML avec la classe card__content qui contiendra les détails du produit
//       const productDetails = document.querySelector(".card__content");

//       // Trouver le produit dans le tableau products
//       // Le code ci-dessous trouve le produit correspondant à l'identifiant du produit cliqué dans le tableau des produits.
//       // La méthode find() est utilisée pour parcourir le tableau des produits et retourner le premier produit dont l'identifiant correspond à productId.
//       // Si un produit correspondant est trouvé, il est stocké dans la variable selectedProduct.
//       const selectedProduct = datas.products.find(
//         (product) => product.id === productId
//       );

//       if (selectedProduct) {
//         productDetails.classList.remove("card__content");
//         productDetails.classList.add("card__product");

//         productDetails.innerHTML = `
//             <div class="card__product">
//               <div class="img__product__content">
//                 <img
//                   src="assets/images/products/${selectedProduct.image}"
//                   alt="${selectedProduct.alt}"
//                   class="img__product__focus"
//                 />
//               </div>
//               <div class="product__description__content">
//                 <h3 class="item__title__product">${selectedProduct.name}</h3>
//                 <div class="item__title__description">${selectedProduct.title}</div>
//                 <div class="price__product">${selectedProduct.price} €</div>
//                 <p class="description__paragraph">${selectedProduct.description}</p>

//                  <div class="command__content">
//               <div class="quantity">
//                 <div class="quantity__item">
//                   Quantité :
//                   <div class="quantity__input">
//                     <input type="number" min="1" max="10" value="1" />
//                   </div>
//                 </div>
//               </div>
//               <div class="button__command">
//                 <button class="button__command-add">Ajouter au panier</button>
//                 <button class="button__command-remove">Retirer</button>
//               </div>
//             </div>
//             </div>
//               </div>

//             </div>
//           `;

//         const quantityInput = productDetails.querySelector(
//           ".quantity__input input"
//         );

//         const increaseQuantityButton = productDetails.querySelector(
//           ".button__command-remove"
//         );

//         const addCartButton = productDetails.querySelector(
//           ".button__command-add"
//         );

//         // Ajout écouteur d'événement sur le bouton "Retirer"
//         increaseQuantityButton.addEventListener("click", () => {
//           const currentValue = parseInt(quantityInput.value);
//           if (currentValue > 1) {
//             quantityInput.value = currentValue - 1;
//           } else {
//             alert("Vous ne pouvez pas commander moins de 1 article");
//           }
//         });

//         // Ajout écouteur d'événement sur le bouton "Ajouter au panier"
//         addCartButton.addEventListener("click", () => {
//           //
//           const quantity = parseInt(quantityInput.value);
//           console.log(quantity);
//           addToCart(selectedProduct, quantity);
//         });
//       }
//     });
//   });
// };

// export const MainProduct = () => {
//   return ` <main class="main">
// <div class="card__product">
//   <div class="img__product__content">
//     <img
//       src="assets/images/products/${selectedProduct.image}"
//       alt="${selectedProduct.alt}"
//       class="img__product__focus"
//     />
//   </div>
//   <div class="product__description__content">
//     <h3 class="item__title__product">${selectedProduct.name}</h3>
//     <div class="item__title__description">${selectedProduct.title}</div>
//     <div class="price__product">${selectedProduct.price} €</div>
//     <p class="description__paragraph">${selectedProduct.description}</p>

//     <div class="command__content">
//       <div class="quantity">
//         <div class="quantity__item">
//           Quantité :
//           <div class="quantity__input">
//             <input type="number" min="1" max="10" value="1" />
//           </div>
//         </div>
//       </div>
//       <div class="button__command">
//         <button class="button__command-add">Ajouter au panier</button>
//         <button class="button__command-remove">Retirer</button>
//       </div>
//     </div>
//   </div>
// </div>
// </main> `;
// };
