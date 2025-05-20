import "./menu.css";

const menuSeafood = {
  Shrimp: 11.99,
  Catfish: 11.99,
  Oyster: 4.99,
  "Seafood Platter": 19.99
}

const menuSides = {
  "French Fries": 2.99,
  "Potato Salad": 3.99,
  "Cole Slaw": 2.99
}

const menuDrinks = {
  Lemonade: 2.99,
  "Red Wine": 14.99
}

function createTableForMenu(menu, caption) {
  const tableMenu = document.createElement("table");
  const captionMenu = document.createElement("caption");
  captionMenu.textContent = caption;
  tableMenu.append(captionMenu);

  for (let itemName of Object.getOwnPropertyNames(menu)) {
    const trItem = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = itemName;
    const tdPrice = document.createElement("td");
    tdPrice.textContent = menu[itemName];
    trItem.append(tdName, tdPrice);
    tableMenu.append(trItem);
  }

  return tableMenu;
}

export default function () {
  const divContent = document.querySelector("#content");
  divContent.className = "menu";

  const headerMenu = document.createElement("header");
  const h1MenuLabel = document.createElement("h1");
  h1MenuLabel.textContent = "Menu";
  headerMenu.append(h1MenuLabel);

  const tableMenuSeafoodDishes = createTableForMenu(menuSeafood, "Seafood Dishes");
  const tableMenuSides = createTableForMenu(menuSides, "Sides");
  const tableMenuDrinks = createTableForMenu(menuDrinks, "Drinks");

  divContent.append(headerMenu, tableMenuSeafoodDishes, tableMenuSides, tableMenuDrinks);
}
