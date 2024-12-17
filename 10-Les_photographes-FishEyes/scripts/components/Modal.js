export const Modal = () => {
  return `
  
 <div class="modal">
            <h1 class="modal__title">Voulez-vous réellement retirer ce produit de votre panier ?</h1>
            <button class="button__remove">CONTINUER</button>
        </div>

  `;
};

export const ModalIn = () => {
  //   console.log("ModalIn");

  const iconeDeleteItem = document.querySelectorAll(".icone__delete__item");
  const modal = document.querySelector(".modal");
  const buttonValidateRemoveItem = document.querySelector(".button__remove");

  iconeDeleteItem.forEach((item) => {
    // console.log(item);

    item.addEventListener("click", (event) => {
      event.preventDefault();
      //   console.log(event.target);
      // alert("click tash");

      const id = item.getAttribute("data-id");
      // console.log(id);
      modal.classList.add("modalIn");
      // console.log(modal.children);
      modal.children[0].innerText =
        "Voulez-vous réellement supprimer ce produit ?";
      buttonValidateRemoveItem.setAttribute("data-id", id);
    });
  });
};
