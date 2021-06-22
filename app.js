const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();


// const [, , arg3 = 5] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// const base = 2;

crearArchivo(argv.b, argv.h ,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

