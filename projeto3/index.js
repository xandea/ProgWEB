let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    DB = require('./public/model/DB'),
    jwt = require('jsonwebtoken'),
    jwt_middleware = require('express-jwt'),
    local = require('localStorage');

const userController = require('./public/controller/user-controller');
    
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public/view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('principal.hbs');  
});
    
app.get('/login', (req,res)=>{
    res.render('login1.hbs');  
});
    
app.post('/login', userController.postLogin);

    /*app.get('/registro', jwt_middleware({ secret: 'segredo...', algorithms: ['HS256']}), (req, res) => {
        res.json({ message: `super dados secretos de ${req.body.login} - ${req.body.feature}` });
      });*/

app.get('/registro', (req,res)=>{
    res.render('registro.hbs');
});
    
app.post('/registro', userController.postRegistro);


app.get('/exchange', (req,res)=>{
    res.render('exchange.hbs');  
});

app.listen(3000);