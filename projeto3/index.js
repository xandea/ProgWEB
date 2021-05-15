let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    db = require('./mvc/model/db');

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'mvc/view'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended:false}));
    

    app.get('/', (req,res)=>{
        res.render('login.hbs');  
    });

    app.get('/registro', (req,res)=>{
        res.render('registro.hbs');
    });

    app.post('/registro', /*async*/ (req,res)=>{
        console.log(req.body.email);
        res.end();
        //await db.create({email: req.body.email});
        
    });


    app.listen(3000);