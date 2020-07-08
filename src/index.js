var fs = require('fs'); 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var parser = require('../gramatica');
var parserDos = require('../gramatica2');
var html2json = require('html2json').html2json;
//const parse = require('himalaya');

//const html = fs.readFileSync('./hello.txt', {encoding: 'utf8'});
//const json = parse(html);
var himalaya = require('himalaya');


let ast;
global.globalast;
// settings Express
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'frontend'));

//middlewares
//var variablePrueba;

// routers
//app.use(require('./routes/index'));




//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port' , app.get('port'));
})

//analizador
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));

//variables para los textAreas
var variablePrueba = "Randall ";
var variableJsonPrincipal = "";
var variableHtml = "";
var variableTabla = "";
var variableHtmlAJson = "";

app.get('/', (req,res)=>{
    console.log('estamos en get');
   // res.render('index.ejs', {variablePrueba: variablePrueba, variableJsonPrincipal: variableJsonPrincipal });
    res.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba,
        variableHtml : variableHtml,
        variableTabla : variableTabla,
        variableHtmlAJson : variableHtmlAJson
    });

});



app.post('/', function(request, response){
    //parser.parse(request.body.txtAreaEntrada.toString());

    ast = parser.parse(request.body.txtAreaEntrada.toString());

    // haciendo el arbol ast.json
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
    var lectura = fs.readFileSync('./tableHtml.txt', {encoding: 'utf8'});
    console.log("leyendo html");
    console.log(lectura);
    variableHtml = lectura;

    var jsonHt = html2json(lectura);
    //console.log('------YA ES JSON-----------')
    var jsonEnString = JSON.stringify(jsonHt, ' ', ' ')
    //console.log(JSON.stringify(jsonHt, ' ', ' '));
    variableHtmlAJson = jsonEnString;
    

    var astString = JSON.stringify(ast);
    variablePrueba = "SALIDA HTML";
    variableJsonPrincipal = astString;
    
    response.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba,
        variableHtml : variableHtml,
        variableHtmlAJson : variableHtmlAJson
    });
        
    //response.redirect("./")

})





// npm run dev  