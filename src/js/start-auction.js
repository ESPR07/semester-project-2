import { renderNav } from "./components/navbar.mjs";
import { burgerMenu } from "./components/navbar.mjs";
import { makeListing } from "./api/userInteractions/createListing.mjs";
import { imageURLTest } from "./components/validations.mjs";

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

const auctionForm = document.getElementById("startForm");

auctionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const image = document.getElementById("images").value.split(",");
  console.log(image);
  if (!imageURLTest(image) === true) {
    alert("Invalid URL('s)");
    return;
  }
  const description = document.getElementById("description").value;
  const endTime = document.getElementById("endTime").value;
  const endTimeInstance = new Date(endTime);
  makeListing(title, image, description, endTimeInstance);
});

const imageInput = document.getElementById("images");
imageInput.addEventListener("focusout", () => {
  const value = document.getElementById("images").value.split(",");
  console.log(value);
  const image = document.querySelector("img");
  image.src = value;
});
