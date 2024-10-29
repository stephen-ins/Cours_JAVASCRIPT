console.log("test");

const itemBlock1 = document.querySelector(".background__lightblue");
console.log(itemBlock1);

itemBlock1.addEventListener("click", function () {
  //   console.log("test");
  console.log(this.classList[1]);

  let classeActuelle = this.classList[1];
  switch (classeActuelle) {
    case "background__lightblue":
      console.log("class background__lightblue ok !!");
      this.classList.remove("background__lightblue"); // supprime la classe CSS
      this.classList.add("background__lightcoral"); // on affecte la classe CSS
      break;
    case "background__lightcoral":
      console.log("class background__lightcoral ok !!");
      this.classList.remove("background__lightcoral");
      this.classList.add("background__orange");
      break;
    case "background__orange":
      this.classList.remove("background__orange");
      this.classList.add("background__purple");
      break;
    case "background__purple":
      this.classList.remove("background__purple");
      this.classList.add("background__lightblue");
      break;
    // default:
    //   break;
  }
});
