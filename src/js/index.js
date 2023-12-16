import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { loginEvent } from "./api/userStatus/login.mjs";
import { registerEvent } from "./api/userStatus/register.mjs";
import { renderListingsCard } from "./components/listingsCards.mjs";
import { listingsCardHTML } from "./components/listingsCards.mjs";
import { searchFilter } from "./api/userInteractions/search.mjs";
import {
  loginToggle,
  registerToggle,
} from "./components/loginRegisterToggle.mjs";
import { listingsURL } from "./api/urls.mjs";

const cardContainer = document.getElementById("cardsContainer");
const latestFetch =
  listingsURL + "?sort=created&sortOrder=desc&_bids=true&_active=true&limit=10";
const oldestFetch =
  listingsURL + "?sort=created&sortOrder=asc&_bids=true&_active=true&limit=10";

renderNav();
renderListingsCard(latestFetch);

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

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", async () => {
  const searchInput = document.getElementById("searchInput").value;
  const filteredArray = await searchFilter(searchInput);
  cardContainer.innerHTML = "";
  listingsCardHTML(filteredArray);
});

const sortByMenu = document.getElementById("sort");
sortByMenu.addEventListener("change", (event) => {
  const currentValue = event.target.value;
  if (currentValue === "Latest") {
    renderListingsCard(latestFetch);
  } else if (currentValue === "Oldest") {
    renderListingsCard(oldestFetch);
  }
});
