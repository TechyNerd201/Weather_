"use strict";

const corsProxy = "https://thingproxy.freeboard.io/fetch/";
const api_key = "f35433aa09321a9b6b0e8dc439c83693";
const base_url = "https://api.openweathermap.org";

export const fetchData = function (URL, callback) {
  fetch(`${corsProxy}${URL}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error fetching data:", error));
};

export const url = {
  currentWeather(lat, lon) {
    return `${base_url}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `${base_url}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `${base_url}/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
  },
  reverseGeocoding(lat, lon) {
    return `${base_url}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
  },
  geocoding(query) {
    return `${base_url}/geo/1.0/direct?q=${query}&limit=5`;
  },
};
