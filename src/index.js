import "./Scss/styles.scss";
import "bootstrap";

import imagen1 from "./assets/unaño.png";
import imagen2 from "./assets/dosaños.png";
import imagen3 from "./assets/tresaños.png";

const buttons = document.querySelectorAll("[data-carousel-button]")

//Importacion de elementos imagenes

let foto1 = document.getElementById('imagen1');
let foto2 = document.getElementById('imagen2');
let foto3 = document.getElementById('imagen3');

let boton1 = document.getElementById('boton2');

foto1.src = imagen1;
foto2.src = imagen2;
foto3.src = imagen3;

function redirectPage1() {
    window.location.href = "page2.html";
  }

boton1.addEventListener("click", redirectPage1);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})