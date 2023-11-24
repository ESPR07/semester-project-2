/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyBackground: "url('../src/img/background-main.webp')",
        avatarPlaceholder: "url('/src/img/placeholder.png')",
        logo: "url('/src/img/eclipsebid-logo.webp')",
        searchIcon: "url('/src/img/search-icon.svg')",
      },
      fontFamily: {
        headerFont: ["Passion One", "Arial", "Times New Roman"],
        mainFont: ["Ubuntu", "Arial", "Times New Roman"],
      },
      colors: {
        navColor: "#363062",
        importantElement: "#F99417",
        whiteTone: "#F5F5F5",
        lightBlue: "#2696B9",
        inputBackgroundDark: "#3a3b3c",
      },
    },
  },
  plugins: [],
};
