export function setToken(json) {
  if (json.accessToken === undefined) {
    alert("Login Information is incorrect.");
  } else {
    localStorage.setItem("accessToken", json.accessToken);
    localStorage.setItem("credits", json.credits);
    localStorage.setItem("name", json.name);
    if (json.avatar) {
      localStorage.setItem("avatar", json.avatar);
    }
  }
  location.reload();
}
