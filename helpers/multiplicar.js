const colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base = 5, hasta = 10, listar = false) => {

    try {
        if (listar) {
            console.log('----------------------------'.green)
            console.log('  Tabla del:'.green, colors.blue(base), ' del 1 al', colors.blue(hasta))
            console.log('----------------------------'.green)
        };
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
            consola += `${base} ${'*'.green} ${index} ${'='.green} ${base * index}\n`;
        }

        if (listar) console.log(consola)

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // console.log('Tabla creada correctamente.');

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }

}

module.exports = { crearArchivo }