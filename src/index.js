/*
    npm init -y para crear el package json
    luego
    y npm install express para instalar express

    tmb instalar nodemon npm i nodemon -D
    ejecuto el index con npx nodemon (file)

    tmb instalar ejs npm i ejs
*/
    var express = require('express');  
    var app = express();
    const path = require('path');

    //permite que reciba archivos json
    app.use(express.json());

    //Settings (server)
    app.set('view engine','ejs');
    app.set('port',3000);
    app.set('views',path.join(__dirname,'views'));
    app.engine('html',require('ejs').renderFile);

    //MIDDLEWARE
    app.all('/put',(req,res,next)=>{
        console.log('Paso por el middleware');
        next();
    })
    //Rutas
    app.use(require('./routes/index.js'));

    //Archivos Estaticos
    app.use(express.static(path.join(__dirname, "public")));

    app.listen(3000,()=>{
        console.log('Servidor abierto en el puerto ',app.get('port'));
    });