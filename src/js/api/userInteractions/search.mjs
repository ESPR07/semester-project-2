import { apiFetch } from "../fetch.mjs";
import { listingsURL } from "../urls.mjs";

const searchURL = `${listingsURL}?_bids=true&_seller=true`;

export async function searchFilter(inputValue) {
  event.preventDefault();
  const fetchedArray = await apiFetch(searchURL, null, (json) => {
    const newArray = json.filter(
      (listing) =>
        listing.title.toLowerCase().includes(inputValue) ||
        listing.seller.name.toLowerCase().includes(inputValue)
    );
    return newArray;
  });
  return fetchedArray;
}
