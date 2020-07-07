var fs = require('fs'); 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var parser = require('../gramatica');
const parse = require('himalaya');

//const html = fs.readFileSync('./hello.txt', {encoding: 'utf8'});
//const json = parse(html);
var himalaya = require('himalaya');
var html = fs.readFileSync('./hello.html');
var jsonSalida = himalaya.parse(html);

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

app.get('/', (req,res)=>{
    console.log('estamos en get');
   // res.render('index.ejs', {variablePrueba: variablePrueba, variableJsonPrincipal: variableJsonPrincipal });
    res.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba,
        variableHtml : variableHtml
    });

});



app.post('/', function(request, response){
    parser.parse(request.body.txtAreaEntrada.toString());

    ast = parser.parse(request.body.txtAreaEntrada.toString());

    //fs.writeFileSync('./public/ast.json', JSON.stringify(ast, null, 2));
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
    //console.log(ast);
    console.log('leyendo html desde el servidor')
    var jsonStr = JSON.stringify(jsonSalida)
    console.log(jsonStr)


    try {  
        variableHtml = fs.readFileSync('./hello.txt', 'utf8');
        //console.log(data.toString());    
    } catch(e) {
        console.log('Errorsito:', e.stack);
    }

    
    var astString = JSON.stringify(ast);
    variablePrueba = "SALIDA HTML";
    variableJsonPrincipal = astString;
    
    response.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba,
        variableHtml : variableHtml
    });
        
    //response.redirect("./")

})





// npm run dev  