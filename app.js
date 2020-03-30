const fileSystem = require('fs');

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        break;
    case 'crear':
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
}