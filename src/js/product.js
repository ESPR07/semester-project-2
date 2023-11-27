import { renderNav } from "./components/navbar.mjs";
import { loginToggle } from "./components/loginRegisterToggle.mjs";
import { registerToggle } from "./components/loginRegisterToggle.mjs";
import { burgerMenu } from "./components/navbar.mjs";

const accessToken = localStorage.getItem("accesstoken");

renderNav();

if (!accessToken) {
  const registerButton = document.getElementById("registerButton");
  const loginButton = document.getElementById("loginButton");
  loginButton.addEventListener("click", loginToggle);
  registerButton.addEventListener("click", registerToggle);
}

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);
