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
        res.render('login.hbs')
    });


    app.listen(3000);