import { loginURL } from "./urls.mjs";
import { apiFetch } from "./fetch.mjs";
import { setToken } from "./setToken.mjs";

export async function loginEvent(e) {
  e.preventDefault();
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  const fetchRequest = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  };
  apiFetch(loginURL, fetchRequest, setToken);
}
