import { registerURL } from "../urls.mjs";
import { apiFetch } from "../fetch.mjs";
import { setToken } from "./setToken.mjs";

export async function registerEvent(e) {
  e.preventDefault();
  const registerName = document.getElementById("registerName");
  const registerEmail = document.getElementById("registerEmail");
  const registerPassword = document.getElementById("registerPassword");
  const registerAvatar = document.getElementById("registerAvatar");

  const fetchRequest = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: registerName.value,
      email: registerEmail.value,
      password: registerPassword.value,
      avatar: registerAvatar.value,
    }),
  };

  apiFetch(registerURL, fetchRequest, setToken);
}
