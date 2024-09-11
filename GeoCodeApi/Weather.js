const axios = require("axios");

const WeatherData = (lat, lng, callback) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1b274b6a8139a5eeae5571f298f7258e&units=metric`;

  return axios
    .get(URL)
    .then((result) => {
      const data = result.data.main;
      const Temp = data.temp;
      const Pressure = data.pressure;
      const Humidity = data.humidity;
      const City = result.data.name;
      return { Temp, Pressure, Humidity, City };
    })
    .catch((err) => {
      throw new Error(`Weather data retrieval failed: ${err.message}`);
    });
};

module.exports = { WeatherData };
