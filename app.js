const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const colors = require('colors/safe');

/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lng)
            //.then(temp => console.log(temp))
            //.catch(e => console.log(e))
    })
    .catch(err => console.log(err));
*/


const getInformacion = async(direccion) => {
    try {
        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);

        return {
            ciudad: coord.direccion,
            temp
        }
    } catch (error) {
        return `No se pudo determinar el clima en ${ colors.red(direccion) }`;
    }
};

getInformacion(argv.direccion)
    .then(datos => console.log(`La temperatura en ${ colors.green(datos.ciudad) } es de ${ colors.green(datos.temp) }ºC`))
    .catch(err => console.log(err));