const DB = require('../model/DB'),
    jwt = require('jsonwebtoken');

exports.postLogin = async (req,res)=>{
        try{
            let value = await DB.buscarUsuario('user', req.body.email, req.body.senha)
                if(value.length!==0){
                    const token = jwt.sign({
                        login: req.body.email
                    }, 'segredo...');
                    res.json({ token: token });  
                }else{
                    res.sendStatus(404)
                }
            }catch(error){
                res.sendStatus(404)
                console.log(error)
            }  
}

exports.postRegistro = async (req,res)=>{
        try {  
            let buscarUsuario = await DB.buscarUsuario('user', req.body.email, req.body.senha);
            if(buscarUsuario.length===0){
                value = await DB.cadastrarUsuario('user',req.body.email,req.body.senha);    
            }else{
                res.sendStatus(401)
                return
            }
            res.sendStatus(200)       
        } 
        catch (error) { 
                console.log(error)  
        }
    }

exports.getProtegido = ensureToken, (req,res)=>{
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
}    

function ensureToken(req,res,next){
    const bearerHeader = req.header('authorization')
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
       console.log("erroHeader");
       res.sendStatus(403); 
    }
}    