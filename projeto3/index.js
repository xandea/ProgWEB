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

app.post('/registro', userController.postRegistro);

app.get('/exchange', userController.getProtegido);      

app.listen(process.env.PORT || 3000);