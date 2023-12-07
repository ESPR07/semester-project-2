import { apiFetch } from "../fetch.mjs";
import { listingsURL } from "../urls.mjs";

const userCredit = localStorage.getItem("credits");
const token = localStorage.getItem("accessToken");

export async function placeBid(inputValue, id) {
  event.preventDefault();
  const header = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      amount: Number(inputValue),
    }),
  };

  if (Number(userCredit) >= Number(inputValue)) {
    apiFetch(`${listingsURL}/${id}/bids`, header, () => {
      alert(`Thank you! You have now bid $${inputValue} on this product.`);
      localStorage.setItem("credits", userCredit - inputValue);
      window.location.reload();
    });
  } else {
    const errorMessage = document.getElementById("bidsErrorMessage");
    errorMessage.classList.toggle("hidden");
  }
}
