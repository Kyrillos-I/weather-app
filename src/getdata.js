async function weatherData(location) {
  try {
    if (location === "") {
      throw new Error("You must input a location to submit.");
    } else {
      let apiHTTP = await fetch(
        "http://api.weatherapi.com/v1/forecast.json?key=fb26bbd88a824d80857194824242106&q=" +
          location +
          "&days=3",
        { mode: "cors" }
      );
      let apiJSON = await apiHTTP.json();
      console.log(apiJSON);
      return apiJSON;
    }
  } catch (error) {
    alert(error);
  }
}
export default weatherData;
