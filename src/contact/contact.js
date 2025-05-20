import "./contact.css";

const createFormField = function (inputType, id, desc) {
  const fieldContainer = document.createElement("p");
  const input = document.createElement("input");
  input.type = inputType;
  input.id = id;
  const label = document.createElement("label");
  label.textContent = desc;
  label.setAttribute("for", id);
  fieldContainer.append(label, input);
  return fieldContainer;
}

export default function () {
  const divContent = document.querySelector("#content");
  divContent.className = "contact";

  const headerContact = document.createElement("header");
  const h1ContactLabel = document.createElement("h1");
  h1ContactLabel.textContent = "Book a reservation";
  headerContact.append(h1ContactLabel);

  const formReservation = document.createElement("form");
  const inputName = createFormField("text", "fullname", "Full Name");
  const inputEmail = createFormField("email", "email", "Email");
  const inputPhoneNumber = createFormField("tel", "phonenum", "Phone Number");
  const inputDate = createFormField("date", "date", "Date");
  const inputTime = createFormField("time", "time", "Time");
  const btnReserve = document.createElement("button");
  btnReserve.textContent = "Reserve";

  formReservation.append(inputName, inputEmail, inputPhoneNumber, inputDate, inputTime, btnReserve);

  divContent.append(headerContact, formReservation);
}
