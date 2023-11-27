import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";

const accessToken = localStorage.getItem("accesstoken");

renderNav();

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);
