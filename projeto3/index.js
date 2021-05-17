let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    DB = require('./public/mvc/model/DB');
    

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'public/mvc/view'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    

    app.get('/', (req,res)=>{
        res.render('login.hbs');  
    });

    app.get('/registro', (req,res)=>{
        res.render('registro.hbs');
    });

    app.post('/registro', async (req,res)=>{
        //console.log(req.body.email);
        try{
            value = await DB.buscar('user'); // buscar funcionando
            //value = await  DB.enviar('user',req.body.email); //Envio funcioando
            console.log(value);
        }catch{
            console.log("erro");
        }
        res.end();
        //await db.create({email: req.body.email});
        
    });


    app.listen(3000);