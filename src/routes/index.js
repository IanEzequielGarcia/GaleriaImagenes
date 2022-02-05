const express = require('express');
const router = express.Router();

const csv = require('csv-parser');
const fs = require('fs');
const parsedData = [];

fs.createReadStream('RodYokiCsv.csv')
.pipe(csv({}))
.on('data',(data)=>parsedData.push(data))
.on('end',()=>{
    //console.log(parsedData);
});

router.get('/',(req,res)=>{
    //res.render('index.html',{people:data});
    res.render('index.html',{cvsData:parsedData});
});
router.get('/contact',(req,res)=>{
    res.render('contact.html');
});

router.get('/get',(req,res)=>{
    res.json({
        name:'Juan',
        lastName:'Perez'
    });
});
router.post('/add',(req,res)=>{
    console.log(req.body)
    res.send("nombre "+req.body.name);
    //res.send('Enviado por post');
});
router.put('/put',(req,res)=>{
    res.send('Enviado por put');
});
router.delete('/:userId',(req,res)=>{
    res.send(`id ${req.params.userId} borrado`);
});

module.exports = router;