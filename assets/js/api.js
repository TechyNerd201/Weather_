"use strict";

const api_key ="f35433aa09321a9b6b0e8dc439c83693";

export const fetchData = function (URL, callback) {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};

const base_url = "https://api.openweathermap.org";

export const url = {
  currentWeather(lat, lon) {
    return `${base_url}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
  },
  forecast(lat, lon) {
    return `${base_url}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
  },
  airPollution(lat, lon) {
    return `${base_url}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
  },
  reverseGeocoding(lat, lon) {
    return `${base_url}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
  },
  geocoding(query) {
    return `${base_url}/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
  },
};
