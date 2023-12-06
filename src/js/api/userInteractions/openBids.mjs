import { reformatTime } from "../../components/reformatTime.mjs";

export function showBids(location, bidsArray) {
  if (document.getElementById("bidsContainer")) {
    const removeContainer = document.getElementById("bidsContainer");
    removeContainer.remove();
  }
  const bidsContainer = document.createElement("table");
  bidsContainer.className = "w-full";
  bidsContainer.id = "bidsContainer";
  location.append(bidsContainer);

  if (bidsArray.length > 0) {
    bidsArray.forEach(({ bidderName, amount, created }) => {
      const arrayTable = document.createElement("tr");
      bidsContainer.append(arrayTable);

      const bidName = document.createElement("td");
      bidName.className = "text-lightBlue text-xl py-1 pr-2";
      bidName.innerText = bidderName;
      arrayTable.append(bidName);

      const bidValue = document.createElement("td");
      bidValue.className = "text-importantElement text-xl py-1";
      bidValue.innerText = `$${amount}`;
      arrayTable.append(bidValue);

      const bidTime = document.createElement("td");
      bidTime.className = "text-lightBlue text-xl py-1 pr-2 text-end";
      bidTime.innerText = reformatTime(created);
      arrayTable.append(bidTime);
    });
  } else {
    const noBidsText = document.createElement("td");
    noBidsText.className = "text-xl text-lightBlue";
    noBidsText.innerText = "No Bids to Show";
    bidsContainer.append(noBidsText);
  }
}
