const button = document.getElementById('btnCarpetas')
//var parser = require('../../../gramatica');
var textoArea;
var textFromFileLoaded;
var textFromJson;
function cargarEntrada() {
    //alert("Encontro funcion");
    var fileToLoad = document.getElementById("subirEntrada").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("txtAreaEntrada").value = textFromFileLoaded;
        textoArea = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
   // var x = document.getElementById("subirEntrada").content;
    //document.getElementById("txtAreaEntrada").value = x;
    //x.disabled = true;

  }


  button.addEventListener('click', () => {
    var fileToLoad = document.getElementById("subirCarpetas").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        textFromFileLoaded = fileLoadedEvent.target.result;
        //document.getElementById("txtAreaEntrada").value = textFromFileLoaded;
        textFromJson = textFromFileLoaded;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
    var jsonString = textFromJson.toString();
    var jsonObjeto = JSON.parse(jsonString);

    
    document.getElementById("carpetasdiv").appendChild(renderjson(jsonObjeto))

  })


  /*function archivoE(){
    alert("CONTENIDO:  "+textoArea);

  }*/

  function analizar(){
      alert("Vamos a analizar");
      
        //parser.parse(textoArea);

  }
