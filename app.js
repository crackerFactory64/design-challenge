const hamburgerButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("closed");
  hamburgerButton.classList.toggle("close");
}

hamburgerButton.addEventListener("click", toggleMenu);

setTimeout(() => {
  document.querySelector(".main__content").classList.add("animate");
}, 1);

setTimeout(() => {
  document.querySelector(".main__arrow").classList.add("animate");
}, 1000);
