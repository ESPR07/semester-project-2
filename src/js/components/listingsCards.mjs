import { apiFetch } from "../api/fetch.mjs";
import { listingsURL } from "../api/urls.mjs";

const limitedFetch = listingsURL + "?limit=10";
const cardGrid = document.getElementById("cardsContainer");

function listingsCardHTML(json) {
  json.forEach(({ _count, created, endsAt, id, media, title }) => {
    const cardContainer = document.createElement("a");
    cardContainer.href = "/src/pages/product.html" + `?postID=${id}`;
    cardContainer.title = title;
    cardContainer.className = "flex flex-row w-auto bg-navColor";
    cardGrid.append(cardContainer);

    const cardImage = document.createElement("img");
    console.log(media[0]);
    cardImage.src = media[0];
    cardImage.onerror = () => {
      cardImage.src = "/src/img/placeholder.png";
    };
    cardImage.className = "w-1/2 object-cover object-center";
    cardContainer.append(cardImage);

    const cardContent = document.createElement("div");
    cardContent.className =
      "flex flex-col justify-between py-2 md:px-7 px-3 w-full";
    cardContainer.append(cardContent);

    const cardDateTitleContainer = document.createElement("div");
    cardDateTitleContainer.className = "md:mb-16 mb-7";
    cardContent.append(cardDateTitleContainer);

    const cardDate = document.createElement("p");
    cardDate.innerText = created;
    cardDateTitleContainer.append(cardDate);

    const cardTitle = document.createElement("h1");
    cardTitle.className = "md:text-4xl text-2xl";
    cardTitle.innerText = title;
    cardDateTitleContainer.append(cardTitle);

    const timeLeftContainer = document.createElement("div");
    timeLeftContainer.className =
      "flex flex-row flex-wrap justify-between border-b-2 border-importantElement text-importantElement mb-1";
    cardContent.append(timeLeftContainer);

    const cardTimeLeft = document.createElement("p");
    cardTimeLeft.innerText = endsAt;
    timeLeftContainer.append(cardTimeLeft);

    const cardTimeLeftSpan = document.createElement("span");
    cardTimeLeftSpan.className = "text-lightBlue";
    cardTimeLeftSpan.innerText = "Time Left: ";
    cardTimeLeft.prepend(cardTimeLeftSpan);

    const currentBidContainer = document.createElement("div");
    cardContent.append(currentBidContainer);

    const currentBidText = document.createElement("p");
    currentBidText.innerText = "Current Bid: (Remove or fix!)";
    currentBidContainer.append(currentBidText);

    const currentBidInfoContainer = document.createElement("div");
    currentBidInfoContainer.className =
      "flex justify-between md:text-2xl text-lg flex-wrap mb-2";
    currentBidContainer.append(currentBidInfoContainer);

    //This need to either be removed or fixed
    const currentBidAmount = document.createElement("p");
    currentBidAmount.innerText = "$100,000";
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
