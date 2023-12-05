import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { makeListing } from "./api/userInteractions/createListing.mjs";

const accessToken = localStorage.getItem("accessToken");

if (accessToken === null) {
  alert(
    "You need to be logged in to start an auctions. Redirecting you to home page."
  );
  window.location.href = "../../index.html";
}

renderNav();

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", burgerMenu);

const submitButton = document.getElementById("makeAuctionButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const image = document.getElementById("images").value;
  const description = document.getElementById("description").value;
  const endTime = document.getElementById("endTime").value;
  const endTimeInstance = new Date(endTime);

  makeListing(title, image, description, endTimeInstance);
});
