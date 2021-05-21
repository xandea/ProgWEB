let http = require('http'),
    path = require('path'),
    express = require('express'),
    cors = require('cors'),
    app = express();
    
app.use(cors());    

const userController = require('./public/controller/user-controller');
    
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public/view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
    
app.post('/login', userController.postLogin);

    /*app.get('/registro', jwt_middleware({ secret: 'segredo...', algorithms: ['HS256']}), (req, res) => {
        res.json({ message: `super dados secretos de ${req.body.login} - ${req.body.feature}` });
      });*/

app.get('/protegido', userController.getProtegido);      

app.get('/registro', (req,res)=>{
    res.render('registro.hbs');
});
    
app.post('/registro', userController.postRegistro);

app.listen(process.env.PORT || 3000);