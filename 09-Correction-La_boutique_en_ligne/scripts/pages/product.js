import { getProductsById } from "../utils/Api.js";
import { Header } from "../components/Header.js";
import { Nav } from "../components/Nav.js";
import { MainProduct } from "../components/MainProduct.js";
import { Footer } from "../components/Footer.js";

const displayData = () => {
  const body = document.querySelector("body");
  body.innerHTML = `
      <div class="container">
      ${Header()}
      ${Nav()}
      ${MainProduct()}
      ${Footer()}
      </div>
  `;
};

(async () => {
  const data = await getProductsById();
//   console.log(data);
  displayData();
})();
