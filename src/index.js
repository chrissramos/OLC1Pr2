var fs = require('fs'); 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var parser = require('../gramatica');





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


var variablePrueba = "Randall ";
var variableJsonPrincipal = "";

app.get('/', (req,res)=>{
    console.log('estamos en get');
   // res.render('index.ejs', {variablePrueba: variablePrueba, variableJsonPrincipal: variableJsonPrincipal });
    res.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba
    });

});



app.post('/', function(request, response){
    //var asd = request.body.txtAreaPyton.toString()
   //console.log(asd);

    parser.parse(request.body.txtAreaEntrada.toString());

    ast = parser.parse(request.body.txtAreaEntrada.toString());
    //fs.writeFileSync('./public/ast.json', JSON.stringify(ast, null, 2));
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
    //console.log(ast);
    
    var astString = JSON.stringify(ast);
    variablePrueba = "SALIDA HTML";
    variableJsonPrincipal = astString;
    //console.log(astString);
    //response.render('index.ejs', {variablePrueba: variablePrueba});
    response.render('index.ejs', {
        variableJsonPrincipal: variableJsonPrincipal,
        variablePrueba : variablePrueba
    });
        
    //response.redirect("./")

})





// npm run dev  