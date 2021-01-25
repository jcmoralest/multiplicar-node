//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors'); 

const { command } = require('yargs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then(archivo => console.log(`archivo cread: ${ archivo.green}`))
        .catch(e=>console.log(e));
    break;
    default:
        console.log('comando no reconocido');
}


//console.log(argv.base);