//import { render } from '@testing-library/react';
import React, {/*Component,*/ /*useEffect,*/ useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import LogoAzul from './../../Images/logoLogin.svg';
import './SignIn.css';


function Example() {
    const history = useHistory();
    // Declaração das variaveis globais
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msgErro,setMsgErro] = useState("")
    //const [status,setStatus] = useState("")

    const onChangeEmail = (e) => {
        const emailValeu = e.target.value
        setEmail(emailValeu)
    }
    const onChangePassword = (e) => {
        const passwordValue = e.target.value
        setPassword(passwordValue)
    }

    async function validationLogin() {
        
        if (email!=="" && password!==""){
            try {           
                const response = await axios.post('https://reqres.in/api/login',{
                email: email,//"eve.holt@reqres.in",
                password: password//"cityslicka"
                })
                console.log(email)
                console.log(password)
                console.log(response.status)
                //setStatus(response.status)
                localStorage.setItem('@login/email', email)
                //window.location.reload();
                history.push("/exchange")   
                
                     
            } catch (error) {               
                if(error.response.status===400){
                    //setStatus("400")
                    setMsgErro("Usuario não cadastrado")
                    document.getElementsByClassName("erroContainer")[0].style.display="flex"
                }
            }
        }else{
            setMsgErro("Campos vazios(1 ou +)")
            //setStatus("vazio")
            document.getElementsByClassName("erroContainer")[0].style.display="flex"
        }
    }
  
    return(
    <body className="bodySingIn">
        <div className="container">
            <img src={LogoAzul} className="logoTipo" alt="logo"/>
            <div className="containerInputs">
                <input
                className="input" 
                type="email" 
                name="user"
                placeholder="e-mail"
                onChange={onChangeEmail}
                />
                <input
                className="input"  
                type="password" 
                name="senha"
                placeholder="senha"
                onChange={onChangePassword}
                />
            </div>

            <div className="containerButton">
                <button className="button" onClick={validationLogin}>Avançar</button>
            </div>
            <div className="erroContainer">
                <span>Erro:{msgErro}</span>
            </div>

            <div className="alternativeContainer">
                <span className="alternative">ou</span>       
            </div>

            <div className="containerButtonCadastrar">
                <button className="button" >Cadastrar-se</button>
            </div>
            
            <div>
                <spam>(DICA) email: eve.holt@reqres.in senha: cityslicka </spam>
            </div>
        </div>
    </body>
        
    )
}

export default Example;
