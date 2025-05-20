import SeasideImg from "../resort.jpg";
import "./home.css";

export default function () {
  const divContent = document.querySelector("#content");
  divContent.className = "home";

  const headerHome = document.createElement("header");
  const imgSeaside = document.createElement("img");
  const h1BusinessName = document.createElement("h1");
  const pTagline = document.createElement("p");

  imgSeaside.src = SeasideImg;
  h1BusinessName.textContent = "Seaside Palace";
  pTagline.textContent = "Where the sea waves crash over to your plates.";

  headerHome.append(imgSeaside, h1BusinessName, pTagline);

  const sectionDesc = document.createElement("section");
  sectionDesc.className = "description"
  const pDesc = document.createElement("p");
  pDesc.textContent = "This restaurant overlooks the beach with a view of the eastern sun. Food is freshly caught and served to customers."
  sectionDesc.appendChild(pDesc);

  const sectionOpenTimes = document.createElement("section");
  sectionOpenTimes.className = "open-hours";
  const tableOpenTimes = document.createElement("table");
  const openTimesTable = {
    "Monday - Friday": "7:00 AM - 9:00 PM",
    Saturday: "8:00 AM - 6:00 PM",
    Sunday: "8:00 AM - 12:00 PM"
  }
  const thead = document.createElement("thead");
  const trTableHead = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Days";
  const th2 = document.createElement("th");
  th2.textContent = "Open Hours";
  trTableHead.append(th1, th2);
  thead.appendChild(trTableHead);


  const tbody = document.createElement("tbody");
  for (let key of Object.getOwnPropertyNames(openTimesTable)) {
    const trTableBody = document.createElement("tr");
    const tableCell1 = document.createElement("td");
    tableCell1.textContent = key;
    const tableCell2 = document.createElement("td");
    tableCell2.textContent = openTimesTable[key];
    trTableBody.append(tableCell1, tableCell2);
    tbody.appendChild(trTableBody);
  }

  tableOpenTimes.append(thead, tbody);
  sectionOpenTimes.appendChild(tableOpenTimes);

  divContent.append(headerHome, sectionDesc, sectionOpenTimes);
}
