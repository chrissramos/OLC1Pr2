const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.ejs', {title: 'Proyecto 2 Compi1 Vacas'});

});

router.get('/contact', (req,res)=>{
    res.render('contact.html', {title: 'Contacto'});
    
});

router.get('/carpetas', (req,res)=>{
    res.render('carpetas.html', {title: 'CARPETAS'});

});


module.exports= router;

// npm run dev  
