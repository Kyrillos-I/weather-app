function processData(data) {
  return {
    location: {
      name: data.location.name,
      state: data.location.region,
      country: data.location.country,
    },
    date: {
      day1: data.forecast.forecastday[0].date,
      day2: data.forecast.forecastday[1].date,
      day3: data.forecast.forecastday[2].date,
    },
    avgTempF: {
      day1: data.forecast.forecastday[0].day.avgtemp_f,
      day2: data.forecast.forecastday[1].day.avgtemp_f,
      day3: data.forecast.forecastday[2].day.avgtemp_f,
    },
    avgTempC: {
      day1: data.forecast.forecastday[0].day.avgtemp_c,
      day2: data.forecast.forecastday[1].day.avgtemp_c,
      day3: data.forecast.forecastday[2].day.avgtemp_c,
    },
    highTempF: {
      day1: data.forecast.forecastday[0].day.maxtemp_f,
      day2: data.forecast.forecastday[1].day.maxtemp_f,
      day3: data.forecast.forecastday[2].day.maxtemp_f,
    },
    highTempC: {
      day1: data.forecast.forecastday[0].day.maxtemp_c,
      day2: data.forecast.forecastday[1].day.maxtemp_c,
      day3: data.forecast.forecastday[2].day.maxtemp_c,
    },
    lowTempF: {
      day1: data.forecast.forecastday[0].day.mintemp_f,
      day2: data.forecast.forecastday[1].day.mintemp_f,
      day3: data.forecast.forecastday[2].day.mintemp_f,
    },
    lowTempC: {
      day1: data.forecast.forecastday[0].day.mintemp_c,
      day2: data.forecast.forecastday[1].day.mintemp_c,
      day3: data.forecast.forecastday[2].day.mintemp_c,
    },
    condition: {
      day1: data.forecast.forecastday[0].day.condition.text,
      day2: data.forecast.forecastday[1].day.condition.text,
      day3: data.forecast.forecastday[2].day.condition.text,
    },
    icon: {
      day1: data.forecast.forecastday[0].day.condition.icon,
      day2: data.forecast.forecastday[1].day.condition.icon,
      day3: data.forecast.forecastday[2].day.condition.icon,
    },
  };
}
export default processData;
