export const initModal = () => {
  const modal = document.querySelector(".contact__button");
  modal.addEventListener("click", (event) => {
    event.preventDefault();
    // alert("click");
  });

  return `
  
  <section
  class="modal"
  id="contact_modal"
  aria-hidden="true"
  role="dialog"
  aria-labelledby="modal-title"
>
  <div class="modal__content">
    <header class="modal__header">
      <h2 id="modal-title">Contactez-moi</h2>
      <p class="name__contact__modale">Prenom Nom</p>

      <button class="modal__close" aria-label="Fermer la modale">
        <i class="fas fa-times"></i>
      </button>
    </header>

    <form class="modal__contact">
      <div class="form-group">
        <label for="prenom" class="label">Prénom</label>
        <input type="text" id="prenom" name="prenom" required />
      </div>

      <div class="form-group">
        <label for="nom" class="label">Nom</label>
        <input type="text" id="nom" name="nom" required />
      </div>

      <div class="form-group">
        <label for="email" class="label">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="message" class="label">Votre message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit" class="submit-button">Envoyer</button>
    </form>
  </div>
</section>
  
  `;
};

// export const ModalIn = () => {
//   const iconesDeleteItem = document.querySelectorAll(".icone__delete__item");
//   const modal = document.querySelector(".modal");
//   const buttonValidateRemoveItem = document.querySelector(".button__remove");
//   iconesDeleteItem.forEach((item) => {
//     item.addEventListener("click", (event) => {
//       event.preventDefault();
//       const id = item.getAttribute("data-id");
//       console.log(id);
//       modal.classList.add("modalIn");
//       modal.children[0].innerText =
//         "Voulez-vous réellement supprimer ce produit ?";
//       buttonValidateRemoveItem.setAttribute("data-id", id);
//     });
//   });
// };
