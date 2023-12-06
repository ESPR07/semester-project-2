import { apiFetch } from "../api/fetch.mjs";
import { listingsURL } from "../api/urls.mjs";
import { reformatTime } from "./reformatTime.mjs";
import { countdownTimer } from "./countdownTimer.mjs";

const limitedFetch =
  listingsURL + "?sort=created&sortOrder=desc&_bids=true&_active=true";
const cardGrid = document.getElementById("cardsContainer");

export function listingsCardHTML(json) {
  json.forEach(({ _count, created, endsAt, id, media, title, bids }) => {
    const cardContainer = document.createElement("a");
    cardContainer.href = "/src/pages/product.html" + `?postID=${id}`;
    cardContainer.title = title;
    cardContainer.className = "flex flex-row w-auto bg-navColor max-h-96";
    cardGrid.append(cardContainer);

    const cardImage = document.createElement("img");
    cardImage.src = media[0];
    if (media.length <= 0) {
      cardImage.src = "/src/img/placeholder.png";
    }
    cardImage.className = "w-1/3 object-cover object-center";
    cardContainer.append(cardImage);

    const cardContent = document.createElement("div");
    cardContent.className =
      "flex flex-col justify-between py-2 md:px-7 px-3 w-2/3";
    cardContainer.append(cardContent);

    const cardDateTitleContainer = document.createElement("div");
    cardDateTitleContainer.className = "md:mb-20 mb-7 overflow-hidden";
    cardContent.append(cardDateTitleContainer);

    const cardDate = document.createElement("p");
    const formattedTime = reformatTime(created);
    cardDate.innerText = formattedTime;
    cardDateTitleContainer.append(cardDate);

    const cardTitle = document.createElement("h1");
    cardTitle.className = "md:text-4xl text-2xl break-words hyphens-auto";
    cardTitle.innerText = title;
    cardDateTitleContainer.append(cardTitle);

    const timeLeftContainer = document.createElement("div");
    timeLeftContainer.className =
      "flex flex-row flex-wrap justify-between border-b-2 border-importantElement text-importantElement mb-1";
    cardContent.append(timeLeftContainer);

    const cardTimeLeft = document.createElement("p");
    countdownTimer(endsAt, cardTimeLeft);
    timeLeftContainer.append(cardTimeLeft);

    const cardTimeLeftSpan = document.createElement("p");
    cardTimeLeftSpan.className = "text-lightBlue";
    cardTimeLeftSpan.innerText = "Time Left: ";
    timeLeftContainer.prepend(cardTimeLeftSpan);

    const currentBidContainer = document.createElement("div");
    cardContent.append(currentBidContainer);

    const currentBidText = document.createElement("p");
    currentBidText.innerText = "Highest Bid:";
    currentBidContainer.append(currentBidText);

    const currentBidInfoContainer = document.createElement("div");
    currentBidInfoContainer.className =
      "flex justify-between md:text-2xl text-lg flex-wrap mb-2";
    currentBidContainer.append(currentBidInfoContainer);

    const currentBidAmount = document.createElement("p");
    const sortedArray = bids.sort((b, a) => a.amount - b.amount);
    if (sortedArray.length === 0) {
      currentBidAmount.innerText = "No Bids";
    } else {
      currentBidAmount.innerText = `$${sortedArray[0].amount}`;
    }
    currentBidInfoContainer.append(currentBidAmount);

    const currentBidCount = document.createElement("p");
    currentBidCount.innerText = `Bids: ${_count.bids}`;
    currentBidInfoContainer.append(currentBidCount);

    const enterAuctionButton = document.createElement("button");
    enterAuctionButton.className =
      "bg-importantElement text-xl rounded-md py-1 hover:bg-lightBlue transition duration-500";
    enterAuctionButton.innerText = "Enter Auction";
    cardContent.append(enterAuctionButton);
  });
}

export async function renderListingsCard() {
  apiFetch(limitedFetch, null, listingsCardHTML);
}
