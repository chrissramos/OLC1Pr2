
//var parser = require('../../../gramatica');
var textoArea;
function cargarEntrada() {
    //alert("Encontro funcion");
    var fileToLoad = document.getElementById("subirEntrada").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("txtAreaEntrada").value = textFromFileLoaded;
        textoArea = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
   // var x = document.getElementById("subirEntrada").content;
    //document.getElementById("txtAreaEntrada").value = x;
    //x.disabled = true;

  }


  /*function archivoE(){
    alert("CONTENIDO:  "+textoArea);

  }*/

  function analizar(){
      alert("Vamos a analizar");
        parser.parse(textoArea);

  }
  exports.textoArea = textoArea;
  
