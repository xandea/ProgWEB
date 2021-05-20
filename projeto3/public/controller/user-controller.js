exports.postLogin = async (req,res)=>{
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
            console.log("erroUsuario")
        }
        //res.end()
}

exports.postRegistro = async (req,res)=>{
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i
    if (req.body.senha!=="" && emailRegex.test(req.body.email)){
        try {           
            value = await DB.cadastrarUsuario('user',req.body.email,req.body.senha);
                //localStorage.setItem('@login/email', email)
                //history.push("/exchange")   
        } 
        catch (error) { 
                console.log(error)  
        }
    }else{
        console.log("email e senha errado")
        }
        //res.end()  
    }