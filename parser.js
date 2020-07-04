var fs = require('fs'); 
var parser = require('./gramatica');
var entradaArchivo = require('./src/public/js/acciones');
//var textoAnalizar = require();

fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString());
});

//console.log(entradaArchivo);

function analizador(){

   /* fs.readFile('./entrada.txt', (err, data) => {
        if (err) throw err;
        parser.parse(data.toString());
    });*/
    var entradaSi = entradaArchivo.textoArea;
    parser.parse(entradaSi.toString());
    console.log("Ejecutando gramatica");

};

// funciones
function archivoE(){
    alert("CONTENIDO:  "+textoArea);

}

module.exports = analizador;