let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    DB = require('./public/mvc/model/DB'),
    jwt = require('jsonwebtoken');
    

    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'public/mvc/view'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    app.get('/', (req,res)=>{
        res.render('principal.hbs');  
    });
    
    app.get('/login', (req,res)=>{
        res.render('login.hbs');  
    });
    app.post('/login', async (req,res)=>{
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i
        if (req.body.senha!=="" && emailRegex.test(req.body.email)){
            try{
                let value = await DB.buscarUsuario('user', req.body.email, req.body.senha)
                //res.json(value)
                const token = jwt.sign({
                    login: req.body.email
                  }, 'segredo...');
                //local.setItem('valor',token);
                res.json({ token: token });
                //console.log(value)
            }catch(error){
                console.log(error)
            }  
        }else{
            console.log("erroUsuario");
        }
        //res.end()
    });

    /*app.get('/registro', jwt_middleware({ secret: 'segredo...', algorithms: ['HS256']}), (req, res) => {
        res.json({ message: `super dados secretos de ${req.body.login} - ${req.body.feature}` });
      });*/

    app.get('/protegido',ensureToken,(req,res)=>{
        jwt.verify(req.token, 'segredo...', (err,data)=>{
            if(err){
                res.sendStatus(403);
            }else{
                res.json({
                    text: 'protegido',
                    data: data
                });
            }
        });
    });

    function ensureToken(req,res,next){
        const bearerHeader = req.header('authorization')
        console.log(bearerHeader)
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            //console.log(req.token)
            next();
        }else{
            console.log("erroHeader")
            res.sendStatus(403);
        }
    }

    app.get('/registro', (req,res)=>{
        res.render('registro.hbs');
    });
    app.post('/registro', async (req,res)=>{
        const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i
        if (req.body.senha!=="" && emailRegex.test(req.body.email)){
            try {           
                value = await DB.cadastrarUsuario('user',req.body.email,req.body.senha);
                //localStorage.setItem('@login/email', email)
                //history.push("/exchange")   
            } catch (error) { 
                    console.log(error)  
            }
        }else{
            console.log("email e senha errado");
        }
        //res.end()  
    });

    app.get('/exchange', (req,res)=>{
        res.render('exchange.hbs');  
    });


    app.listen(3000);