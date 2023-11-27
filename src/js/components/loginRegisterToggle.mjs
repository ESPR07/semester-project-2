const loginMenu = document.getElementById("login");
const registerMenu = document.getElementById("register");

export function loginToggle() {
  loginMenu.classList.toggle("translate-x-full");
  registerMenu.classList.add("translate-x-full");
}

export function registerToggle() {
  registerMenu.classList.toggle("translate-x-full");
  loginMenu.classList.add("translate-x-full");
}