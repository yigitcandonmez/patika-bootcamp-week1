const clockElement = document.querySelector("#myClock");
const spanElement = document.querySelector("#myName");

const daysArray = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const getName = () => {
  const userName = prompt("Adınız nedir?");
  spanElement.innerHTML = userName;
};

const clockDisplay = () => {
  const timeEvent = new Date();
  const timeSelector = timeEvent.toLocaleTimeString("it-IT");
  const daySelector = timeEvent.getDay();
  const dayPairing = daysArray[daySelector];
  const display = timeSelector + " " + dayPairing;
  clockElement.innerHTML = display;
};

window.onload = function () {
  getName();
  setInterval(clockDisplay, 1000);
};
