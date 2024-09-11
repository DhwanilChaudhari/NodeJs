const geocode = require("./Geocode");
const weather = require("./Weather");

const city = process.argv[2];
if (!city) {
  console.log("City name is required!");

  return;
}

geocode
  .GeocodeData(city)
  .then((location) => {
    const { lat, lng } = location;
    return weather.WeatherData(lat, lng);
  })
  .then((weatherData) => {
    ~console.log(`
      City: ${weatherData.City}
      Lat: ${weatherData.lat}
      Lng: ${weatherData.lng}
      Temp: ${weatherData.Temp}
      Pressure: ${weatherData.Pressure}
      Humidity: ${weatherData.Humidity}
    `);
  })
  .catch((err) => {
    console.log(err.message);
  });
