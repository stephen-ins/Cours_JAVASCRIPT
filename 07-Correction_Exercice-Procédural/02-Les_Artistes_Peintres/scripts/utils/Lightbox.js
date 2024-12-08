// Exo : Créer une livebox qui affiche le tableau du peintre qui a été choisi en cliquant dessus sur le lien, l'image s'aggrandit et la description s'affiche.

// export const lightBox = () => {
//   const scaleCard = document.querySelectorAll(".card");
//   console.log(scaleCard);
//   scaleCard.forEach((card) => {
//     card.addEventListener("click", function (event) {
//       console.log(event.target);
//       card.classList.add("scaleCard");
//       card.querySelector(".card__legend").classList.add("show");
//     });
//   });
// };

export const lightBox = () => {
  const scaleCard = document.createElement("div");
  const clickTableau = document.querySelectorAll(".peinture__picture");
  clickTableau.forEach((card) =>
    card.addEventListener("click", () => {
      document.body.appendChild(scaleCard);
      scaleCard.classList.add("lightbox");
      scaleCard.classList.add("lightbox__active");
      console.log(scaleCard);
      console.log(clickTableau);
    })
  );

  window.addEventListener("click", (e) => {
    if (e.target === scaleCard) {
      scaleCard.remove();
    }
    // scaleCard.classList.remove("lightbox__active");
  });
};
