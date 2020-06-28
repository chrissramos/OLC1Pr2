const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index.html', {title: 'Proyecto 2 Compi1 Vacas'});

});

router.get('/contact', (req,res)=>{
    res.render('contact.html', {title: 'Contacto'});

});


module.exports= router;

// npm run dev  
