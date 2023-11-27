import { loginToggle } from "./components/loginRegisterToggle.mjs";
import { registerToggle } from "./components/loginRegisterToggle.mjs";
import { burgerMenu } from "./components/navbar.mjs";

const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");
const navToggle = document.getElementById("navToggle");

loginButton.addEventListener("click", loginToggle);
registerButton.addEventListener("click", registerToggle);

navToggle.addEventListener("click", burgerMenu);
