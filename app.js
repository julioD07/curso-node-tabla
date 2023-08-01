const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')







// Limpiamos la consola
console.clear()

// console.log(argv)

// console.log('base: yargs', argv.base)

crearArchivoAsync(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.green), 'creado')
    .catch(err => console.log(err))
