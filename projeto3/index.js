let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'projeto3/view'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended:false}));

    app.get('/pato', (req,res)=>{
        res.render('Pato');

    });


    app.listen(3000);