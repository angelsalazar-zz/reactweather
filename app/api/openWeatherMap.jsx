const axios = require('axios');
// 40b183bb8696e9701ef42e62e656eac6
// http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=40b183bb8696e9701ef42e62e656eac6

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=40b183bb8696e9701ef42e62e656eac6';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then((res) => {
            console.log(res)
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            console.log(res)
            throw new Error(res.data.message);
        });
    }
};
