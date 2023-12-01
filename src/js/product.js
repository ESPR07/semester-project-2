import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { loginEvent } from "./api/userStatus/login.mjs";
import { registerEvent } from "./api/userStatus/register.mjs";
import { renderSingleProduct } from "./components/singleProduct.mjs";

const accessToken = localStorage.getItem("accesstoken");

renderNav();
renderSingleProduct();

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginEvent);

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registerEvent);
