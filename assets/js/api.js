"use strict";

/**
 * Fetch Data from server
 * @param {string} URL - API URL
 * @param {Function} callback - Callback function
 */
const api_key ="f35433aa09321a9b6b0e8dc439c83693"
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data));
};

// const base_url = "http://127.0.0.1:3000";
const base_url = "https://api.openweathermap.org";

export const url = {
  currentWeather(lat, lon) {
    return `${base_url}/weather/current?lat=${lat}&lon=${lon}`;
  },
  forecast(lat, lon) {
    return `${base_url}/weather/forecast?lat=${lat}&lon=${lon}`;
  },
  airPollution(lat, lon) {
    return `${base_url}/weather/air-pollution?lat=${lat}&lon=${lon}`;
  },
  reverseGeocoding(lat, lon) {
    return `${base_url}/weather/reverse-geocoding?lat=${lat}&lon=${lon}`;
  },
  /**
   * @param {string} query - City name e.g. London, New York, Tlemcen ...
   * @returns
   */
  geocoding(query) {
    return `${base_url}/weather/geo-coding?query=${query}`;
  },
};

// export const url = {
//   currentWeather(lat, lon) {
//     return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
//   },
//   forecast(lat, lon) {
//     return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
//   },
//   airPollution(lat, lon) {
//     return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
//   },
//   reverseGeocoding(lat, lon) {
//     return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
//   },
//   /**
//    * @param {string} query - City name e.g. London, New York, Tlemcen ...
//    * @returns
//    */
//   geocoding(query) {
//     return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
//   },
// };
