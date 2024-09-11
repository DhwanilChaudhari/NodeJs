const axios = require("axios");

const GeocodeData = (city) => {
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;

  return axios
    .get(URL)
    .then((result) => {
      const data = result.data.results[0].geometry;
      const lat = data.lat;
      const lng = data.lng;
      return { lat, lng };
    })
    .catch((err) => {
      throw new Error(`Program error: ${err.message}`);
    });
};

module.exports = { GeocodeData };
