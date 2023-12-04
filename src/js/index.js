import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { loginEvent } from "./api/userStatus/login.mjs";
import { registerEvent } from "./api/userStatus/register.mjs";
import { renderListingsCard } from "./components/listingsCards.mjs";
import { listingsCardHTML } from "./components/listingsCards.mjs";
import { searchFilter } from "./api/userInteractions/search.mjs";

const accessToken = localStorage.getItem("accesstoken");
const cardContainer = document.getElementById("cardsContainer");

renderNav();
renderListingsCard();

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginEvent);

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registerEvent);

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", async () => {
  const searchInput = document.getElementById("searchInput").value;
  const filteredArray = await searchFilter(searchInput);
  cardContainer.innerHTML = "";
  listingsCardHTML(filteredArray);
});
