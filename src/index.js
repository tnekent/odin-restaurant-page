import showHome from "./home/home.js";
import showMenu from "./menu/menu.js"
import showContact from "./contact/contact.js"
import "./index.css";
import "./reset.css"

const showTabsFns = {
  home: showHome,
  menu: showMenu,
  contact: showContact
}
let currentTabName;

const divContent = document.querySelector("#content");
const btnTabSwitchList = document.querySelectorAll("nav>button");
btnTabSwitchList.forEach(btnTab => {
  btnTab.addEventListener("click", function () {
    const tabName = btnTab.textContent.toLowerCase();
    if (currentTabName === tabName) {
      return;
    }
    divContent.innerHTML = "";
    showTabsFns[tabName]();
    currentTabName = tabName;
  })
})

showHome();
currentTabName = "home";
