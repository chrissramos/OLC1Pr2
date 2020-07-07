//const button = document.getElementById('btnCarpetas')
//var parser = require('../../../gramatica');
var textoArea;
var textFromFileLoaded;
var textFromJson;
var archivoo = '../helloworld.txt';
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

  function verCarpetas(){
    alert("vamos a ver carpetas");
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
  }


  /*button.addEventListener('click', () => {
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

  })*/


  /*function archivoE(){
    alert("CONTENIDO:  "+textoArea);

  }*/

  function analizar(){
    //cargar cosas
      alert("cargar datos a textareas");
      
      //alert(__dirname);
        //parser.parse(textoArea);

  }
