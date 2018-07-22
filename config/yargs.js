const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la Ciudad para obtener el Clima'
    }
}).argv;


module.exports = {
    argv
};