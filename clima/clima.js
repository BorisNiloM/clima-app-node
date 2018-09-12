const axios = require('axios');

const getClima = async(lat, lng) => {

    const APIKEY = '16b05773e2882ccdc3296db5e356d71d';

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ APIKEY }`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}