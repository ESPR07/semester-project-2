import { loginToggle, registerToggle } from "./loginRegisterToggle.mjs";

export function renderNav() {
  const body = document.querySelector("body");

  const navElement = document.createElement("nav");
  navElement.className =
    "flex flex-col md:flex-row justify-between items-center px-5 gap-5 bg-navColor text-importantElement text-xl border-b-2 border-importantElement";
  body.prepend(navElement);

  const mobileContainer = document.createElement("div");
  mobileContainer.className = "flex justify-between md:w-20 w-full";
  navElement.append(mobileContainer);

  const burgerIcon = document.createElement("div");
  burgerIcon.className =
    "bg-burgerIcon bg-contain bg-no-repeat bg-bottom w-16 h-16 mr- md:hidden flex cursor-pointer";
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
    "collapse md:visible flex md:flex-row flex-col w-full justify-between items-center gap-5 overflow-hidden";
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
  navMain.append(searchForm);

  const searchInput = document.createElement("input");
  searchInput.className =
    "w-full dark:bg-inputBackgroundDark dark:text-whiteTone";
  searchForm.append(searchInput);

  const searchButton = document.createElement("button");
  searchButton.className =
    "bg-importantElement bg-searchIcon bg-no-repeat bg-center text-whiteTone px-3 w-10";
  searchForm.append(searchButton);

  //Static Local Storage Test
  // localStorage.setItem("accessToken", "YLOHO");
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
    loginButton.id = "loginButton";
    loginButton.className =
      "h-full px-2 flex items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_200px] hover:bg-[length:200px_200px] bg-no-repeat hover:text-navColor transition-all duration-500";
    loginButton.innerText = "Login";
    loginButton.addEventListener("click", loginToggle);
    loginContainer.append(loginButton);

    const registerContainer = document.createElement("li");
    registerContainer.className = "md:h-20 flex";
    loggedOutNav.append(registerContainer);

    const registerButton = document.createElement("button");
    registerButton.id = "registerButton";
    registerButton.className =
      "h-full px-2 mb-5 flex items-center bg-gradient-to-r from-importantElement to-importantElement bg-[length:0px_200px] hover:bg-[length:200px_200px] bg-no-repeat hover:text-navColor transition-all duration-500";
    registerButton.innerText = "Register";
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

    const showCredits = document.createElement("a");
    showCredits.className = "flex items-center";
    showCredits.href = "/src/pages/profile.html";
    showCredits.title = "Profile Page";
    showCredits.innerHTML = `Credits:<br>${credits}`;
    creditsContainer.append(showCredits);

    // Static local Storage Test
    // localStorage.setItem(
    //   "avatar",
    //   "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
    // );
    const avatarURL = localStorage.getItem("avatar");
    const avatarContainer = document.createElement("li");
    avatarContainer.className = "md:h-20 flex items-center";
    loggedInNav.append(avatarContainer);

    const avatar = document.createElement("a");
    avatar.href = "/src/pages/profile.html";
    avatar.title = "Profile Page";
    avatar.className = "flex w-16 h-16 bg-contain rounded-full";
    if (avatarURL) {
      avatar.style.backgroundImage = `url(${avatarURL})`;
    } else {
      avatar.classList.add("bg-avatarPlaceholder");
    }
    avatarContainer.append(avatar);
  }
}

export function burgerMenu() {
  const navElementsContainer = document.getElementById("navCollapse");
  navElementsContainer.classList.toggle("collapse");
}