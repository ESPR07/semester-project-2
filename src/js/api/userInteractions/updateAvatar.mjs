import { apiFetch } from "../fetch.mjs";
import { profileURL } from "../urls.mjs";

const accessToken = localStorage.getItem("accessToken");
const userName = localStorage.getItem("name");
const fullURL = `${profileURL}/${userName}/media`;

export async function updateAvatar(avatarURL) {
  const apiInfo = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      avatar: avatarURL,
    }),
  };
  apiFetch(fullURL, apiInfo, () => {
    localStorage.setItem("avatar", avatarURL);
    alert("Successfully Updated Profile Image.");
    window.location.reload();
  });
}
