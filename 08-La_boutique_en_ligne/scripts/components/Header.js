export const Header = () => {
  return ` <header class="header">
        <div class="header__block">
          <a href="#" class="header__logo">
            <img src="assets/logos/logo_boutique.png" alt="logo" id="logoHome" class="logo" />
          </a>
          <div class="header__title">La sape de dingue</div>
        </div>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#" class="nav__link" id="navHome" >Home</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Panier</a>
            </li>
          </ul>
        </nav>
      </header>`;
};

export const returnMainHome = () => {
  // console.log("test returnMainHome");

  const mainHome = document.querySelector("#navHome");
  const logoHome = document.querySelector("#logoHome");

  // selection des éléments HTML avec les classes nav__link et logo pour appeler leur méthode addEventListener
  [mainHome, logoHome].forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      // alert("click");
      // console.log(element);
      // console.log(e);
      window.location.href = "index.html";
    });
  });
};

export const goCart = () => {
  const cartLink = document.querySelector(".nav__link:last-child");
  
  cartLink.addEventListener("click", (e) => {
    e.preventDefault();
    const cart = getCart();
    
    if (cart.length === 0) {
      alert("Votre panier est vide");
      return;
    }

    const total = getCartTotal();
    const cartContent = cart.map(item => 
      `${item.name} - ${item.price}€ x ${item.quantity} = ${item.price * item.quantity}€`
    ).join('\n');
    
    alert(`Contenu du panier :\n\n${cartContent}\n\nTotal : ${total}€`);
  });
};
