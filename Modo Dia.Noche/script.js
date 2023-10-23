const $buttonChange = document.getElementById("button-theme");
const $main = document.querySelector("main");
let isDarkMode = false;

const modeChecker = () => {
  if (isDarkMode === false) {
    $buttonChange.classList.add("darkButton");
    $main.classList.add("darkMode");
    isDarkMode = true;
  } else {
    $buttonChange.classList.remove("darkButton");
    $main.classList.remove("darkMode");
    isDarkMode = false;
  }
};

const setedByTime = () => {
  const hours = new Date().getHours();
  console.log(hours);
  if (hours >= 18) {
    isDarkMode = false;
    modeChecker();
  } else {
    isDarkMode = true;
    modeChecker();
  }
};

const buttonListeners = () => {
  $buttonChange.addEventListener("click", event => {
    modeChecker();
  });
};

buttonListeners();
setedByTime();
