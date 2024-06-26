import getdata from "./getdata.js";
import processData from "./processdata.js";
import updateScreen from "./updatescreen.js";
import "./reset.css";
import "./style.css";

let locationForm = document.querySelector("form");
let locationInput = document.querySelector("input");
let location = "New York City";
let unit = "f";
let farenheit = document.querySelector(".farenheit");
let celsius = document.querySelector(".celsius");

async function manageLogic() {
  let data = await getdata(location);
  if (data === undefined) {
    return;
  } else if (data.error) {
    alert("No matching location found.");
    return;
  }
  let cleanData = processData(data);
  console.log(cleanData.avgTempF.day1);
  updateScreen(cleanData, unit);
}
manageLogic();

locationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  location = locationInput.value;
  manageLogic();
});

farenheit.addEventListener("click", function () {
  farenheit.classList.add("selected");
  celsius.classList.remove("selected");
  unit = "f";
  manageLogic();
});

celsius.addEventListener("click", function () {
  celsius.classList.add("selected");
  farenheit.classList.remove("selected");
  unit = "c";
  manageLogic();
});
