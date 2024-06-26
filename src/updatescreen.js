let location = document.querySelector("h2");
let dates = document.querySelectorAll(".date");
let averages = document.querySelectorAll(".avg>span");
let maxes = document.querySelectorAll(".max>span");
let mins = document.querySelectorAll(".min>span");
let icons = document.querySelectorAll(".icon");
let conditions = document.querySelectorAll(".condition");
function updateScreen(cleanData, unit) {
  location.innerText =
    cleanData.location.name +
    ", " +
    cleanData.location.state +
    ", " +
    cleanData.location.country;
  for (let i = 0; i < 3; i++) {
    dates[i].innerText = cleanData.date[`day${i + 1}`];
    icons[i].src = cleanData.icon[`day${i + 1}`];
    conditions[i].innerText = cleanData.condition[`day${i + 1}`];
    if (unit === "f") {
      averages[i].innerText = cleanData.avgTempF[`day${i + 1}`] + " °F";
      maxes[i].innerText = cleanData.highTempF[`day${i + 1}`] + " °F";
      mins[i].innerText = cleanData.lowTempF[`day${i + 1}`] + " °F";
    } else {
      averages[i].innerText = cleanData.avgTempC[`day${i + 1}`] + " °C";
      maxes[i].innerText = cleanData.highTempC[`day${i + 1}`] + " °C";
      mins[i].innerText = cleanData.lowTempC[`day${i + 1}`] + " °C";
    }
  }
}
export default updateScreen;
