import { apiFetch } from "../fetch.mjs";
import { listingsURL } from "../urls.mjs";

const accessToken = localStorage.getItem("accessToken");

export function makeListing(title, image, description, endTime) {
  const fetchInfo = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      tags: [],
      media: [image],
      endsAt: endTime,
    }),
  };
  apiFetch(listingsURL, fetchInfo, () => {
    alert("Successfully Made a Post.");
  });
}
