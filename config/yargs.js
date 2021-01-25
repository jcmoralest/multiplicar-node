const opts = {
     base: {
                    demand: true,
                    alias: 'b'
                },
                limite: {
                    alias: 'l',
                    default: 10
                }
}

//requireds
const argv = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
            .command('crear', 'guarda en el archivo la tabla de multiplicar', opts)
            .help()
            .argv;

module.exports = {
    argv
}