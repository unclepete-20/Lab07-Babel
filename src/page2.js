import "./Scss/page2.scss";
import "bootstrap";

const buttons = document.querySelectorAll("[data-carousel-button]")


let boton1 = document.getElementById('boton3');

function redirectPage1() {
    window.location.href = "index.html";
  }

boton1.addEventListener("click", redirectPage1);
