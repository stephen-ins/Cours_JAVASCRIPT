// Synchroniser les hauteurs de .aside__menu et .page1
function synchroHauteur() {
  const page1 = document.querySelector(".page1");
  const asideMenu = document.querySelector(".aside__menu");
  asideMenu.style.height = `${page1.offsetHeight}px`;
}

// Appeler la fonction pour synchroniser les hauteurs au chargement de la page
window.onload = synchroHauteur;
// Appeler la fonction pour synchroniser les hauteurs lorsque la taille de la fenêtre change
window.onresize = synchroHauteur;
