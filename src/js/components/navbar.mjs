import { logout } from "../api/userStatus/logout.mjs";
import { loginToggle } from "./loginRegisterToggle.mjs";
import { registerToggle } from "./loginRegisterToggle.mjs";
import { updateAvatar } from "../api/userInteractions/updateAvatar.mjs";

export function renderNav() {
  const body = document.querySelector("body");

  const navElement = document.createElement("nav");
  navElement.className =
    "flex flex-col md:flex-row justify-between items-center px-5 gap-5 bg-navColor text-importantElement text-xl border-b-2 border-importantElement z-10 sticky top-0";
  body.prepend(navElement);

  const mobileContainer = document.createElement("div");
  mobileContainer.className =
    "flex justify-between items-center md:w-20 w-full";
  navElement.append(mobileContainer);

  const burgerIcon = document.createElement("div");
  burgerIcon.className =
    "bg-burgerIcon bg-contain bg-no-repeat bg-center w-12 h-16 mr- md:hidden flex cursor-pointer";
  burgerIcon.id = "navToggle";
  mobileContainer.append(burgerIcon);

  const navLogo = document.createElement("a");
  navLogo.href = "/index.html";
  navLogo.title = "Home Page";
  navLogo.className =
    "bg-logo bg-contain bg-no-repeat bg-center w-20 h-20 hover:scale-125 transition duration-300";
  mobileContainer.append(navLogo);

  const navMain = document.createElement("div");
  navMain.id = "navCollapse";
  navMain.className =
    "md:flex flex hidden md:flex-row flex-col w-full justify-between items-center gap-5 relative";
  navElement.append(navMain);

  const listings = document.createElement("a");
  listings.href = "/index.html";
  listings.title = "Listings Page";
  listings.className =
    "px-2 flex md:h-20 items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_100px] hover:bg-[length:100px_100px] bg-no-repeat hover:text-navColor transition-all duration-500";
  listings.innerText = "Listings";
  navMain.append(listings);

  const searchForm = document.createElement("form");
  searchForm.className = "flex w-1/2 mx-3 h-1/2";
  searchForm.id = "searchForm";
  navMain.append(searchForm);

  const searchInput = document.createElement("input");
  searchInput.className =
    "w-full dark:bg-inputBackgroundDark dark:text-whiteTone";
  searchInput.id = "searchInput";
  searchInput.ariaLabel = "Search Value";
  searchForm.append(searchInput);

  const searchButton = document.createElement("button");
  searchButton.className =
    "bg-importantElement bg-searchIcon bg-no-repeat bg-center text-whiteTone px-3 w-10";
  searchButton.name = "Search Button";
  searchButton.title = "search";
  searchForm.append(searchButton);

  const tokenCheck = localStorage.getItem("accessToken");

  if (!tokenCheck) {
    const loggedOutNav = document.createElement("ul");
    loggedOutNav.className =
      "md:h-20 flex flex-col md:flex-row gap-5 items-center text-center";
    navMain.append(loggedOutNav);

    const loginContainer = document.createElement("li");
    loginContainer.className = "md:h-20 flex";
    loggedOutNav.append(loginContainer);

    const loginButton = document.createElement("button");
    loginButton.id = "loginToggle";
    loginButton.className =
      "h-full px-2 flex items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_200px] hover:bg-[length:200px_200px] bg-no-repeat hover:text-navColor transition-all duration-500";
    loginButton.innerText = "Login";
    loginButton.name = "Open Login Menu";
    loginButton.addEventListener("click", loginToggle);
    loginContainer.append(loginButton);

    const registerContainer = document.createElement("li");
    registerContainer.className = "md:h-20 flex";
    loggedOutNav.append(registerContainer);

    const registerButton = document.createElement("button");
    registerButton.id = "registerMenuToggle";
    registerButton.className =
      "h-full px-2 mb-5 flex items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_200px] hover:bg-[length:200px_200px] bg-no-repeat hover:text-navColor transition-all duration-500";
    registerButton.innerText = "Register";
    registerButton.name = "Register Button";
    registerButton.addEventListener("click", registerToggle);
    registerContainer.append(registerButton);
  } else {
    const loggedInNav = document.createElement("ul");
    loggedInNav.className =
      "md:h-20 flex flex-col md:flex-row gap-5 items-center text-center";
    navMain.append(loggedInNav);

    const startAuctionContainer = document.createElement("li");
    startAuctionContainer.className = "md:h-20 flex";
    loggedInNav.append(startAuctionContainer);

    const startAuction = document.createElement("a");
    startAuction.href = "/src/pages/start-auction.html";
    startAuction.className =
      "h-full px-2 flex items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_200px] hover:bg-[length:200px_200px] bg-no-repeat hover:text-navColor transition-all duration-500";
    startAuction.innerText = "Start Auction";
    startAuctionContainer.append(startAuction);

    const credits = localStorage.getItem("credits");

    const creditsContainer = document.createElement("li");
    creditsContainer.className = "md:h-20 flex";
    loggedInNav.append(creditsContainer);

    const showCredits = document.createElement("p");
    showCredits.className = "flex items-center cursor-pointer";
    showCredits.innerHTML = `Credits:<br>$${credits}`;
    showCredits.addEventListener("click", () => {
      userMenu.classList.toggle("md:hidden");
    });
    creditsContainer.append(showCredits);

    const avatarURL = localStorage.getItem("avatar");
    const avatarContainer = document.createElement("li");
    avatarContainer.className = "md:h-20 flex items-center";
    loggedInNav.append(avatarContainer);

    const avatar = document.createElement("div");
    avatar.className =
      "flex w-16 h-16 bg-cover bg-center bg-no-repeat rounded-full cursor-pointer";
    if (avatarURL) {
      avatar.style.backgroundImage = `url(${avatarURL})`;
    } else {
      avatar.classList.add("bg-avatarPlaceholder");
    }
    avatar.addEventListener("click", () => {
      userMenu.classList.toggle("md:hidden");
      updateAvatarContainer.classList.add("hidden");
    });
    avatarContainer.append(avatar);

    const userMenu = document.createElement("form");
    userMenu.className =
      "flex md:hidden flex-col md:absolute relative md:top-[80px] md:right-0 bg-navColor md:border-importantElement md:border-2 md:p-[3vh] pb-3 gap-3 min-w-[300px]";
    userMenu.id = "avatarForm";
    loggedInNav.append(userMenu);

    const avatarButton = document.createElement("button");
    avatarButton.className = "hover:underline";
    avatarButton.innerText = "Update Avatar";
    avatarButton.name = "Open Avatar Menu";
    avatarButton.addEventListener("click", (e) => {
      e.preventDefault();
      updateAvatarContainer.classList.toggle("hidden");
    });
    userMenu.append(avatarButton);

    const updateAvatarContainer = document.createElement("form");
    updateAvatarContainer.className =
      "flex hidden flex-col absolute md:top-[205px] top-[250px] md:right-0 bg-navColor border-importantElement border-2 p-3 pb-3 gap-3 w-[300px]";
    updateAvatarContainer.id = "updateAvatarMenu";
    loggedInNav.append(updateAvatarContainer);

    const updateAvatarClose = document.createElement("div");
    updateAvatarClose.className = "flex justify-between items-center";
    updateAvatarContainer.append(updateAvatarClose);

    const updateAvatarLabel = document.createElement("label");
    updateAvatarLabel.htmlFor = "updateAvatarInput";
    updateAvatarLabel.className = "text-importantElement text-xl";
    updateAvatarLabel.innerText = "New Avatar URL:";
    updateAvatarClose.append(updateAvatarLabel);

    const updateAvatarCloseIcon = document.createElement("div");
    updateAvatarCloseIcon.style.backgroundImage =
      "url('/src/img/close-icon.svg')";
    updateAvatarCloseIcon.className =
      "w-10 h-10 bg-no-repeat bg-cover cursor-pointer";
    updateAvatarCloseIcon.addEventListener("click", () => {
      updateAvatarContainer.classList.toggle("hidden");
    });
    updateAvatarClose.append(updateAvatarCloseIcon);

    const updateAvatarInput = document.createElement("input");
    updateAvatarInput.type = "text";
    updateAvatarInput.ariaLabel = "New Avatar URL";
    updateAvatarInput.name = "updateAvatar";
    updateAvatarInput.id = "updateAvatarInput";
    updateAvatarInput.className =
      "mb-3 dark:bg-inputBackgroundDark dark:text-whiteTone";
    updateAvatarContainer.append(updateAvatarInput);

    const updateAvatarButton = document.createElement("button");
    updateAvatarButton.innerText = "Update Avatar";
    updateAvatarButton.name = "Update Avatar Button";
    updateAvatarButton.className =
      "bg-importantElement text-xl text-whiteTone py-1 hover:bg-lightBlue transition duration-500";
    updateAvatarButton.addEventListener("click", (e) => {
      e.preventDefault();
      updateAvatar(updateAvatarInput.value);
    });
    updateAvatarContainer.append(updateAvatarButton);

    const logoutButton = document.createElement("button");
    logoutButton.className = "hover:underline";
    logoutButton.innerText = "Logout";
    logoutButton.name = "Logout Button";
    logoutButton.addEventListener("click", logout);
    userMenu.append(logoutButton);
  }
}

export function burgerMenu() {
  const navElementsContainer = document.getElementById("navCollapse");
  navElementsContainer.classList.toggle("hidden");
}
