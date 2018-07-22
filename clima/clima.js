const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=592f6a73aa3ee78cb0631d8f706988ea`)

    return resp.data.main.temp;

};

module.exports = {
    getClima
};