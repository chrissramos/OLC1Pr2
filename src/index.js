const express = require('express');
const app = express();
const path = require('path');

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


// npm run dev  