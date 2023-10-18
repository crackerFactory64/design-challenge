const hamburgerButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("closed");
  hamburgerButton.classList.toggle("close");
}

hamburgerButton.addEventListener("click", toggleMenu);
