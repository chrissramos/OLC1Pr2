var fs = require('fs'); 
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var parser = require('../gramatica');
let ast;
// settings Express
app.set('port', 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend'));

//middlewares


// routers
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port' , app.get('port'));
})


//analizador
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));


app.post('/', function(request, response){
   // console.log(request.body.txtAreaEntrada)
    parser.parse(request.body.txtAreaEntrada.toString());
    ast = parser.parse(request.body.txtAreaEntrada.toString());
    fs.writeFileSync('./ast.json', JSON.stringify(ast, null, 2));
    console.log('Armando AST');
    response.redirect("./")
})



// npm run dev  