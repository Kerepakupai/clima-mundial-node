const argv = require('./config/yargs').argv;
const axios = require('./config/axios').axios;

let decodeDesc = decodeURI(argv.direccion);

let url1 = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${ decodeDesc }`;
let url2 = `https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=fAGGuxuiHyC8ZriA2lt2&app_code=YvotZXbwZceihaBzYWMscQ&searchtext=${ decodeDesc }`;

axios.get(url1)
    .then(response => {
        /* Parametros de URL1
            let locationResp = response.data.Response.View[0].Result[0].Location.NavigationPosition[0];
            let addressResp = response.data.Response.View[0].Result[0].Location.Address;

            let latitud = locationResp.Latitude;
            let longitud = locationResp.Longitude;

            let address = addressResp.Label;
        */

        let coors = response.data.results[0].geometry.location;
        let direccion = response.data.results[0].formatted_address;

        console.log(`LATITUD: ${ coors.lat }`);
        console.log(`LONGITUD: ${ coors.lng }`);
        console.log(`DIRECCION: ${ direccion }`);
    })
    .catch(error => console.log('ERROR!!!!', error.code));