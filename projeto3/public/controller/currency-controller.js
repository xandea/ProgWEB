const DB = require('../model/DB'),
    jwt = require('jsonwebtoken');

exports.PostMoeda = async (req, res) =>{
    try {
        const verificaMoeda = await DB.verificaMoeda('currency', req.body.index)
        if(varifica.length === 0){
            cadastro = DB.cadastrarMoeda('currency', req.body.index, req.body.nome, req.body.valorMoeda, req.body.valorMoedaReal);
            res.sendStatus(200)
        }else{
            res.sendStatus(404)
            return
        }
    } catch (error) {
        console.log(error)
    }
}

exports.GetMoeda = async(req, res) =>{
    try {
        const verifica = await DB.buscarMoeda('currency')
        if (verifica.length !== 0){
            res.json({verifica}); 
            //res.sendStatus(200)
            
        }else{
            res.sendStatus(404)
        }
        
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
}