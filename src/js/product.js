import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { loginEvent } from "./api/userStatus/login.mjs";
import { registerEvent } from "./api/userStatus/register.mjs";
import { renderSingleProduct } from "./components/singleProduct.mjs";
import { registerToggle } from "./components/loginRegisterToggle.mjs";
import { loginToggle } from "./components/loginRegisterToggle.mjs";

const accessToken = localStorage.getItem("accesstoken");

renderNav();
renderSingleProduct();

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);

const loginClose = document.getElementById("loginClose");
loginClose.addEventListener("click", loginToggle);

const registerClose = document.getElementById("registerClose");
registerClose.addEventListener("click", registerToggle);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginEvent);

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registerEvent);
