import { apiFetch } from "../api/fetch.mjs";
import { listingsURL } from "../api/urls.mjs";
import { placeBid } from "../api/userInteractions/placeBid.mjs";
import { countdownTimer } from "./countdownTimer.mjs";
import { registerToggle } from "./loginRegisterToggle.mjs";
import { showBids } from "../api/userInteractions/openBids.mjs";

const tokenCheck = localStorage.getItem("accessToken");

const getURL = new URLSearchParams(window.location.search);
const getParam = getURL.get("postID");
if (getParam === null) {
  location.href = "/index.html";
}
const productURL = `${listingsURL}/${getParam}?_bids=true&_seller=true`;

const productContainer = document.getElementById("productContainer");

function productHTML(json) {
  const productTitle = document.createElement("h1");
  productTitle.className = "md:text-6xl text-4xl mb-3 text-whiteTone";
  productTitle.innerText = json.title;
  productContainer.append(productTitle);

  const productInfoContainer = document.createElement("div");
  productContainer.append(productInfoContainer);

  const productSeller = document.createElement("p");
  productSeller.className = "text-importantElement text-lg";
  productSeller.innerText = json.seller.name;
  productInfoContainer.append(productSeller);

  const productSellerSpan = document.createElement("span");
  productSellerSpan.className = "text-lightBlue";
  productSellerSpan.innerText = "Seller: ";
  productSeller.prepend(productSellerSpan);

  const productContent = document.createElement("div");
  productContent.className = "flex md:flex-row flex-col";
  productInfoContainer.append(productContent);

  const contentLeftContainer = document.createElement("div");
  contentLeftContainer.className = "flex flex-col mr-5 md:w-2/6 w-full";
  productContent.append(contentLeftContainer);

  const image = document.createElement("img");
  image.src = json.media[0];
  image.onerror = () => {
    image.src = "/src/img/placeholder.png";
  };
  image.alt = json.title;
  contentLeftContainer.append(image);

  const timeLeftContainer = document.createElement("div");
  timeLeftContainer.className = "flex";
  contentLeftContainer.append(timeLeftContainer);

  const timeLeft = document.createElement("p");
  timeLeft.className = "text-importantElement text-xl py-1";
  countdownTimer(json.endsAt, timeLeft);
  timeLeftContainer.append(timeLeft);

  const timeLeftSpan = document.createElement("p");
  timeLeftSpan.className = "text-lightBlue text-xl py-1 pr-2";
  timeLeftSpan.innerText = "Time Left:";
  timeLeftContainer.prepend(timeLeftSpan);

  if (tokenCheck) {
    const biddingForm = document.createElement("form");
    biddingForm.className = "flex h-8 mb-2";
    biddingForm.id = "biddingForm";
    biddingForm.addEventListener("submit", () => {
      placeBid(biddingInput.value, getParam);
    });
    contentLeftContainer.append(biddingForm);

    const biddingInput = document.createElement("input");
    biddingInput.type = "text";
    biddingInput.className =
      "w-full dark:bg-inputBackgroundDark dark:text-whiteTone";
    biddingInput.addEventListener("keydown", (event) => {
      if (isNaN(event.key) && event.key !== "Backspace") {
        event.preventDefault();
      }
    });
    biddingForm.append(biddingInput);

    const biddingButton = document.createElement("button");
    biddingButton.className =
      "bg-importantElement hover:bg-lightBlue hover:text-whiteTone transition duration-300 w-36";
    biddingButton.innerText = "Place Bid";
    biddingForm.append(biddingButton);
  } else {
    const registerButton = document.createElement("button");
    registerButton.className =
      "bg-importantElement hover:bg-lightBlue hover:text-whiteTone transition duration-300 h-8 w-full";
    registerButton.innerText = "Register to bid";
    registerButton.addEventListener("click", registerToggle);
    contentLeftContainer.append(registerButton);
  }

  const bidValueContainer = document.createElement("div");
  bidValueContainer.className = "flex flex-col text-2xl text-whiteTone";
  contentLeftContainer.append(bidValueContainer);

  const bidValueText = document.createElement("p");
  bidValueText.innerText = "Highest Bid:";
  bidValueContainer.append(bidValueText);

  const bidDynamic = document.createElement("div");
  bidDynamic.className =
    "flex justify-between md:border-none border-b-2 border-importantElement pb-3 mb-3";
  bidValueContainer.append(bidDynamic);

  const highestBid = document.createElement("p");
  const sortedArray = json.bids.sort((b, a) => a.amount - b.amount);
  if (sortedArray.length === 0) {
    highestBid.innerText = "No Bids";
  } else {
    highestBid.innerText = `$${sortedArray[0].amount}`;
  }
  bidDynamic.append(highestBid);

  const bidsCount = document.createElement("p");
  bidsCount.classList.add("underline", "hover:cursor-pointer");
  if (json._count.bids === 1) {
    bidsCount.innerText = `${json._count.bids} Bid`;
  } else if (json._count.bids === 0) {
    bidsCount.innerText = "No Bids";
  } else {
    bidsCount.innerText = `${json._count.bids} Bids`;
  }
  bidsCount.addEventListener("click", () => {
    showBids(productInfoContainer, json.bids);
  });
  bidDynamic.append(bidsCount);

  const descriptionDiv = document.createElement("div");
  productContent.append(descriptionDiv);

  const descriptionText = document.createElement("p");
  descriptionText.className = "text-2xl text-whiteTone";
  descriptionText.innerText = json.description;
  descriptionDiv.append(descriptionText);
}

export function renderSingleProduct() {
  apiFetch(productURL, null, productHTML);
}
