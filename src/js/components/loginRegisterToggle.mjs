const loginMenu = document.getElementById("login");
const registerMenu = document.getElementById("register");

export function loginToggle() {
  if (loginMenu.classList.contains("translate-x-full")) {
    loginMenu.classList.toggle("hidden");
    setTimeout(() => {
      loginMenu.classList.toggle("translate-x-full");
      registerMenu.classList.add("translate-x-full");
    }, 10);
    setTimeout(() => {
      registerMenu.classList.add("hidden");
    }, 400);
  } else {
    loginMenu.classList.toggle("translate-x-full");
    registerMenu.classList.add("translate-x-full");
    setTimeout(() => {
      loginMenu.classList.toggle("hidden");
    }, 400);
  }
}

export function registerToggle() {
  if (registerMenu.classList.contains("translate-x-full")) {
    registerMenu.classList.toggle("hidden");
    setTimeout(() => {
      registerMenu.classList.toggle("translate-x-full");
      loginMenu.classList.add("translate-x-full");
      setTimeout(() => {
        loginMenu.classList.add("hidden");
      }, 400);
    }, 10);
  } else {
    registerMenu.classList.toggle("translate-x-full");
    loginMenu.classList.add("translate-x-full");
    setTimeout(() => {
      registerMenu.classList.toggle("hidden");
    }, 400);
  }
}
