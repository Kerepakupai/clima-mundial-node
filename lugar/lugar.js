const axios = require('axios');

// let url1 = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${ decodeDesc }`;
// let url2 = `https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=fAGGuxuiHyC8ZriA2lt2&app_code=YvotZXbwZceihaBzYWMscQ&searchtext=${ decodeDesc }`;


const getLugarLatLng = async(direccion) => {

    let decodeDir = decodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ decodeDir}`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados para la direccion ${ direccion }`);
    }

    let coors = resp.data.results[0].geometry.location;
    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}

module.exports = {
    getLugarLatLng
};